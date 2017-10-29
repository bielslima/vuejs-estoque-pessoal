<template>
  <header class="header" role="banner">
    <h1 class="header__title">Estoque Pessoal</h1>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/vars.scss';

.header {
  margin-bottom: 3rem;
  
  &::after {
    content: '';
    display: block;
    margin: 0 auto;
    width: 200px;
    height: 1px;
    background: $light-gray;
  }

  &__title {
    font-size: 3.75rem;
    font-weight: normal;
    padding: 2rem;
  }
}
</style>
