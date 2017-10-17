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

<style scoped>
.navbar {
  width: 75%;
  margin: 0 auto 5rem auto;
  display: flex;
  justify-content: space-around;
}

  .navbar .navbar__item {
    display: block;
    font-size: 2.25rem;
    text-decoration: none;
    min-width: 200px;
    padding-bottom: 0.8rem;
    color: #999;
    position: relative;
  }

  .navbar .navbar__item::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    position: absolute;
    bottom: 0;
    background: #e6e6e6;
    transition: all .2s ease-in-out; 
  }

  .navbar .navbar__item:hover,
  .navbar .navbar__item.navbar__item--active {
    color: #754c24;
  }

  .navbar .navbar__item:hover::after,
  .navbar .navbar__item.navbar__item--active::after {
    background: #754c24;
  }
</style>
