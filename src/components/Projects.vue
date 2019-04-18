<template>
    <section id="projects" class="text-white py-32 bg-black mx-auto px-12 w-5/6 lg:w-max">
        <div class="w-full">
            <h1 class="text-center">Projects</h1>
            <div>
                <ProjectManager :projects="projectData"/>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProjectManager from '@/components/ProjectManager.vue';
import projectData from '@/data/projects';
import projectsData from '@/data/projects';

@Component({
  components: {
    ProjectManager,
  },
})
export default class Projects extends Vue {
    private projectData: object;

    constructor() {
        super();
        this.projectData = projectsData;
    }
}
</script>
