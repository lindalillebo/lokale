import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import axios from 'axios'
import './assets/styles.scss'
import SearchPage from './pages/SearchPage.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'SearchPage',
      component: SearchPage
    }
  ]
})

axios.get('http://localhost:1337/venues').then(response => {
  console.log(response);
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
