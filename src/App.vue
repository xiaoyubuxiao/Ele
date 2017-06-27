<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header.vue'
  export default {
    components: {
      'v-header': header
    }
  }
</script>

<style>
  /*@import "assets/css/sc.scss";*/
  @import "assets/css/app.css";
</style>
