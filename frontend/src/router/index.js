import vue from 'vue'
import vueRouter from 'vue-router'
import store from 'src/store'

import index from 'views'
import notFound from 'views/notFound'
import register from 'views/account/register'
import login from 'views/account/login'
import candidate from 'views/candidate'
import profile from 'views/profile'

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
      path: '/auth/logout',
      redirect: '/home'
    },
    {
      path: '/candidate',
      component: candidate
    },
    {
      path: '/profile',
      component: profile
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
      next()
    } else if (to.matched.some(record => record.meta.skipIfAuthorized)) {
      next({
        path: '/home'
      })
    } else {
      next()
    }
  } else {
    if (to.matched.some(record => record.meta.isOpen)) {
      next()
    } else {
      next({
        path: '/auth/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  }
})

export default router
