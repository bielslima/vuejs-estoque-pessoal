<template>
  <div id="app">
    <app-header></app-header>
    <app-navbar></app-navbar>
    <router-view />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppNavbar from './components/AppNavbar'

export default {
  name: 'app',
  components: {
    AppHeader, AppNavbar
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poiret+One');
@import './assets/styles/vars.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-family: $font-family;
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
  color: $brand-color;
}
</style>
