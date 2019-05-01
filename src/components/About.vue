<template>
    <section class="base-grid text-white bg-black" id="about">
        <div class="w-full lg:w-2/3 lg:mx-auto">
            <h1 class="about-header text-center sm:text-left">About Me</h1>
            <div class="about-inner py-6 w-full">
                <div class="about-inner__blurb text-grey-lightest leading-normal text-left font-sans text-xl">
                    <p v-for="(inner, index) in config.paragraphs" :key="index" v-html="inner"/>
                </div>
                <ul class="about-inner_skills col-count-2 text-grey-lightest text-sm leading-loose">
                    <li v-for="(skill, index) in config.skills" :key="index">
                        - {{skill}}
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ScrollReveal from 'scrollreveal';
import {aboutConfig, AboutConfig} from '@/data/about';

@Component
export default class About extends Vue {
    private config: AboutConfig;

    constructor() {
        super();
        this.config = aboutConfig;
    }

    private mounted() {
        // @ts-ignore
        ScrollReveal().reveal('.about-inner__blurb, .about-header', {
            delay: 50,
            cleanup: true,
            distance: '50px',
        });
        // @ts-ignore
        ScrollReveal().reveal('.about-inner_skills', {
            delay: 50,
            cleanup: true,
            distance: '150px',
            origin: 'left',
        });
    }
}
</script>

<style lang="scss">
    .about-inner {
        a {
            color: #8080C0;
            transition: 0.5s all;
            position: relative;
            &:hover {
                color: #B3B3F3;
            }  
        }
    }
</style>
