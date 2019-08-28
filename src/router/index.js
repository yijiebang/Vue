import Vue from 'vue'
import Router from 'vue-router'
import BlogLogin from '@/components/manager/BlogLogin'
import BlogIndex from '@/components/home/BlogIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: BlogLogin
    },
    {
      path: '/index',
      name: 'BlogIndex',
      component: BlogIndex
    }
  ]
})
