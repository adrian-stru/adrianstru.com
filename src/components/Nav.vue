<template>
    <div>
        <header class="pin-t z-50 w-full mx-auto p-6 lg:px-12 "
        :class="[menuActive ? 'fixed' : 'absolute']">
        <nav class="flex flex-row justify-between">
            <div class="w-1/4 text-white logo">Adrian Struszczyk</div>
            <div v-if="!showMenu" class="w-3/4 flex justify-end">
                <ul class="inline-block">
                    <li v-for="(link, index) in config.links" :key="index"
                        class="nav-link inline-block px-4 text-sm text-white font-bold">
                        <a href="#" class="text-white" @click.prevent="onNavClick(link.anchor)">
                            {{link.name}}
                        </a>
                    </li>
                </ul>
            </div>
            <div v-else>
                <div class="hamburger hamburger--elastic js-hamburger" 
                @click.prevent="onHamburgerClickHandler"
                :class="{ 'is-active': menuActive}">
                    <div class="hamburger-box">
                        <div class="hamburger-inner"></div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <Menu 
    :active="menuActive"
    :config="config"
    @closeMenu="closeMenuHandler"/>
    </div>
</template>


<script lang=ts>
    import { Component, Prop, Vue, Watch} from 'vue-property-decorator';
    import { TweenMax } from 'gsap';
    import { ScrollToPlugin } from 'gsap/all';
    import Menu from '@/components/Menu.vue';
    import ScrollReveal from 'scrollreveal';
    import {NavConfig, navConfig} from '@/data/nav';

    const MAXWIDTH = 1000;

    // Needed because ScrollToPlugin is removed during tree shaking
    const plugin = [ScrollToPlugin];
    
    @Component({
        components: {
            Menu,
        },
    })
    export default class Nav extends Vue {
        private width: number;
        private menuActive: boolean;
        private config: NavConfig;

        constructor() {
            super();
            this.width = this.getDocumentWidth();
            this.menuActive = false;
            this.config = navConfig;
        }

        private created() {
            window.addEventListener('resize', this.onWindowResize);
        }

        private mounted() {
            const width = document.body.offsetWidth;
            const logoEl = document.querySelectorAll('.logo');
            const linksEl = document.querySelectorAll('.nav-link');
            ScrollReveal().reveal(linksEl,
                {
                    delay: 200,
                    // @ts-ignore
                    interval: 200,
                },
            );
            ScrollReveal().reveal(logoEl, {delay: (width >= 1000) ? 1000 : 100});
        }

        private destroyed() {
            window.removeEventListener('resize', this.onWindowResize);
        }

        @Watch('width')
        private onWidthChange() {
            if (this.menuActive && this.width > 1000) {
                this.menuActive = false;
            }
        }

        private onNavClick(anchor: string) {
            if (document.querySelector(anchor) === null) {
                return;
            }

            TweenMax.to(window, 1, {
                    scrollTo: {
                        y: anchor,
                        autoKill: false,
                    },
                    // @ts-ignore
                    ease: Expo.easeOut,
            });
        }

        private getDocumentWidth(): number {
            return Math.max(
                document.body.scrollWidth,
                document.documentElement.scrollWidth,
                document.body.offsetWidth,
                document.documentElement.offsetWidth,
                document.documentElement.clientWidth,
            );
        }

        private get showMenu(): boolean {
            return this.width < MAXWIDTH;
        }

        private onWindowResize() {
            this.width = this.getDocumentWidth();
        }

        private onHamburgerClickHandler() {
            this.menuActive = !this.menuActive;
        }

        private closeMenuHandler(divId: string = ''): void {
            this.menuActive = false;
            if (divId !== '') {
                this.onNavClick(divId);
            }
        }
    }
</script>