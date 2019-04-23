<template>
    <div>
        <header class="pin-t w-full px-12 py-8 z-50"
        :class="[menuActive ? 'fixed' : 'absolute']">
        <nav class="flex flex-row justify-between">
            <div class="w-1/4 text-white">Adrian Struszczyk</div>
            <div v-if="!showHamburger" class="w-3/4 flex justify-end">
                <ul class="inline-block">
                    <li class="inline-block px-4 text-sm text-white font-bold ">
                        <a href="#" class="text-white no-underline" @click.prevent="onNavClick('about')">
                            About
                        </a>
                    </li>
                    <li class="inline-block px-4 text-sm text-white font-bold">
                        <a href="#" class="text-white no-underline" @click.prevent="onNavClick('work')">
                            Work
                        </a>
                    </li>
                    <li class="inline-block px-4 text-sm text-white font-bold" @click.prevent="onNavClick('projects')">
                        <a href="#" class="text-white no-underline">
                            Projects
                        </a>
                    </li>
                    <li class="inline-block pl-4 text-sm text-white font-bold" @click.prevent="onNavClick('contact')">
                        <a href="#" class="text-white no-underline">
                        Contact
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
    @closeMenu="closeMenuHandler"/>

    </div>
</template>


<script lang=ts>
    import { Component, Prop, Vue, Watch} from 'vue-property-decorator';
    import { TweenMax } from 'gsap';
    import { ScrollToPlugin } from 'gsap/all';
    import Menu from '@/components/Menu.vue';
    import ScrollReveal from 'scrollreveal';

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

        constructor() {
            super();
            this.width = this.getDocumentWidth();
            this.menuActive = false;
        }

        private created() {
            window.addEventListener('resize', this.onWindowResize);
        }

        private mounted() {
            /**
             * TODO: Factor out all scroll reveal calls. Delays should respond to doc width is < || > 1000.
             */
            // @ts-ignore
            ScrollReveal().reveal('.nav-link', {delay: 200, interval: 200});
            ScrollReveal().reveal('.logo', {delay: 1000});
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

        private onNavClick(divId: string) {
            if (document.getElementById(divId) === null) {
                return;
            }

            TweenMax.to(window, 1, {
                    scrollTo: '#' + divId,
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

        private get showHamburger(): boolean {
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