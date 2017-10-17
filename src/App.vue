<template>
  <div id="app">
    <app-header></app-header>
    <app-navbar></app-navbar>
    <router-view />
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
@import url('https://fonts.googleapis.com/css?family=Poiret+One');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-family: 'Poiret One', cursive;
  font-size: 100%;
  font-weight: normal;
}

#app {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #754c24;
}
</style>
