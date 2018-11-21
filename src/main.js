// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'animate.css'

Vue.use(require('vue-moment'))
Vue.use(VueSweetalert2)
Vue.use(Vuetify, { theme: {
  primary: '#153c00',
  primaryText: '#FFFFFF',
  secondary: '#f09300',
  lightText: '#000000'
}})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
