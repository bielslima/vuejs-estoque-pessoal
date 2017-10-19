import Vue from 'vue'
import List from '@/components/List'

describe('List.vue', () => {
  it('deve renderizar o componente corretamente', () => {
    const Constructor = Vue.extend(List)
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelectorAll('.data-table').length).to.equal(1)
  })
})
