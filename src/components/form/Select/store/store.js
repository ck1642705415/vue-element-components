import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)
import {objToArray} from '@/utils'
import {SELECT_TYPES, ORDER_STATUS, ORDER_STATUS_V, REAL_NAME_STATUS, REAL_NAME_STATUS_V} from '@/constants'

class store {
  constructor() {
    this.SelectStore = this.initStore()
  }

  initStore() {
    return new Vuex.Store({
      state: {
        options: []
      },
      getters: {
        options(state) {
          return state.options
        }
      },
      mutations: {
        async getOptions(state, loadType) {
          switch (loadType) {
            case SELECT_TYPES.ORDER_STATUS:
              state.options = objToArray(ORDER_STATUS, ORDER_STATUS_V)
              break;
            case SELECT_TYPES.REAL_NAME_STATUS:
              state.options = objToArray(REAL_NAME_STATUS, REAL_NAME_STATUS_V)
              break;
          }
        }
      },
      actions: {
        GET_SELECT_OPTIONS({commit}, {loadType}) {
          commit('getOptions', loadType)
        }
      }
    })
  }
}

export {
  store
}
