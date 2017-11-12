import Vue from 'vue'
import Vuex from 'vuex'
import {
  changeAmount,
  getItems,
  removeItem,
  updateItem,
  isEdit,
  filterItems
} from './mutations'
import {
  decrementAmountAction,
  getItemsAction,
  incrementAmountAction,
  removeItemAction,
  saveItemAction,
  updateItemAction,
  filterItemsAction
} from './actions'

Vue.use(Vuex)

const state = {
  items: [],
  isEdit: false
}

const store = new Vuex.Store({
  state,
  mutations: {
    changeAmount,
    getItems,
    removeItem,
    updateItem,
    isEdit,
    filterItems
  },

  actions: {
    getItemsAction,
    saveItemAction,
    incrementAmountAction,
    decrementAmountAction,
    removeItemAction,
    updateItemAction,
    filterItemsAction
  }
})

export default store
