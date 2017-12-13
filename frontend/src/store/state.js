/* eslint-disable no-param-reassign */

export default {
  state: {
    loading: false
  },
  mutations: {
    isLoading (state) {
      state.loading = true
    },
    isNotLoading (state) {
      state.loading = false
    }
  },
  getters: {
    isLoading (state) {
      return state.loading
    }
  }
}
