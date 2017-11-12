function update (items, payload) {
  return items.map(item => {
    if (item._id === payload._id) item = payload
    return item
  })
}

export const changeAmount = (store, payload) => {
  store.items = update(store.items, payload)
}

export const getItems = (store, payload) => {
  store.items = payload
}

export const removeItem = (store, payload) => {
  store.items = store.items.filter(itm => itm._id !== payload._id)
}

export const updateItem = (store, payload) => {
  store.items = update(store.items, payload)
}

export const isEdit = (store, payload) => {
  store.isEdit = payload
}

export const filterItems = (store, payload) => {
  store.items = payload
}
