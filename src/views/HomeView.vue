<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/daisySleeping.jpg">
    <h1><font-awsome-icons icon="HatWizard" /></h1>
    <HelloWorld msg="Welcome to my page!"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
<style>

img{
  height: 400px;
  width: 450px;
}
</style>