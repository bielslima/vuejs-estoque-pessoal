import { assert } from 'chai'
import ItemService from '../../../../src/services/ItemService'
import Item from '../../../../src/model/Item'

describe('ItemService', () => {
  it('get() deve retornar um array', () => {
    const service = new ItemService()
    assert.isArray(service.get())
  })

  it('save() deve retornar o item salvo', () => {
    const service = new ItemService()
    const item = new Item(1)

    const result = {
      _id: 1,
      name: 'Sabonete',
      amount: 4,
      expiration: null
    }

    item.name = result.name
    item.amount = result.amount
    item.expiration = result.expiration

    assert.deepEqual(service.save(item), result)
  })

  it('update() deve retornar o item atualizado', () => {
    const service = new ItemService()
    const item = new Item(1)

    const result = {
      _id: 1,
      name: 'Sabonete',
      amount: 4,
      expiration: null
    }

    item.name = result.name
    item.amount = result.amount
    item.expiration = result.expiration

    assert.deepEqual(service.update(item), result)
  })
})
