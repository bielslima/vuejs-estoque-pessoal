import Vue from 'vue'
import AppHeader from '@/components/AppHeader'

describe('AppHeader.vue', () => {
  it('deve renderizar o componente corretamente', () => {
    const Constructor = Vue.extend(AppHeader)
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelectorAll('h1').length).to.equal(1)
  })
})
