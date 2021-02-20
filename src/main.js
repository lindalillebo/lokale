import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './assets/styles.scss'

axios.get('http://localhost:1337/venues').then(response => {
  console.log(response);
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
