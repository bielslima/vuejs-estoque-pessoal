// Usando o Local Storage para persistir os dados
const KEY = '__jrr_estoque_pessoal__'

function getItems () {
  let items = localStorage.getItem(KEY)
  return JSON.parse(items)
}

function setItem (item) {
  let items = nullToArray(getItems())

  items.push(item.get())
  localStorage.setItem(KEY, JSON.stringify(items))

  return JSON.parse(item)
}

function updateItem (item) {
  let items = nullToArray(getItems())

  items.forEach(itm => {
    if (itm._id === item._id) {
      itm = item.get()
    }
  })

  localStorage.setItem(KEY, JSON.stringify(items))

  return item.get()
}

function nullToArray (items) {
  return items || []
}

// Exportando só o que interessa

export default class ItemService {
  get () {
    return nullToArray(getItems())
  }

  save (item) {
    return setItem(item)
  }

  update (item) {
    return updateItem(item)
  }
}
