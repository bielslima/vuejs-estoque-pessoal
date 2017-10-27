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

<style scoped>
.amount-counter {
  display: flex;
  justify-content: center;
  align-items: center;
}
  .amount-counter__value {
    font-size: 3.75rem;
    min-width: 140px;
    border-bottom: 1px solid #f2f2f2;
    padding: 1rem 0;
  }

  .amount-counter__increment,
  .amount-counter__decrement {
    cursor: pointer;
    display: block;
    border: none;
    background: transparent;
    font-size: 2.5rem;
  }
</style>
