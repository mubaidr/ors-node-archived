import session from '../utilities/session'
/* eslint-disable no-param-reassign */

export default {
  state: {
    applicationSteps: 7,
    applicationStep: session.getApplicationStep()
  },
  mutations: {
    setApplicationStep (state, obj) {
      state.applicationStep = obj
      session.setApplicationStep(obj)
    }
  },
  getters: {
    getApplicationStep (state) {
      return state.applicationStep
    },
    getApplicationSteps (state) {
      return state.applicationSteps
    }
  }
}
