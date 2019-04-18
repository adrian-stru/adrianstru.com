<template>
    <section id="work" class="text-white bg-black w-5/6 px-12 lg:w-max mx-auto py-32 z-1">
        <div class="w-full">
            <h1>Work</h1>
            <div>
                <WorkManager :works="works"/>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WorkManager from '@/components/WorkManager.vue';
import workData from '@/data/work.ts';

@Component({
  components: {
    WorkManager,
  },
})
export default class Work extends Vue {
    private works: object[];

    constructor() {
        super();
        this.works = workData;
    }
}
</script>