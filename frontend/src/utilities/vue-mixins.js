import Vue from 'vue'

const mixin = {
  data() {
    return {
      cache: null,
      isValid: true
    }
  },
  methods: {},
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated
    },
    isLoading() {
      return this.$store.getters.isLoading
    },
    user() {
      return this.$store.getters.user
    },
    applicationSteps() {
      return this.$store.getters.getApplicationSteps
    },
    applicationStep() {
      return this.$store.getters.getApplicationStep
    }
  }
}

Vue.mixin(mixin)
