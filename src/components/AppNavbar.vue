<template>
  <div>
    <nav class="navbar">
      <router-link :to="{ name: 'list' }" class="navbar__item">itens</router-link>
      <router-link :to="{ name: 'form' }" class="navbar__item">adicionar</router-link>
      <router-link :to="{ name: 'about' }" class="navbar__item">sobre</router-link>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/vars.scss';

.navbar {
  width: 75%;
  margin: 0 auto 5rem auto;
  display: flex;
  justify-content: space-around;

  &__item {
    display: block;
    font-size: 2.25rem;
    text-decoration: none;
    min-width: 200px;
    padding-bottom: 0.8rem;
    color: $gray;
    position: relative;
    
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 3px;
      position: absolute;
      bottom: 0;
      background: $light-gray;
      transition: all .2s ease-in-out; 
    }
    
    &:hover,
    &.navbar__item--active {
      color: $brand-color;
    }

    &:hover::after,
    &.navbar__item--active::after {
      background: $brand-color;
    }
  }
}
</style>
