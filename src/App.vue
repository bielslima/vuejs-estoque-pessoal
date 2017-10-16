<template>
  <div id="app">
    <app-header></app-header>
    <app-navbar></app-navbar>
    <!--<router-view />-->
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppNavbar from './components/AppNavbar.vue'

export default {
  name: 'app',
  components: {
    AppHeader, AppNavbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
