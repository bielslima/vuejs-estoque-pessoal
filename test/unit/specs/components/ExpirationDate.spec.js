import Vue from 'vue'
import ExpirationDate from '@/components/ExpirationDate'

describe('ExpirationDate.vue', () => {
  it('deve renderizar o componente corretamente', () => {
    const Constructor = Vue.extend(ExpirationDate)
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelectorAll('p').length).to.equal(1)
  })
})
