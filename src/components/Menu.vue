<template>
    <div class="overlay fixed w-full h-screen pin bg-black outline-none opacity-0 trans z-neg"
    :class="{'is-active': active}">
        <ul class="text-white text-center menu-links py-12 sm:py-24 md:py-32 bg-black">
            <li v-for="(link,index) in config.links" :key="index"
                class="text-2xl py-3 cursor-pointer menu-link" @click.prevent="onMenuLinkClick(link.anchor)">
                {{link.name}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import {NavConfig} from '@/data/nav';

@Component({
  components: {
  },
  props: [
      'active',
      'config',
  ],
})
export default class Menu extends Vue {
    private active!: boolean;
    private config!: NavConfig;

    constructor() {
        super();
    }

    private onMenuLinkClick(divId: string) {
        this.$emit('closeMenu', divId);
    }

}
</script>

<style lang="scss" scoped>
.is-active {
    z-index: 10 !important;
    opacity: 1 !important;
}

.menu-links {
    position: relative;
    top: 50;
    transform: translateY(50%);
}

.menu-link {
    position: relative;
    top: 0;
    &:hover {
        top: -2px;
    }
}
</style>

