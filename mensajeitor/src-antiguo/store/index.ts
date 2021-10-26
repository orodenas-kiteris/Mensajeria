import { createStore } from 'vuex'

export default createStore({
  state: {
    usuario: "",
    mensaje: {}
  },
  mutations: {
    
    cambiarUsuario(state, val) {

      state.usuario = val

    },

    leerMensaje(state, item){
      state.mensaje = item
    }

  },
  actions: {
  },
  modules: {
  }
})
