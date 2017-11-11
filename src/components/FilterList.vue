<template>
  <div>
    <div class="form" role="form">
      <input class="form__input" type="text" placeholder="filtre por item, quantidade ou data" v-model="search">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/vars.scss';

.form {
  margin-bottom: 1.5rem;

  &__input {
    width: 100%;
    font-size: 0.85rem;
    padding: 0.6rem;
    border: 1px solid lighten($gray, 30%);
    border-radius: 4px;
    transition: all 0.4s ease-in-out;

    &:hover,
    &:focus {
      border-color: lighten($gray, 20%);
      box-shadow: 0 10px 15px $light-gray;
    }
  }
}
</style>
