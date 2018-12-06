import Vue from 'vue'
import Router from 'vue-router'
import Count from '@/components/count'
import Login from '@/components/Login/login'
import Broadcast from '@/components/Broadcast/Broadcast'
import accounts from '@/components/accounts/accounts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/count',
      name: 'Count',
      component: Count
    },
    {
      path: '/accounts',
      name: 'accounts',
      component: accounts
    }
  ]
})
