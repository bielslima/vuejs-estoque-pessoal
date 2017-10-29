<template>
  <div class="amount-counter">
    <button class="amount-counter__decrement" @click="decrement">-</button>
    <span class="amount-counter__value">
      <slot></slot>
    </span>
    <button class="amount-counter__increment" @click="increment">+</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment () {
      this.$emit('increment')
    },

    decrement () {
      this.$emit('decrement')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/vars.scss';

.amount-counter {
  display: flex;
  justify-content: center;
  align-items: center;

  &__value {
    font-size: 3.75rem;
    min-width: 140px;
    border-bottom: 1px solid $light-gray;
    padding: 1rem 0;
  }

  &__increment,
  &__decrement {
    cursor: pointer;
    display: block;
    border: none;
    background: transparent;
    font-size: 2.5rem;
  }
}
</style>
