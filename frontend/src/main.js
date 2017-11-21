import 'bootswatch/dist/litera/bootstrap.min.css'
import './assets/css/animations.css'
import './assets/css/index.styl'

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import './utilities'

new Vue({
  el: '#app',
  store: store,
  router: router,
  template: '<App/>',
  components: {
    App
  }
})
