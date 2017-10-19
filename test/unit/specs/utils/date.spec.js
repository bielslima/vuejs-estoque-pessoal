import { assert } from 'chai'
import { toUSDate, stringToDate, toTheRestOfWorldDate } from '@/utils/date'

describe('Utils/date', () => {
  it('deve retornar duas funções', () => {
    assert.isFunction(toUSDate)
    assert.isFunction(stringToDate)
  })

  it('toUSDate deve retornar a data no formato mm-dd-aaaa', () => {
    const date = '19/10/2017'
    assert.strictEqual(toUSDate(date), '10-19-2017')
  })

  it('toTheRestOfWorldDate deve retornar a data no formato dd-mm-aaaa', () => {
    const date = '10-19-2017'
    assert.strictEqual(toTheRestOfWorldDate(date), '19/10/2017')
  })

  it('stringToDate deve retornar um objeto Date', () => {
    const date = '10-19-2017'
    assert.instanceOf(stringToDate(date), Date)
    assert.deepEqual(stringToDate(date), new Date(date))
  })
})
