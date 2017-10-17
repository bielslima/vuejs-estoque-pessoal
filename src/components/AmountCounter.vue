<template>
  <div class="amount-counter">
    <button class="amount-counter__decrement">-</button>
    <span class="amount-counter__value">4</span>
    <button class="amount-counter__increment">+</button>
  </div>
</template>

<script>
export default {

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
