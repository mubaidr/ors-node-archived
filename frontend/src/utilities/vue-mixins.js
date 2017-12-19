import Vue from 'vue'
import config from './../config'

const mixin = {
  data () {
    return {
      cache: null,
      isValid: true
    }
  },
  methods: {
    // Generic form properties
    onValidated (validity) {
      this.isValid = validity
    },
    getEndpoint () {
      return config.api + this.endpoint
    },
    // Data fetch
    getCache () {
      if (!this.endpoint) return

      this.axios
        .get(this.getEndpoint())
        .then(res => {
          this.cache = res.data
        })
        .catch(() => {
          this.cache = null
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
    isLoading () {
      return this.$store.getters.isLoading
    },
    user () {
      return this.$store.getters.user
    },
    applicationSteps () {
      return this.$store.getters.getApplicationSteps
    },
    applicationStep () {
      return this.$store.getters.getApplicationStep
    }
  },
  created () {
    this.getCache()
  }
}

Vue.mixin(mixin)
