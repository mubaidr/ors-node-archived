import Vue from 'vue'
import axios from './axios'
import config from './../config'

const mixin = {
  data () {
    return {
      isValid: true
    }
  },
  methods: {
    // Generic form properties
    onValidated (validity) {
      this.isValid = validity
    },
    // Data fetch
    getCache () {
      if (!this.isAuthenticated) return

      this.$axios
        .get()
        .then(res => {
          this.$store.commit('setCache', res.data)
        })
        .catch(err => {
          if (err.response.status !== 404) {
            swal(
              'Error fetching data, please reload',
              err.response.request.response,
              'error'
            )
          }
          this.$store.commit('setCache', null)
        })
    }
  },
  computed: {
    disableSubmit () {
      return !this.isValid || this.$store.getters.isLoading
    },
    isAuthenticated () {
      return this.$store.getters.isAuthenticated
    },
    // Generic properties
    isLoading () {
      return this.$store.getters.isLoading
    },
    endpoint () {
      if (!this.$router) return '/'

      let path = this.$router.app._route.fullPath
      if (path.indexOf('auth') === -1) {
        path = `/api/${path.replace('/', '')}`
      }
      return config.api + path
    },
    // Data fetch
    cache () {
      return this.$store.getters.cache
    },
    user () {
      return this.$store.getters.user
    }
  },
  created () {
    const url = this.endpoint
    const model = this.form ? this.form.model || {} : {}

    // Add dummy axios method
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
