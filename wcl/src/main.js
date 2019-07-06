import Vue from 'vue'
import App from './App.vue'
import swiper from "../node_modules/swiper/dist/css/swiper.css"
import router from './router/router.js'
Vue.config.productionTip = false

import axios from "axios"
Vue.prototype.$http = axios

new Vue({
	el:"#app",
  router,
  render: h => h(App)
})
