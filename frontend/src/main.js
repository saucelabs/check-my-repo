import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'development') {
  const VueAxe = require('vue-axe').default
  Vue.use(VueAxe, {
  auto: true  // enable auto check.
})
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
