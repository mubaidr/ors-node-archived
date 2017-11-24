import vue from 'vue'
import vueRouter from 'vue-router'
import store from 'src/store'

import index from 'views'
import notFound from 'views/notFound'
import register from 'views/account/register'
import login from 'views/account/login'
import candidate from 'views/candidate'

vue.use(vueRouter)

var router = new vueRouter({
  mode: 'history',
  root: '/',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: index
    },
    {
      path: '/auth/register',
      component: register,
      meta: {
        skipIfAuthorized: true
      }
    },
    {
      path: '/auth/login',
      component: login,
      meta: {
        skipIfAuthorized: true
      }
    },
    {
      path: '/auth/logout',
      redirect: '/home'
    },
    {
      path: '/candidate',
      component: candidate,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*',
      component: notFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (store.getters.isAuthenticated) {
    if (to.path === '/auth/logout') {
      store.commit('removeAuthentication')
      next()
    } else if (to.matched.some(record => record.meta.skipIfAuthorized)) {
      next({
        path: '/home'
      })
    } else {
      next()
    }
  } else {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      next({
        path: '/auth/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  }
})

export default router
