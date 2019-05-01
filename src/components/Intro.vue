<template>
    <section id="intro">
       <div id="canvas" class="w-screen h-screen absolute"></div>
        <div class="blurb absolute font-bold text-white w-5/6 lg:w-max mx-auto">
            <h4 class="text-sm sm:text-base md:text-xl fade-in">Hello</h4>
            <h1 class="text-lg sm:text-4xl py-2 fade-in font-sans tracking-wide">I'm Adrian Struszczyk</h1>
            <h1 class="text-sm sm:text-2xl text-grey-lightest fade-in">I build things with my keyboard</h1>
            <p class="text-xs lg:text-lg py-6 leading-normal fade-in font-sans tracking-wide">I'm currently a last year student at CUNY Hunter studying Computer Science. My interests include software engineering, web development, and cloud computing.</p>
        </div>
    </section>
</template>


<script lang=ts>
import { Component, Prop, Vue } from 'vue-property-decorator';
import * as THREE from 'three';
import {OrbitControls} from 'three-orbitcontrols-ts';
import {EffectComposer, EffectPass, RenderPass, NoiseEffect, BlendFunction, Effect } from 'postprocessing';
import {introConfig, IntroConfig} from '@/data/intro';
import image from '@/assets/textures/nasa-desat.jpg';
import {TweenMax} from 'gsap';
import Stats from 'stats.js';
import Mouse from '../utility/mouse';
import * as dat from 'dat.gui';

import ScrollReveal from 'scrollreveal';

@Component
export default class Intro extends Vue {
    private config: IntroConfig;
    private camera: THREE.PerspectiveCamera;
    private scene: THREE.Scene;
    private renderer: THREE.WebGLRenderer;
    private frameId: number;
    private composer: any;
    private clock: THREE.Clock;
    private mouse: Mouse;
    private controls: any;
    private meshes: Map<string, THREE.Mesh>;
    private stats!: Stats;
    private gui!: dat.GUI;

    constructor() {
        super();
        this.config = introConfig;
        this.frameId = -1;
        this.clock = new THREE.Clock();
        this.mouse = new Mouse();
        this.meshes = new Map();
        this.camera = this.setupCamera();
        this.scene = this.setupScene();
        this.setupLights();
        this.renderer = this.setupRenderer();
        this.composer = new EffectComposer(this.renderer);
        this.setupPostProcessing();

        // this.stats = new Stats();
        // this.gui = this.setupGUI();
        // this.setupControls();
    }

    private created() {
        window.addEventListener('resize', this.onWindowResize);
        if (!this.controls) {
           window.addEventListener( 'mousemove', this.onMouseMove );
        }
    }

    private mounted() {
        this.$el.appendChild( this.composer.getRenderer().domElement );
        if (this.stats) {
           this.$el.appendChild( this.stats.dom );
        }

        // @ts-ignore
        ScrollReveal().reveal('.fade-in', {delay: 1200, interval: 200});

        this.start();
    }

    private unmount() {
        this.stop();
        this.$el.removeChild(this.composer.getRenderer().domElement);
        this.gui.destroy();
    }

    private setupCamera() {
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .01, 1000);
        camera.position.set( 0, 0, 500);
        camera.updateProjectionMatrix();

