import session from 'utilities/session'

export default {
  state: {
    auth: session.getAuth(),
    userInfo: session.getUserInfo()
  },
  mutations: {
    setAuthentication (state, auth) {
      state.auth = auth
      session.setAuth(auth)
    },
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
      session.setUserInfo(userInfo)
    },
    removeAuthentication (state) {
      state.auth = null
      state.userInfo = null
      session.clear()
    }
  },
  getters: {
    getAuth (state) {
      return state.auth
    },
    isAuthenticated (state) {
      return state.auth !== null && typeof state.auth !== 'undefined'
    },
    userInfo (state) {
      return state.userInfo
    }
  }
}
