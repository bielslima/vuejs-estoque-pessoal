import Vue from 'vue'
import AddForm from '@/components/AddForm'

describe('AddForm.vue', () => {
  it('deve renderizar o componente corretamente', () => {
    const Constructor = Vue.extend(AddForm)
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelectorAll('form').length).to.equal(1)
  })
})
