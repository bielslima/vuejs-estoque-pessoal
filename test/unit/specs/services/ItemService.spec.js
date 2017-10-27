import { assert } from 'chai'
import ItemService from '@/services/ItemService'
import ItemModel from '@/model/ItemModel'

const result = {
  _id: 1,
  name: 'Sabonete',
  amount: 4,
  expiration: null
}

function construct () {
  const item = new ItemModel(result._id)

  item.name = result.name
  item.amount = result.amount
  item.expiration = result.expiration

  return item
}

describe('ItemService', () => {
  it('get() deve retornar um array', () => {
    const service = new ItemService()
    assert.isArray(service.get())
  })

  it('save() deve retornar o item salvo', () => {
    const service = new ItemService()
    const item = construct()
    assert.deepEqual(service.save(item), result)
  })

  it('update() deve retornar o item atualizado', () => {
    const service = new ItemService()
    const item = construct().get()
    assert.deepEqual(service.update(item), result)
  })
})
