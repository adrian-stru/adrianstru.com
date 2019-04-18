<template>
    <section id="intro">
       <div id="canvas"></div>
        <div class="blurb">
            <h4 class="text-xl">Hello</h4>
            <h1 class="text-4xl py-2">I'm Adrian Struszczyk</h1>
            <h1 class="text-2xl text-grey-lightest">I build things with my keyboard</h1>
            <p class="py-6 leading-normal">I'm currently a last year student at CUNY Hunter stuyding Computer Science.</p>
        </div>
    </section>
</template>


<script lang=ts>
import { Component, Prop, Vue } from 'vue-property-decorator';
import * as THREE from 'three';
import {EffectComposer, EffectPass, RenderPass, NoiseEffect, BlendFunction, Effect } from 'postprocessing';
import Stats from 'stats.js';
import Mouse from '../utility/mouse';
import image from '@/assets/textures/nasa-desat.jpg';
import {OrbitControls} from 'three-orbitcontrols-ts';

@Component
export default class Intro extends Vue {

    protected camera: THREE.PerspectiveCamera;
    protected scene: THREE.Scene;
    protected renderer: THREE.WebGLRenderer;
    private frameId: number;
    private el: any;
    private composer: any;
    private clock: THREE.Clock;
    private mouse: Mouse;
    private controls: any;
    private meshes: Map<string, THREE.Mesh>;
    private stats!: any;

    constructor() {
        super();
        this.clock = new THREE.Clock();
        this.mouse = new Mouse();
        this.meshes = new Map();
        this.camera = this.setupCamera();
        this.scene = this.setupScene();
        this.setupLights();
        this.renderer = this.setupRenderer();
        this.composer = new EffectComposer(this.renderer);

        // @ts-ignore
        this.stats = new Stats();

        this.setupPostProcessing();
        this.frameId = -1;

        // this.setupControls();
    }

    private mounted() {
        this.$el.appendChild( this.composer.getRenderer().domElement );
        this.$el.appendChild( this.stats.dom );
        window.addEventListener('resize', this.onWindowResize);
        if (!this.controls) {
           window.addEventListener( 'mousemove', this.onDocumentMouseMove );
        }
        this.start();
    }

    private unmount() {
        this.stop();
        this.$el.removeChild(this.composer.getRenderer().domElement);
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
        this.stats.begin();

        this.renderScene();
        this.frameId = window.requestAnimationFrame(this.animate);

        this.stats.end();
    }

    private renderScene = () => {
        const delta = this.clock.getDelta();

        this.composer.render(delta);

        const sphere = this.meshes.get('sphere');
        if (sphere !== undefined) {
            sphere.rotation.x += delta * 1 / 32;
            sphere.rotation.y += delta * 1 / 32;
        }
    }

    private updateCamera = (e: MouseEvent) => {
        this.mouse.set( -( e.clientY / window.innerHeight ) * 2 + 1, ( e.clientX / window.innerWidth ) * 2 - 1);
        this.camera.rotation.x += ( this.mouse.x * 0.1 - this.camera.rotation.x ) * 0.11;
        this.camera.rotation.y += ( this.mouse.y * -0.1 - this.camera.rotation.y ) * 0.11;
    }

    private onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    /**
     * TODO Throttle mouse event for performance
     */
    private onDocumentMouseMove(e: MouseEvent) {
        this.updateCamera(e);
    }
}
</script>


<style>

    #canvas {
        position: absolute;
        width: 100vw;
        height: 100vh;
    }

    .blurb {
      position: absolute;
      max-width: 1000px;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -30%);
      font-weight: bold;
      color: white;
    }
</style>
