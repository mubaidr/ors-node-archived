import session from './session'
import axios from '../utilities/axios'
/* eslint-disable no-param-reassign */

export default {
  state: {
    auth: session.getAuth(),
    user: session.getUser()
  },
  getters: {
    isAuthenticated(state) {
      return state.auth !== null && typeof state.auth !== 'undefined'
    },
    auth(state) {
      return state.auth
    },
    user(state) {
      return state.user
    }
  },
  mutations: {
    setAuthentication(state, obj) {
      if (obj) {
        state.auth = obj.token
        state.user = obj.login
        session.setAuthentication(obj)
      } else {
        state.auth = null
        state.user = null
        session.clear()
      }
    }
  },
  actions: {
    authenticate(context, obj) {
      axios
        .post('/login', obj)
        .then(res => {
          context.commit('setAuthentication', res.data)
        })
        .catch(() => {
          swal('Invalid credentials!', 'Please try again!', 'error')
        })
    },
    removeAuthentication(context) {
      context.commit('setAuthentication')
    }
  }
}
