import Vue from 'vue'

var mixin = {
  methods: {
    onValidated (validity, errors) {
      this.isValid = validity
    },
    onSubmit () {
      this.loading = true
      //TODO submit request
    },
    disableSubmit () {
      return !this.isValid || this.loading
    }
  },
  computed: {
    showProgress () {
      return this.loading
    }
  }
}

Vue.mixin(mixin)
