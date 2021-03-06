<template>
    <div class="projects-library py-12 flex flex-wrap text-white">
        <article v-for="(project, index) in projects" :key="index"
        class="card bg-grey trans">
            <div class="card-inner flex flex-col h-full">
                <div class="text-xl mb-4">{{project.name}}</div>
                <div class="text-md leading-normal font-sans tracking-wider">{{project.description}}</div>
                <div class="py-8 mt-auto">
                    <a v-if="project.siteUrl != ''" :href="project.siteUrl" target="_blank">
                        <GlobeIcon class="text-grey-lightest fill-current w-auto h-5 pr-2 trans hover:text-white"/>
                    </a>
                    <a v-if="project.githubUrl != ''" :href="project.githubUrl" target="_blank">
                        <GithubIcon class="text-grey-lightest fill-current w-auto h-5 trans hover:text-white"/>
                    </a>
                </div>
                <div class="mt-auto">
                    <ul class="p-0 m-0 flex flex-wrap">
                        <li v-for="(tag, index) in project.tags" :key="index"
                        class="inline-block mr-2 leading-normal text-xs tracking-wide">
                            {{tag}}
                        </li>
                    </ul>
                </div>
            </div>
        </article>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import ScrollReveal from 'scrollreveal';
import GlobeIcon from '@/assets/icons/earth.svg';
import GithubIcon from '@/assets/icons/github.svg';

@Component({
  props: {
      projects: Array,
  },
  components: {
      GlobeIcon,
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

<style lang="scss" scoped>
    .card {
        margin-bottom: 2%;
        padding: 20px;
        width: 100%;
        position: relative;
        @media (min-width: 798px) {
            width: 48%;
            margin-right: 2%;
            &:n-th-child(2n) {
                margin-right: 0%;
            }
        }
        @media (min-width: 1000px) {
            &, &:nth-child(2n) {
                width: 32%;
                margin-right: 2%;
            }
            &:nth-child(3n) {
                margin-right: 0%;
            }
        }
        &:hover {
            transform: translateY(-10px) translateZ(0);
        }       
    }
</style>