import 'bootswatch/dist/litera/bootstrap.min.css'
import 'assets/css/animations.css'
import 'assets/css/index.styl'

import Vue from 'vue'
import App from 'src/App.vue'
import store from 'src/store'
import router from 'src/router'

import 'src/utilities'

new Vue({
  el: '#app',
  store: store,
  router: router,
  template: '<App/>',
  components: {
    App
  }
})
