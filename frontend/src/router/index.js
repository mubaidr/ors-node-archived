import vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store'
import index from '../views/index.vue'
import notFound from '../views/notFound.vue'
import register from '../views/account/register.vue'
import login from '../views/account/login.vue'
import account from '../views/account/index.vue'
import candidate from '../views/candidate.vue'

vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  root: '/',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: index,
      meta: {
        isOpen: true
      }
    },
    {
      path: '/auth/register',
      component: register,
      meta: {
        skipIfAuthorized: true,
        isOpen: true
      }
    },
    {
      path: '/auth/login',
      component: login,
      meta: {
        skipIfAuthorized: true,
        isOpen: true
      }
    },
    {
      path: '/candidate',
      component: candidate
    },
    {
      path: '/account',
      component: account
    },
    {
      path: '*',
      component: notFound,
      meta: {
        isOpen: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (store.getters.isAuthenticated) {
    if (to.path === '/auth/logout') {
      store.commit('removeAuthentication')
      next({
        path: '/home'
      })
    } else if (to.matched.some(record => record.meta.skipIfAuthorized)) {
      next({
        path: '/home'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.isOpen)) {
    next()
  } else {
    next({
      path: '/auth/login',
      query: {
        redirect: to.fullPath
      }
    })
  }
})

export default router
