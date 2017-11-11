import Vue from 'vue'
import FilterList from '@/components/FilterList'

describe('FilterList.vue', () => {
  it('deve renderizar o componente corretamente', () => {
    const Constructor = Vue.extend(FilterList)
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelectorAll('.form').length).to.equal(1)
  })
})
