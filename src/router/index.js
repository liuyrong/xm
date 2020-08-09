import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import M from '@/pages/month/m'
import Che from '@/pages/month/che'
import Home from '@/yilai/home'
Vue.use(Router)
import shop from './shop';
export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/m',
      name: 'M',
      component: M
    },
    {
      path: '/che',
      name: 'Che',
      component:Che
    },
    {
      path: '/home',
      name: 'Home',
      component:Home
    },
    ...shop,
   
  ]
})
