import Vue from 'vue'
import Vuex from 'vuex'
import { changeAmount, getItems, removeItem } from './mutations'
import {
  decrementAmountAction,
  getItemsAction,
  incrementAmountAction,
  removeItemAction,
  saveItemAction
} from './actions'

Vue.use(Vuex)

const state = {
  items: []
}

const store = new Vuex.Store({
  state,
  mutations: {
    changeAmount,
    getItems,
    removeItem
  },

  actions: {
    getItemsAction,
    saveItemAction,
    incrementAmountAction,
    decrementAmountAction,
    removeItemAction
  }
})

export default store
