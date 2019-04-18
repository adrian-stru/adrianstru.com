<template>
  <div class="home">
    <Nav/>
    <Intro/>
    <About/>
    <Work/>
    <Projects/>
    <Contact/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Nav from '@/components/Nav.vue';
import Intro from '@/components/Intro.vue';
import About from '@/components/About.vue';
import Work from '@/components/Work.vue';
import Projects from '@/components/Projects.vue';
import Contact from '@/components/Contact.vue';

@Component({
  components: {
    Nav,
    Intro,
    About,
    Work,
    Projects,
    Contact,
  },
})
export default class Home extends Vue {
  constructor() {
    super();
  }
}
</script>