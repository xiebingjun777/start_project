import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

let cityState = {
    currentCity = "桂林";
}

let store = new Vuex.store({
    state: cityState
})