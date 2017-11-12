<template>
  <div>
    <filter-list />
    <table class="data-table">
      <thead class="data-table__header">
        <tr>
          <th class="data-table__header-title">Item</th>
          <th class="data-table__header-title">Quantidade</th>
          <th class="data-table__header-title">Expiração</th>
        </tr>
      </thead>
      <tbody class="data-table__body">
        <tr class="data-table__row" v-for="item of items" :key="item._id">
          <td class="data-table__item-name">
            {{ item.name }}

            <div class="data-table__actions">
              <a class="data-table__edit-row" href="#" @click.prevent="edit(item)">Editar</a>
              <a class="data-table__remove-row" href="#" @click.prevent="remove(item)">Excluir</a>
            </div>
          </td>
          <td>
            <amount-counter @increment="increment(item)" @decrement="decrement(item)">
              {{ item.amount }}
            </amount-counter>
          </td>
          <td>
            <expiration-date :date="item.expiration" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AmountCounter from './AmountCounter'
import ExpirationDate from './ExpirationDate'
import FilterList from './FilterList'

export default {
  components: {
    AmountCounter,
    ExpirationDate,
    FilterList
  },

  created () {
    this.$store.dispatch('getItemsAction')
  },

  computed: {
    items () {
      return this.$store.state.items
    }
  },

  methods: {
    increment (item) {
      this.$store.dispatch('incrementAmountAction', item)
    },

    decrement (item) {
      this.$store.dispatch('decrementAmountAction', item)
    },

    remove (item) {
      this.$store.dispatch('removeItemAction', item)
    },

    edit (item) {
      this.$store.commit('isEdit', true)
      this.$router.push({ name: 'form', params: { item } })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/vars.scss';

.data-table {
  width: 100%;
  color: $text-color;
  border-collapse: collapse;

  &__header-title {
    text-transform: uppercase;
    border-bottom: 1px solid $light-gray;
    padding: 0.5rem 0;
  }

  &__body {
    font-size: 1.3125rem;
  }

  &__row {
    margin: 3rem 0;
    position: relative;
    
    &:hover .data-table__actions {
      display: block;
    }
  }

  &__item-name {
    position: relative;
    text-align: left;
    padding: 3rem 0;
  }

  &__actions {
    display: none;
    position: absolute;
    bottom: 10px;
  }

  &__edit-row,
  &__remove-row {
    color: $gray;
    font-size: 0.875rem;
    text-transform: uppercase;
    text-decoration: none;
  
    &:hover {
      color: $text-color;
      text-decoration: underline;
    }
  }
}
</style>
