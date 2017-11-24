import Vue from 'vue'
import axios from 'axios'
import store from 'src/store'
import router from 'src/router'

var numberOfAjaxCAllPending = 0

// Add a request interceptor
axios.interceptors.request.use(
  cfg => {
    //checkPace(true)

    if (store.getters.isAuthenticated) {
      cfg.headers['x-access-token'] = store.getters.auth
    }
    return cfg
  },
  err => {
    return Promise.reject(err)
  }
)

// Add a response interceptor
axios.interceptors.response.use(
  res => {
    //checkPace(false)
    return res
  },
  err => {
    //checkPace(false)
    switch (err.response.status) {
      case 403:
        store.commit('removeAuthentication')
        router.push({
          path: '/auth/login',
          query: {
            redirect: router.app._route.fullPath
          }
        })
        break
    }
    return Promise.reject(err)
  }
)

function checkPace (enable) {
  if (enable) {
    numberOfAjaxCAllPending++
    Pace.restart()
    store.commit('isLoading')
  } else {
    if (--numberOfAjaxCAllPending === 0) {
      Pace.stop()
      store.commit('isNotLoading')
    }
  }
}

export default axios
