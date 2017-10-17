<template>
  <header class="header" role="banner">
    <h1 class="header__title">Estoque Pessoal</h1>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
  margin-bottom: 3rem;
}
.header::after {
  content: '';
  display: block;
  margin: 0 auto;
  width: 200px;
  height: 1px;
  background: #e6e6e6;
}
  .header .header__title {
    font-size: 3.75rem;
    font-weight: normal;
    padding: 0.5em;
  }
</style>
