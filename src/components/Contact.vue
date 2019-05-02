<template>
    <section id="contact" class="base-grid text-white bg-black mb-64">
        <div class="text-center">
            <h1 class="pb-6">Connect With Me</h1>
            <p class="leading-normal w-full  mx-auto sm:w-2/3 text-xl  font-sans tracking-normal">Get in touch with me if you would like to work together or just to say hi. I am currently open to new opportunities.</p>
            <div>
                <a class="contact-button trans my-6" href="mailto:adrianstru@gmail.com">
                    <div class="text-white">Get In Touch</div>
                </a>
            </div>
            <div class="w-full">
                <ul class="flex flex-row justify-center">
                    <li class="px-2">
                        <a href="https://github.com/adrian-stru" target="_blank">
                            <GithubIcon class="text-grey-lightest fill-current w-6 trans hover:text-white"/>
                        </a>
                    </li>
                    <li class="px-2">
                        <a href="https://www.linkedin.com/in/adrianstru" target="_blank">
                            <LinkedInIcon class="text-grey-lightest fill-current w-6 trans hover:text-white"/>
                        </a>
                    </li>
                </ul>  
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GithubIcon from '@/assets/icons/github.svg';
import LinkedInIcon from '@/assets/icons/linkedin.svg';

@Component({
    components: {
        GithubIcon,
        LinkedInIcon,
    },
})
export default class Contact extends Vue {
    constructor() {
        super();
    }
}
</script>

<style lang="scss" scoped>
.contact-button {
    display: inline-block;
    position: relative;
    background-color: transparent;
    overflow: hidden;
    backface-visibility: hidden;
    padding: 18px 24px;
    cursor: pointer;
    transform: scale(1);
    top: 0;
    &:hover {
        top: -5px;
        &:before {
            width: 200%;
        }
    }
    &:before {
        transition: all 1s ease-out;
        content: "";
        position: absolute;
        background: linear-gradient(90deg, #184cef 10%, #e5422b 95%);
        z-index: 0;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
    }
    div {
        position: relative;
    }
}
</style>
