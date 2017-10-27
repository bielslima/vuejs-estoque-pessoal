<template>
  <div class="expiration-date">
    <p class="expiration-date__content">
      <span class="expiration-date__null" v-show="!date">nenhuma</span> {{ date }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['date']
}
</script>

<style scoped>
  .expiration-date__null {
    color: #ccc;
  }
</style>
