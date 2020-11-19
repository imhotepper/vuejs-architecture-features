import {getUsers} from './services'

export {usersStoreModule};

const usersStoreModule = {
    namespaced: true,
    state: () => ({ 
        users: []
     }),
    mutations: {
        SET_USERS (state, users) {
            // `state` is the local module state
            state.users = users
          }
      },
    actions: { 
      async loadUsers({commit}){
            commit("SET_USERS", await getUsers())
      }
     },
    getters: {

      }
  }

 