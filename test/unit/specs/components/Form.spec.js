import Vue from 'vue'
import Form from '@/components/Form'

describe('Form.vue', () => {
  it('deve renderizar o componente corretamente', () => {
    const Constructor = Vue.extend(Form)
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelectorAll('form').length).to.equal(1)
  })
})
