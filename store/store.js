import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)
let defaultCity = localStorage.getItem("currentCity") ? localStorage.getItem("currentCity"):"桂林"

const state = {
    currentCity : defaultCity
}

const cityMutations = {
    changeCurrentCity(state,local){
        state.currentCity = local;
        localStorage.setItem("currentCity",local)
    }
}
export default new Vuex.Store({
    state,
    mutations:cityMutations
})

 