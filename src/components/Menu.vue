<template>
    <div class="overlay fixed w-full h-screen pin bg-black outline-none opacity-0 trans z-neg"
    :class="{'is-active': active}">
        <ul class="text-white text-center menu-links py-32 bg-black">
            <li class="text-2xl py-3 cursor-pointer menu-link trans" @click.prevent="onMenuLinkClick('about')">About</li>
            <li class="text-2xl py-3 cursor-pointer menu-link trans" @click.prevent="onMenuLinkClick('work')">Work</li>
            <li class="text-2xl py-3 cursor-pointer menu-link trans" @click.prevent="onMenuLinkClick('projects')">Projects</li>
            <li class="text-2xl py-3 cursor-pointer menu-link trans" @click.prevent="onMenuLinkClick('contact')">Contact</li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({
  components: {
  },
  props: [
      'active',
  ],
})
export default class Menu extends Vue {
    private active!: boolean;

    constructor() {
        super();
    }

    private onMenuLinkClick(divId: string) {
        this.$emit('closeMenu', divId);
    }

}
</script>

<style>

.overlay {
    z-index: -10;
}

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
}

.menu-link:hover {
    top: -2px;
}

</style>

