import Vue from 'vue'
import Router from 'vue-router'
import List from '../components/List'
import Form from '../components/Form'
import About from '../components/About'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'navbar__item--active',
  routes: [
    {
      path: '/',
      name: 'list',
      component: List
    },
    {
      path: '/adicionar',
      name: 'form',
      component: Form
    },
    {
      path: 'sobre',
      name: 'about',
      component: About
    }
  ]
})
