import vue from 'vue'
import vuex from 'vuex'

import userModule from './user'
import stateModule from './state'
import stepsModule from './steps'

vue.use(vuex)

const store = new vuex.Store({
  modules: {
    user: userModule,
    state: stateModule,
    steps: stepsModule
  }
})

export default store
