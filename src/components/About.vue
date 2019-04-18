<template>
    <section class="text-white py-32 bg-black w-5/6 px-12 lg:w-max mx-auto" id="about">
        <div class="w-full">
            <h1 class="about-header">About Me</h1>
            <div class="about-inner py-6 w-full lg:w-1/2">
                <div class="about-blurb text-grey-lightest leading-normal">
                    <p>Hello! I'm Adrian Struszczyk, a web developer based in Brooklyn, NY. I make websites and I need to hire a copywriter.</p>
                    <p>I'm one foreign language class away from graduating. 🎓</p>
                    <p>When I'm not programming I'm banging my head against the wall.</p>
                    <p>Here's a few things I'm experienced with: </p>
                </div>
                <ul class="about-skills text-grey-lightest text-sm leading-loose">
                    <li>- Javscript</li>
                    <li>- Typescript</li>
                    <li>- Vue </li>
                    <li>- React</li>
                    <li>- Vue </li>
                    <li>- React</li>
                    <li>- Vue </li>
                    <li>- React</li>
                    <li>- Vue </li>
                    <li>- React</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ScrollReveal from 'scrollreveal';

@Component
export default class About extends Vue {
    constructor() {
        super();
    }

    private mounted() {
        // @ts-ignore
        ScrollReveal().reveal('.about-blurb, .about-header', {
            delay: 50,
            cleanup: true,
            distance: '50px',
        });
        // @ts-ignore
        ScrollReveal().reveal('.about-skills', {
            delay: 50,
            cleanup: true,
            distance: '150px',
            origin: 'left',
        });
    }
}
</script>

<style scoped>
.about-skills {
    column-count: 2;
}
</style>
