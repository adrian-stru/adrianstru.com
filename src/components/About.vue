<template>
    <section class="base-grid text-white" id="about">
        <h2 class="text-center fade-in-bottom">About Me</h2>
        <div class="flex flex-row flex-wrap fade-in-bottom">
            <div class="w-full md:w-1/3 pt-12 fade-in-bottom">
                <div class="headshot mx-auto"></div>
            </div>
            <div class="w-full md:w-2/3 md:pl-12 pt-6">
                <p  v-for="(inner, index) in config.paragraphs" :key="index" v-html="inner"
                    class="text-grey-lightest leading-normal font-sans text-xl fade-in-bottom"/>
                <ul class="sm:col-count-2">
                    <li v-for="(skill, index) in config.skills" :key="index"
                        class="text-grey-lightest leading-loose text-md fade-in-left">
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
    .headshot {
        background: url("../assets/images/headshot.jpg") no-repeat;
        background-size: contain;
        border-radius: 50%;
        width: 200px;
        height: 200px;
    }
</style>
