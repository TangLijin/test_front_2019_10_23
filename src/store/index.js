import Vue from 'vue'
import Vuex from 'vuex'

import actions from './action'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex);

const state = {
  scores:0
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store;
