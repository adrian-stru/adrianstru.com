<template>
    <section id="work" class="base-grid text-white bg-black z-1">
        <h1 class="text-center">Work</h1>
        <WorkManager :works="works"/>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WorkManager from '@/components/WorkManager.vue';
import {workConfig, WorkItem} from '@/data/work.ts';

@Component({
  components: {
    WorkManager,
  },
})
export default class Work extends Vue {
    private works: WorkItem[];

    constructor() {
        super();
        this.works = workConfig;
    }
}
</script>