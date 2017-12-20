/* eslint-disable no-param-reassign */
import session from './../utilities/session'

export default {
  state: {
    vacancy: session.getVacancy()
  },
  mutations: {
    setVacancy (state, vac) {
      state.vacancy = vac
      session.setVacancy(vac)
    }
  },
  getters: {
    setVacancy (state) {
      return state.vacancy
    }
  }
}
