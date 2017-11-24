import session from 'utilities/session'

export default {
  state: {
    auth: session.getAuth(),
    user: session.getUser()
  },
  mutations: {
    setAuthentication (state, obj) {
      state.auth = obj.token
      state.user = obj.login
      session.setAuthentication(obj)
    },
    removeAuthentication (state) {
      state.auth = null
      state.user = null
      session.clear()
    }
  },
  getters: {
    isAuthenticated (state) {
      return state.auth !== null && typeof state.auth !== 'undefined'
    },
    auth (state) {
      return state.auth
    },
    user (state) {
      return state.user
    }
  }
}
