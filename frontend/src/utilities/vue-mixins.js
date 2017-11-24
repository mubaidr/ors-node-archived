import Vue from 'vue'
import config from './../config'

var mixin = {
  data () {
    return {
      isValid: true
    }
  },
  methods: {
    // Generic form properties
    onValidated (validity, errors) {
      this.isValid = validity
    },
    disableSubmit () {
      return !this.isValid || this.$store.getters.isLoading
    }
  },
  computed: {
    // Generic properties
    isLoading () {
      return this.$store.getters.isLoading
    },
    endpoint () {
      if (!this.$router) return '/'

      let path = this.$router.app._route.fullPath
      if (path.indexOf('auth') === -1) {
        path = '/api/' + path.replace('/', '')
      }
      return config.api + path
    }
  },
  created () {
    let axios = this.$http
    let url = this.endpoint
    let model = this.form ? this.form.model || {} : {}

    this.$axios = {
      get (_url, _model) {
        return axios.get(_url || url, _model || model)
      },
      post (_url, _model) {
        return axios.post(_url || url, _model || model)
      },
      put (_url, _model) {
        return axios.put(_url || url, _model || model)
      },
      delete (_url, _model) {
        return axios.delete(_url || url, _model || model)
      }
    }
  }
}

Vue.mixin(mixin)
