import vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store'
import home from './../components/Home'

vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  root: '/',
  linkActiveClass: 'is-active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home,
      meta: {
        isOpen: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (store.getters.isAuthenticated) {
    if (to.path === '/auth/logout') {
      store.dispatch('removeAuthentication')
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
