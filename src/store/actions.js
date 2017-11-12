import ItemModel from '../model/ItemModel'
import ItemService from '../services/ItemService'

const service = new ItemService()

export const getItemsAction = ({ commit }) => {
  const service = new ItemService()
  commit('getItems', service.get())
}

export const saveItemAction = ({ commit }, payload) => {
  const id = new Date().getTime()
  const item = new ItemModel(id)

  item.name = payload.name
  item.amount = payload.amount
  item.expiration = payload.expiration

  service.save(item)
}

export const incrementAmountAction = ({ commit }, payload) => {
  payload.amount += 1
  service.update(payload)
  commit('changeAmount', payload)
}

export const decrementAmountAction = ({ commit }, payload) => {
  payload.amount -= 1
  service.update(payload)
  commit('changeAmount', payload)
}

export const removeItemAction = ({ commit }, payload) => {
  service.remove(payload)
  commit('removeItem', payload)
}

export const updateItemAction = ({ commit }, payload) => {
  service.update(payload)
  commit('updateItem', payload)
}

export const filterItemsAction = ({ commit }, payload) => {
  const items = service.get()
  const filteredItems = items.filter(item => {
    const regex = new RegExp(payload, 'gi')
    return item.name.match(regex) || item.expiration.match(regex)
  })
  commit('filterItems', filteredItems)
}
