import Vue from 'vue'
import AmountCounter from '@/components/AmountCounter'

describe('AmountCounter.vue', () => {
  it('deve renderizar o componente corretamente', () => {
    const Constructor = Vue.extend(AmountCounter)
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelectorAll('button').length).to.equal(2)
    expect(vm.$el.querySelectorAll('span').length).to.equal(1)
  })
})
