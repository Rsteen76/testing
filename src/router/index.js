import Vue from 'vue'
import Router from 'vue-router'

import usersPage from '../pages/users.vue'
import adminPage from '../pages/admin.vue'
import greenTree from '../pages/greentree.vue'
import schedulesPage from '../pages/scheduleList.vue'
import register from '../pages/register.vue'
import login from '../pages/login.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  root: '/',
  component: greenTree,
  routes: [
    {
      path: '/',
      name: 'greentree',
      component: greenTree
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/admin',
      name: 'admin',
      component: adminPage,
      children: [
        {
          path: '/users',
          name: 'users',
          component: usersPage
        },
        {
          path: '/schedules',
          name: 'schedules',
          component: schedulesPage
        }
      ]
    }
  ]
})

export default router
