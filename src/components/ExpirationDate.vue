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

<style lang="scss" scoped>
@import '../assets/styles/vars.scss';

.expiration-date__null {
  color: $gray;
}
</style>
