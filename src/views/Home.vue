<template>
  <div class="home">
    <WebGL/>
    <div class="blurb">
      <h2>Hello </h2>
      <h4>My name is Adrian Struszczyk</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <p>Itaque earum rerum hic tenetur a sapiente delectus.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WebGL from '@/components/WebGL.vue';

@Component({
  components: {
    WebGL,
  },
})
export default class Home extends Vue {

}
</script>

<style scoped>
    .home {
      width: 100vw;
      height: 100vh;
    }

    .blurb {
      position: absolute;
      max-width: 1000px;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -30%);
    }
</style>