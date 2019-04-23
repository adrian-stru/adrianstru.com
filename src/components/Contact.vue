<template>
    <section id="contact" class="base-grid text-white bg-black mb-64">
        <div class="text-center">
            <h1 class="pb-6">Connect With Me</h1>
            <p class="leading-normal w-full text-sm mx-auto sm:w-2/3 sm:text-base">Get in touch with me if you would like to work together or just to say hi. I am currently looking for new opportunities.</p>
            <div>
                <a class="contact-button trans my-6" @click.prevent="onMailButtonClick">
                    <div class="text-white">Get In Touch</div>
                </a>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Contact extends Vue {
    constructor() {
        super();
    }

    private onMailButtonClick() {
        const email = 'adrianstru@gmail.com';
        const subject = '';
        const emailBody = '';

        // @ts-ignore
        document.location = 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody;
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
