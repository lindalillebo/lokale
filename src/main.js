import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueMeta from 'vue-meta'
import VueGoogleMap from 'vuejs-google-maps'
import VModal from 'vue-js-modal'
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import { ValidationObserver } from 'vee-validate';
import './assets/styles.scss'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:1337';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.use(VModal)

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

Vue.use(VueGoogleMap, {
  load: {
    apiKey: 'AIzaSyBzbFAN1xNxA2nxHJMz7-F3Dad5P7pkuTk',
    libraries: 'places',
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  router, 
  render: h => h(App),
}).$mount('#app')
