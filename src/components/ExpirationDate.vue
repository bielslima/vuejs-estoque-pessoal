<template>
  <div class="expiration-date">
    <slot>
      <span class="expiration-date__null" v-show="!date">nenhuma</span>
    </slot>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .expiration-date__null {
    color: #ccc;
  }
</style>
