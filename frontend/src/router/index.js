import vue from 'vue'
import vueRouter from 'vue-router'
// import store from './../store'

import index from 'views'
import notFound from 'views/notFound'
import register from 'views/register'
import login from 'views/login'

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
      component: register
    },
    {
      path: '/auth/login',
      component: login
    },
    {
      path: '*',
      component: notFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  //TODO:Fetch & add data for each view
  //console.log(to)
  next(vm => {
    //vm.data = data
  })
})

export default router
