<template>
  <div>
    <table class="data-table">
      <thead class="data-table__header">
        <tr>
          <th class="data-table__header-title">Item</th>
          <th class="data-table__header-title">Quantidade</th>
          <th class="data-table__header-title">Expiração</th>
        </tr>
      </thead>
      <tbody class="data-table__body">
        <tr class="data-table__row">
          <td class="data-table__item-name">
            Sabonetes 
            <a class="data-table__edit-row" href="#" aria-hidden="true">Editar</a>
          </td>
          <td>
            <amount-counter></amount-counter>
          </td>
          <td>
            <expiration-date />
          </td>
        </tr>

        <tr class="data-table__row">
          <td class="data-table__item-name">
            Caixa de leite 
            <a class="data-table__edit-row" href="#" aria-hidden="true">Editar</a>
          </td>
          <td>
            <amount-counter></amount-counter>
          </td>
          <td>
            <expiration-date>20/12/2017</expiration-date>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AmountCounter from './AmountCounter.vue'
import ExpirationDate from './ExpirationDate.vue'

export default {
  components: {
    AmountCounter, ExpirationDate
  }
}
</script>

<style scoped>
.data-table {
  width: 100%;
  color: #444;
  border-collapse: collapse;
}
  .data-table .data-table__header-title {
    text-transform: uppercase;
    border-bottom: 1px solid #f2f2f2;
    padding: 0.5rem 0;
  }

  .data-table__body {
    font-size: 1.3125rem;
  }

  .data-table__row {
    margin: 3rem 0;
  }

  .data-table__item-name {
    position: relative;
    text-align: left;
    padding: 3rem 0;
  }

  .data-table__edit-row {
    color: #999;
    font-size: 0.875rem;
    text-transform: uppercase;
    text-decoration: none;
    position: absolute;
    top: 10px;
    left: 0;
    display: none;
  }
</style>
