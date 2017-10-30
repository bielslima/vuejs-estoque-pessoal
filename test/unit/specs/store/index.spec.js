import { expect } from 'chai'
import { changeAmount, getItems, removeItem } from '@/store/mutations'

describe('Store mutations', () => {
  it('changeAmount() deve alterar corretamente a quantidade do item', () => {
    const item = {
      _id: 1,
      name: 'Sabonetes',
      amount: 1,
      expiration: null
    }
    const store = {
      items: [item]
    }

    ++item.amount

    changeAmount(store, item)
    expect(store.items[0].amount).to.equal(2)
  })

  it('getItems() deve carregar todos os itens na store', () => {
    const item = {
      _id: 1,
      name: 'Sabonetes',
      amount: 1,
      expiration: null
    }
    const store = {
      items: []
    }

    getItems(store, [item])
    expect(store.items.length).to.equal(1)
  })

  it('removeItem() deve remover corretamente um item da store', () => {
    const item = {
      _id: 1,
      name: 'Sabonetes',
      amount: 1,
      expiration: null
    }
    const store = {
      items: [item]
    }

    removeItem(store, item)
    expect(store.items.length).to.equal(0)
  })
})
