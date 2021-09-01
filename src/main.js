import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/fonts/iconfont.css'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
