import Vue from 'vue'
import AppNavbar from '@/components/AppNavbar'

describe('AppNavbar.vue', () => {
  it('deve renderizar o componente corretamente', () => {
    const Constructor = Vue.extend(AppNavbar)
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelectorAll('nav').length).to.equal(1)
  })
})
