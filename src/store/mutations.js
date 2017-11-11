
export const changeAmount = (store, payload) => {
  store.items.forEach(item => {
    if (item._id === payload._id) {
      item.amount = payload.amount
    }
  })
}

export const getItems = (store, payload) => {
  store.items = payload
}

export const removeItem = (store, payload) => {
  store.items = store.items.filter(itm => itm._id !== payload._id)
}

export const updateItem = (store, payload) => {
  store.items = store.items.map(item => {
    if (item._id === payload._id) {
      item = payload
    }

    return item
  })
}
