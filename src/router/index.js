import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import City from '@/components/city/City'
// const Details = () => import('./views/UserDetails')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/details',
      name: 'details',
      component: resolve => require(['@/components/details/Detail'], resolve)
    }
  ]
})
