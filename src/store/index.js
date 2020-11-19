import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { usersStoreModule } from '../features/helloworld/store'

export default new Vuex.Store({
  modules: {
    usersModule:usersStoreModule
  },
  state: () => ({
    counter: 10,
    isAuthenticated:false
  }),
  mutations: {
    LOGIN(state, isAuth) {
      state.isAuthenticated = isAuth
    }  },
  actions: {
    login({commit},  uName, pass){
        //do login ...
      commit("", true)
    }

  },
  getters: {
    

  }


})
