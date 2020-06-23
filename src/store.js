import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    backURL: 'http://localhost:3000'
    //backURL: 'http://ingeniobackend.herokuapp.com'
  },
  mutations:{},
  actions: {}
})
