import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = true

if (process.env.NODE_ENV === 'development') {
  const VueAxe = require('vue-axe').default
  Vue.use(VueAxe)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
