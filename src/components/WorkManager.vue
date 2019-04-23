<template>
    <section class="text-white py-32">
        <div class="w-full mx-auto flex flex-col lg:flex-row justify-between">
            <div class="work-nav my-4 lg:my-0">
                <div class="flex flex-row lg:flex-col justify-center lg:w-32 mx-auto">
                   <button v-for="(item, index) in works" :key="index" @click.prevent="onClickHandler(index)"
                    class="px-3 lg:px-1 py-3 text-sm work-nav-button text-grey-darker hover:bg-gray hover:text-white trans" 
                    v-bind:class="[(selected == index) ? 'work-nav-button--selected text-white' : '']" >
                        {{item.company}}
                    </button>  
                </div>
            </div>
            <div class="work-description w-full lg:pl-12 text-center lg:text-left">
                <div class="py-2">
                    <span class="text-lg">{{selectedItem.title}}</span>
                    <span class="text-lg text-grey-lightest company-name"> @ {{selectedItem.company}} </span>
                </div>
                <div class="mb-8 text-grey-lighter">
                    <span class="text-sm">{{selectedItem.startDate}} {{(selectedItem.startDate === '') ? '' : '-'}} {{selectedItem.endDate}}</span>
                </div>
                <ul class="bullets p-0">
                    <li v-for="(bullet, index) in selectedItem.bullets" :key="index"
                    class="pb-3 flex bullet w-2/3 mx-auto lg:m-0 text-left">
                        <span class="text-sm leading-normal">{{bullet}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>


<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import ScrollReveal from 'scrollreveal';

@Component({
  components: {
  },
  props: {
      works: Array,
  },
})
export default class WorkManager extends Vue {
    private works!: object[];
    private selected: number;


    constructor() {
        super();
        this.selected = (this.works) ? 0 : -1;
    }

    private onClickHandler(index: number) {
        this.selected = index;
    }

    get selectedItem() {
        // @ts-ignore
        return this.works[this.selected];
    }

    private mounted() {
        ScrollReveal().reveal('.work-description', {delay: 250});
    }

    @Watch('selected')
    private onSelectionChanged(value: number, oldValue: number) {
        // @ts-ignore
        ScrollReveal().clean('.work-description');
        ScrollReveal().reveal('.work-description', {delay: 150});
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
        background: linear-gradient(90deg,#184cef 30%,#e5422b 100%);
	    background-clip: text;
        -webkit-text-fill-color: transparent;
        text-transform: uppercase;
    }

    .work-nav__item--selected {
        background: #232427;
        color: #fff;
    }
</style>
