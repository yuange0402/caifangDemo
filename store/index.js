import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
      phone:"0757-63838600",
      city:"佛山",
      username:'',
      showBox:false
  },
  mutations: {
      setUser(state,val){
           state.username = val;
      },
      setShowBox(state,val){
          state.showBox = val;
      }
  }
})

export default store