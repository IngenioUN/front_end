import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    backURL: 'http://localhost:3000',
    rol: 1
  },
  mutations:{
    cambiarRol(state,rolnuevo){
      state.rol = rolnuevo
    }
  },
  actions: {

  }
})
