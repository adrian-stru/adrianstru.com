<template>
    <section id="projects" class="base-grid">
        <h2 class="text-center text-white">Projects</h2>
        <ProjectManager :projects="projectsData"/>
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
