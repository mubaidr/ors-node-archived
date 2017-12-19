import Vue from 'vue'

import 'bootswatch/dist/lux/bootstrap.min.css'
import './assets/css/animations.css'
import './assets/css/pace.styl'
import './assets/css/index.styl'
import './utilities/pace-config'
import './assets/js/pace.min'
import './utilities'

import App from './App.vue'
import store from './store'
import router from './router'

// eslint-disable-next-line
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App
  }
})
