// Usando o Local Storage para persistir os dados
const KEY = '__jrr_estoque_pessoal__'

function getItems () {
  let items = JSON.parse(localStorage.getItem(KEY))

  if (!items) return []
  return items
}

function setItem (item) {
  let items = getItems()

  items.push(item.get())
  localStorage.setItem(KEY, JSON.stringify(items))

  return JSON.parse(item)
}

function updateItem (item) {
  const items = getItems()
  const updatedItems = items.map(itm => {
    if (itm._id === item._id) itm = item
    return itm
  })

  localStorage.setItem(KEY, JSON.stringify(updatedItems))

  return item
}

// Exportando só o que interessa

export default class ItemService {
  get () {
    return getItems()
  }

  save (item) {
    return setItem(item)
  }

  update (item) {
    return updateItem(item)
  }
}
