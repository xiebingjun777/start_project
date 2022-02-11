import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)
let defaultCity = "桂林"
const state = {
    currentCity : defaultCity
}

const cityMutations = {
    changeCurrentCity(state,local){
        state.currentCity = local;
    }
}
export default new Vuex.Store({
    state,
    mutations:cityMutations
})

 