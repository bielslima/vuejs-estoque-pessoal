import { assert } from 'chai'
import ItemModel from '@/model/ItemModel'

const result = {
  _id: undefined,
  name: 'Sabonete',
  amount: 4,
  expiration: null
}

const construct = () => {
  const item = new ItemModel()

  item.name = result.name
  item.amount = result.amount
  item.expiration = result.expiration

  return item
}

describe('ItemModel get()', () => {
  let item

  beforeEach(() => { item = construct() })

  it('deve retornar um objeto', () => {
    assert.isObject(item.get())
  })

  it('deve retornar um objeto com as propriedades corretas', () => {
    assert.deepEqual(item.get(), result)
  })
})

describe('ItemModel toString()', () => {
  it('deve retornar uma string do objeto', () => {
    const item = construct()
    assert.strictEqual(item.toString(), JSON.stringify(result))
  })
})
