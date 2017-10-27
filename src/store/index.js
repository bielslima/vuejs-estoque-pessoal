import Vue from 'vue'
import Vuex from 'vuex'
import ItemModel from '../model/ItemModel'
import ItemService from '../services/ItemService'

Vue.use(Vuex)

const service = new ItemService()
const store = new Vuex.Store({
  state: {
    items: []
  },

  mutations: {
    changeAmount (store, payload) {
      store.items.forEach(item => {
        if (item._id === payload._id) {
          item.amount = payload.amount
        }
      })
    },

    getItems (store, payload) {
      store.items = payload
    }
  },

  actions: {
    getItems ({ commit }) {
      const service = new ItemService()
      commit('getItems', service.get())
    },

    saveItem ({ commit }, payload) {
      const id = new Date().getTime()
      const item = new ItemModel(id)

      item.name = payload.name
      item.amount = payload.amount
      item.expiration = payload.expiration

      service.save(item)
    },

    incrementAmount ({ commit }, payload) {
      payload.amount += 1
      service.update(payload)
      commit('changeAmount', payload)
    },

    decrementAmount ({ commit }, payload) {
      payload.amount -= 1
      service.update(payload)
      commit('changeAmount', payload)
    }
  }
})

export default store
