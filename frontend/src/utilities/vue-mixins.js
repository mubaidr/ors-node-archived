import Vue from 'vue'
import router from 'src/router'
import store from 'src/store'

import config from './../config'

var mixin = {
  methods: {
    onValidated (validity, errors) {
      this.isValid = validity
    },
    disableSubmit () {
      return !this.isValid || this.isLoading
    }
  },
  computed: {
    isLoading () {
      return store.getters.isLoading
    },
    endpoint () {
      return config.api + router.app._route.fullPath
    }
  }
}

Vue.mixin(mixin)
