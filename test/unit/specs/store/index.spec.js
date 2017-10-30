import { expect } from 'chai'
import { changeAmount, getItems, removeItem } from '@/store/mutations'

describe('Store mutations', () => {
  let item = {}
  beforeEach(() => {
    item = {
      _id: 1,
      name: 'Sabonetes',
      amount: 1,
      expiration: null
    }
  })

  it('changeAmount() deve alterar corretamente a quantidade do item', () => {
    const store = {
      items: [item]
    }

    ++item.amount

    changeAmount(store, item)
    expect(store.items[0].amount).to.equal(2)
  })

  it('getItems() deve carregar todos os itens na store', () => {
    const store = {
      items: []
    }

    getItems(store, [item])
    expect(store.items.length).to.equal(1)
  })

  it('removeItem() deve remover corretamente um item da store', () => {
    const store = {
      items: [item]
    }

    removeItem(store, item)
    expect(store.items.length).to.equal(0)
  })
})
