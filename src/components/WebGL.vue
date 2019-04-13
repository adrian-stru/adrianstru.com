<template>
    <div id="canvas">
    </div>
</template>


<script lang=ts>
import { Component, Prop, Vue } from 'vue-property-decorator';
import * as THREE from 'three';
import { BloomEffect, EffectComposer, EffectPass, RenderPass } from 'postprocessing';
import { Clock } from 'three';

@Component
export default class WebGL extends Vue {

    protected camera: THREE.PerspectiveCamera;
    protected scene: THREE.Scene;
    protected renderer: THREE.WebGLRenderer;
    private frameId: number;
    private el: any;
    private composer: any;
    private clock: Clock;

    constructor() {
        super();
        this.clock = new Clock();
        this.camera = this.setupCamera();
        this.scene = this.setupScene();
        this.renderer = this.setupRenderer();
        // this.composer = new EffectComposer(this.rend);
        // this.renderer = this.composer.renderer;
        // this.setupPostProcessing();
        this.frameId = -1;

    }

    private mounted() {
       this.$el.appendChild( this.renderer.domElement );
       window.addEventListener('resize', this.onWindowResize);

       this.start();
    }

    private unmount() {
        this.stop();
        this.$el.removeChild(this.renderer.domElement);
    }

    private setupCamera() {
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .01, 1000);
        camera.position.set( 0, 0, 750);
        camera.position.z = 5;

        return camera;
    }

    private setupScene() {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('rgb(255, 232, 232)');
        scene.fog = new THREE.FogExp2( 0xcccccc, 0.0001 );

        const geometry = new THREE.OctahedronBufferGeometry( 12 );
        const material = new THREE.MeshPhongMaterial({ color: 0xffffdd, flatShading: true });

        for ( let i = 0; i < 500; i++) {
            const mesh = new THREE.Mesh( geometry, material );
            mesh.position.x = Math.random() * 1600 - 800;
            mesh.position.y = Math.random() * 1600 - 800;
            mesh.position.z = Math.random() * 1600 - 800;
            mesh.updateMatrix();
            mesh.matrixAutoUpdate = false;
            scene.add( mesh );
        }

        return scene;
    }

    private setupRenderer() {
        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: false,
        });
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.setClearColor('#002200', .03);

        return renderer;
    }

    private setupPostProcessing() {
       const renderPass = new RenderPass(this.scene, null);
       renderPass.renderToScreen = true;
       renderPass.enabled = true;


       console.log(this.composer.renderer);
    }

    private start() {
        if (this.frameId) {
            this.frameId = requestAnimationFrame(this.animate);
        }
    }

    private stop() {
        cancelAnimationFrame(this.frameId);
    }

    private animate() {
        this.renderScene();
        this.frameId = window.requestAnimationFrame(this.animate);
    }

    private renderScene() {
        // this.composer.render(clock);
        this.renderer.render(this.scene, this.camera);
    }

    private onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
}
</script>


<style scoped>

    #canvas {
        position: absolute;
        width: 100vw;
        height: 100vh;   
    }

</style>
