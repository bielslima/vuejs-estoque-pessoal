import Vue from 'vue'
import AmountCounter from '@/components/AmountCounter'

describe('AmountCounter.vue', () => {
  let vm = {}

  beforeEach(() => {
    const Constructor = Vue.extend(AmountCounter)
    vm = new Constructor().$mount()
  })
  it('deve renderizar o componente corretamente', () => {
    expect(vm.$el.querySelectorAll('button').length).to.equal(2)
    expect(vm.$el.querySelectorAll('span').length).to.equal(1)
  })

  it('deve chamar o evento increment', () => {
    const spy = sinon.spy()
    vm.$on('increment', spy)
    vm.increment()
    expect(spy).to.have.been.called // eslint-disable-line
  })

  it('deve chamar o evento decrement', () => {
    const spy = sinon.spy()
    vm.$on('decrement', spy)
    vm.decrement()
    expect(spy).to.have.been.called // eslint-disable-line
  })
})
