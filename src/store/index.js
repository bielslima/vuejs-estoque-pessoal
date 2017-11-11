import Vue from 'vue'
import Vuex from 'vuex'
import {
  changeAmount,
  getItems,
  removeItem,
  updateItem,
  isEdit
} from './mutations'
import {
  decrementAmountAction,
  getItemsAction,
  incrementAmountAction,
  removeItemAction,
  saveItemAction,
  updateItemAction
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
    isEdit
  },

  actions: {
    getItemsAction,
    saveItemAction,
    incrementAmountAction,
    decrementAmountAction,
    removeItemAction,
    updateItemAction
  }
})

export default store
