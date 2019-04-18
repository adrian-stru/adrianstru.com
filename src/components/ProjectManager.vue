<template>
    <section class="text-white py-12 ">
       <div class="projects-library flex flex-wrap">
           <article v-for="(project, index) in projects" :key="index"
           class="card bg-grey trans" 
            >
                <div class="card-inner text-white h-full flex flex-col">
                    <div class="text-xl mb-2">{{project.name}}</div>
                    <div class="text-sm leading-tight">{{project.description}}</div>
                    <div class="h-6"></div>
                    <div>
                        <a v-if="project.siteUrl != ''" :href="project.siteUrl" target="_blank">
                            <EarthIcon class="text-white fill-current w-auto h-5 pr-2 icon trans"/>
                        </a>
                        <a v-if="project.githubUrl != ''" :href="project.githubUrl" target="_blank">
                            <GithubIcon class="text-white fill-current w-auto h-5 icon trans"/>
                        </a>
                    </div>
                    <div class="h-6"></div>
                    <div class="mt-auto">
                        <ul class="p-0 m-0 flex flex-wrap">
                            <li v-for="(tag, index) in project.tags" :key="index"
                            class="inline-block mr-2 leading-normal text-xs tracking-wide">
                                #{{tag}}
                            </li>
                        </ul>
                    </div>
                </div>
           </article>
       </div>
    </section>
</template>


<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import ScrollReveal from 'scrollreveal';

/**
 *  https://github.com/visualfanatic/vue-svg-loader/issues/72
 *  Shim isn't working '@/types/shims-svg.d.ts'
 */
// @ts-ignore
import EarthIcon from '@/assets/icons/earth.svg';
// @ts-ignore
import GithubIcon from '@/assets/icons/github.svg';

@Component({
  props: {
      projects: Array,
  },
  components: {
      EarthIcon,
      GithubIcon,
  },
})
export default class ProjectManager extends Vue {
    private projects!: object[];

    constructor() {
        super();
    }

    private mounted() {
        // @ts-ignore
        ScrollReveal().reveal('.card', {
            interval: 200,
        });
    }
}
</script>

<style scoped>
    .icon:hover {
        color: blue;
        fill: current;
    }

    .card {
        margin-bottom: 2%;
        padding: 20px;
        width: 100%;
        position: relative;
    }

    .card:hover {
        transform: translateY(-10px) translateZ(0);
    }
    @media (min-width: 798px) {
         .card {
            width: 48%;
            margin-right: 2%;
        }

        .card:nth-child(2n) {
            margin-right: 0%;
        }
    }

    @media (min-width: 1000px) {
         .card, .card:nth-child(2n) {
            width: 32%;
            margin-right: 2%;
        }

        .card:nth-child(3n) {
            margin-right: 0%;
        }
    }


   
</style>