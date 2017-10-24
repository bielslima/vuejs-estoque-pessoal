export default class ItemModel {
  constructor (id) {
    this._item = {
      _id: id,
      name: '',
      amount: 0,
      expiration: null
    }
  }

  set name (value) {
    this._item.name = value
  }

  set amount (value) {
    this._item.amount = value
  }

  set expiration (value) {
    this._item.expiration = value
  }

  get () {
    return { ...this._item }
  }

  toString () {
    return JSON.stringify(this._item)
  }
}
