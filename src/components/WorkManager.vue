<template>
    <div class="flex flex-col md:flex-row justify-between py-12">
        <ul class="work-nav flex flex-row justify-center mx-auto mb-4 md:mb-auto md:flex-col">
            <li v-for="(item, index) in works" :key="index" @click.prevent="onClickHandler(index)"
                class="work-nav__item hover:bg-grey hover:text-white trans md:text-center sm:text-sm lg:px-1" 
                v-bind:class="[(selected == index) ? 'work-nav__item--selected' : '']">
                {{item.company}}
            </li>
        </ul>
        <div class="work-details mx-auto md:pl-8 md:ml-auto">
            <div class="work-details__head py-2 text-center md:text-left">
                <span class="text-sm sm:text-lg">{{selectedItem.title}}</span>
                <span class="text-sm sm:text-lg text-grey-lightest company-name font-sans tracking-wide"> @ {{selectedItem.company}}</span>
            </div>
            <div class="work-details__date mb-8 text-grey-lighter text-center md:text-left">
                <span class="text-sm">{{selectedItem.startDate}} {{(selectedItem.startDate === '') ? '' : '-'}} {{selectedItem.endDate}}</span>
            </div>
            <ul class="work-details__list p-0">
                <li v-for="(bullet, index) in selectedItem.bullets" :key="index"
                class="bullet pb-3 flex w-full mx-auto lg:m-0 text-left font-sans tracking-wide">
                    <span class="text-md leading-normal">{{bullet}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>


<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import ScrollReveal from 'scrollreveal';
import {WorkItem} from '@/data/work';

@Component({
  components: {
  },
  props: {
      works: Array,
  },
})
export default class WorkManager extends Vue {
    private works!: WorkItem[];
    private selected: number;

    constructor() {
        super();
        this.selected = (this.works) ? 0 : -1;
    }

    private onClickHandler(index: number) {
        this.selected = index;
    }

    get selectedItem() {
        return this.works[this.selected];
    }

    private mounted() {
        ScrollReveal().reveal('.work-details', {delay: 250});
    }

    @Watch('selected')
    private onSelectionChanged(value: number, oldValue: number) {
        // @ts-ignore
        ScrollReveal().clean('.work-details');
        ScrollReveal().reveal('.work-details', {delay: 100});
    }
}
</script>

<style lang="scss" scoped>
    .bullet {
        &:before {
            content: "-";
            padding-right: 20px;
        }
    }

    .work-nav {
        width: 100%;
        @media only screen and (min-width: 768px) {
            width: 150px;
        }
    }

    .work-details {
        max-width: 700px;
    }

    .company-name {
        // background: linear-gradient(90deg,#184cef 30%,#e5422b 100%);
	    // background-clip: text;
        // -webkit-text-fill-color: transparent;
        color: #8080C0;
        text-transform: uppercase;
        transition: .25s all;
        &:hover {
            color: #B3B3F3;
        }
    }

    .work-nav__item--selected {
        background: #232427;
        color: #fff;
    }
</style>
