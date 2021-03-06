<template>
    <div class="py-12 flex flex-col md:flex-row justify-between">
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
                <span class="text-sm sm:text-lg trans text-primary hover:text-primary-lighter company-name font-sans tracking-wide"> @ {{selectedItem.company}}</span>
            </div>
            <div class="work-details__date mb-8 text-grey-lighter text-center md:text-left">
                <span class="text-sm">{{selectedItem.startDate}} {{(selectedItem.startDate === '') ? '' : '-'}} {{selectedItem.endDate}}</span>
            </div>
            <ul class="work-details__list p-0">
                <li v-for="(bullet, index) in selectedItem.bullets" :key="index"
                class="bullet pb-3 flex w-full mx-auto lg:m-0 text-left font-sans tracking-wide">
                    <span class="text-base leading-normal">{{bullet}}</span>
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

    .work-nav__item--selected {
        background: #232427;
        color: #fff;
    }

    .work-nav__item {
        position: relative;

        &::after {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            height: 2px;
            width: 100%;
            background-color: #232427;
            padding: 0;

            @media only screen and (min-width: 768px) {
                width: 3px;
                height: 100%;
            }
        }

        &.work-nav__item--selected::after {
            background-color: #8080c0;
        }

    }
</style>