        return camera;
    }

    private setupScene = () => {
        const scene = new THREE.Scene();
        // @ts-ignore
        const texture = new THREE.TextureLoader().load(image);
        const material = new THREE.MeshPhongMaterial({
            map: texture,
            });

        const geometry = new THREE.SphereGeometry( 200, 32, 32 );

        const faceVertexUvs = geometry.faceVertexUvs[ 0 ];
        for (let i = 0; i < faceVertexUvs.length; i ++ ) {
            const uvs = faceVertexUvs[ i ];
            const face = geometry.faces[ i ];
            for ( let j = 0; j < 3; j ++ ) {
                uvs[ j ].x = face.vertexNormals[ j ].x * 0.5 + 0.5;
                uvs[ j ].y = face.vertexNormals[ j ].y * 0.5 + 0.5;

            }
        }

        const sphere = new THREE.Mesh( geometry, material );
        sphere.position.set(0, 0, 0);
        sphere.updateMatrix();

        this.meshes.set('sphere', sphere);

        scene.background = new THREE.Color('rgb(51, 62, 74)');
        scene.add(sphere);

        return scene;
    }

    private setupLights = () => {
        const light1 = new THREE.DirectionalLight( 0xffffff );
        light1.position.set( 1, 1, 1 );
        this.scene.add( light1 );

        const light2 = new THREE.DirectionalLight( 0x000000 );
        light2.position.set( 100, 100, 100 );
        this.scene.add( light2 );

        const light3 = new THREE.AmbientLight( 0x232427 );
        this.scene.add( light3 );
    }

    private setupRenderer() {
        const renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.setClearColor('#002200', .03);

        return renderer;
    }

    private setupControls = () => {
        this.controls = new OrbitControls(this. camera, this.composer.getRenderer().domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.2;
        this.controls.enableKeys = false;
    }

    private setupGUI = () => {
        const gui = new dat.GUI();
        const cameraFolder = gui.addFolder('mousemove');
        const sphereFolder = gui.addFolder('sphere');
        cameraFolder.add(this.config.mousemove, 'delay', 0, 100);
        cameraFolder.add(this.config.mousemove, 'tweenDuration', 0, 120);
        sphereFolder.add(this.config.sphere.rotation, 'x', 0, 1.0000);
        sphereFolder.add(this.config.sphere.rotation, 'y', 0, 1.00000);
        sphereFolder.add(this.config.sphere.rotation, 'z', 0, 1.00000);

        return gui;
    }

    private setupPostProcessing = () => {
        const noiseEffect = new NoiseEffect({
            blendFunction: BlendFunction.OVERLAY,
        });

        const renderPass = new RenderPass(this.scene, this.camera);
        const noisePass = new EffectPass(this.camera, noiseEffect);

        this.composer.addPass(renderPass);
        this.composer.addPass(noisePass);

        noisePass.renderToScreen = true;
    }

    private start() {
        if (this.frameId) {
            this.frameId = requestAnimationFrame(this.animate);
        }
    }

    private stop() {
        cancelAnimationFrame(this.frameId);
    }

    private animate = () => {
        // this.stats.begin();

        this.renderScene();
        this.frameId = window.requestAnimationFrame(this.animate);

        // this.stats.end();
    }

    private renderScene = () => {
        const delta = this.clock.getDelta();

        this.composer.render(delta);

        const sphere = this.meshes.get('sphere');
        if (sphere !== undefined) {
            sphere.rotation.x += delta * this.config.sphere.rotation.x;
            sphere.rotation.y += delta * this.config.sphere.rotation.y;
            sphere.rotation.z += delta * this.config.sphere.rotation.z;
        }
    }

    private updateCamera = () => {
        this.camera.rotation.x += ( this.mouse.x * 0.1 - this.camera.rotation.x ) * 0.11;
        this.camera.rotation.y += ( this.mouse.y * -0.1 - this.camera.rotation.y ) * 0.11;
    }

    private onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    private onMouseMove = (e: MouseEvent) => {
        TweenMax.to(this.mouse, this.config.mousemove.tweenDuration, {
            x: -( e.clientY / window.innerHeight ) * 2 + 1,
            y: ( e.clientX / window.innerWidth ) * 2 - 1,
            delay: this.config.mousemove.delay,
            useFrames: true,
            onUpdate: () => {
                this.updateCamera();
            },
        });
    }
}
</script>


<style lang="scss" scoped>
    .blurb {
      max-width: 700px;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -30%);
      p {
          max-width: 500px;
      }
    }

    .dg {
        z-index: 100 !important;
    }
</style>