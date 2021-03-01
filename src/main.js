import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from '@/store/index.js';
import router from '@/router/index.js';
import PortalVue from 'portal-vue'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
Vue.use(Vuex)
Vue.use(PortalVue)








