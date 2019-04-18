<template>
    <div>
        <header class="absolute pin-t w-full px-12 py-8 z-50">
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

    // Needed because plugin is removed during tree shaking
    const plugin = [ScrollToPlugin];
    const MAXWIDTH = 1000;

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

<style>
.hamburger {
  padding: 0 15px 15px 15px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible; }
  .hamburger:hover {
    opacity: 0.7; }
  .hamburger.is-active:hover {
    opacity: 0.7; }
  .hamburger.is-active .hamburger-inner,
  .hamburger.is-active .hamburger-inner::before,
  .hamburger.is-active .hamburger-inner::after {
    background-color: #fff; }

.hamburger-box {
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative; }

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px; }
  .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
    width: 40px;
    height: 4px;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease; }
  .hamburger-inner::before, .hamburger-inner::after {
    content: "";
    display: block; }
  .hamburger-inner::before {
    top: -10px; }
  .hamburger-inner::after {
    bottom: -10px; }

    .hamburger--elastic .hamburger-inner {
  top: 2px;
  transition-duration: 0.275s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }
  .hamburger--elastic .hamburger-inner::before {
    top: 10px;
    transition: opacity 0.125s 0.275s ease; }
  .hamburger--elastic .hamburger-inner::after {
    top: 20px;
    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55); }

.hamburger--elastic.is-active .hamburger-inner {
  transform: translate3d(0, 10px, 0) rotate(135deg);
  transition-delay: 0.075s; }
  .hamburger--elastic.is-active .hamburger-inner::before {
    transition-delay: 0s;
    opacity: 0; }
  .hamburger--elastic.is-active .hamburger-inner::after {
    transform: translate3d(0, -20px, 0) rotate(-270deg);
    transition-delay: 0.075s; }
</style>
