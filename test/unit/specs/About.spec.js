import Vue from 'vue'
import About from '@/components/About'

describe('About.vue', () => {
  it('deve renderizar o componente corretamente', () => {
    const Constructor = Vue.extend(About)
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelectorAll('article').length).to.equal(1)
  })
})
