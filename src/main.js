// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import FastClick from 'fastclick'
FastClick.attach(document.body)

import './assets/css/reset.css'
import './assets/css/iconfont.css'
/* eslint-disable no-new */
//swiper组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
