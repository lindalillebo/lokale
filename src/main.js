import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueGoogleMap from 'vuejs-google-maps'
import VModal from 'vue-js-modal'
import * as VeeValidate from 'vee-validate';
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import { ValidationObserver } from 'vee-validate';
import './assets/styles.scss'

axios.defaults.withCredentials = true
axios.defaults.baseURL = process.env.VUE_APP_STRAPI_URL;

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.use(VeeValidate, {
  validity: true
})

Vue.use(VModal)

Vue.use(VueGoogleMap, {
  load: {
    apiKey: 'AIzaSyBzbFAN1xNxA2nxHJMz7-F3Dad5P7pkuTk',
    libraries: ''
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  router, 
  render: h => h(App),
}).$mount('#app')
