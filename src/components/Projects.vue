<template>
    <section id="projects" class="base-grid text-white bg-black">
        <div class="w-full">
            <h1 class="text-center">Projects</h1>
            <ProjectManager :projects="projectsData"/>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProjectManager from '@/components/ProjectManager.vue';
import {Project, projectsConfig} from '@/data/projects';

@Component({
  components: {
    ProjectManager,
  },
})
export default class Projects extends Vue {
    private projectsData: Project[];

    constructor() {
        super();
        this.projectsData = projectsConfig;
    }
}
</script>
