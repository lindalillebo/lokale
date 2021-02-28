import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import * as GmapVue from "gmap-vue";
import VModal from "vue-js-modal";
import * as VeeValidate from "vee-validate";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
import { ValidationObserver } from "vee-validate";
import "./assets/styles.scss";

axios.defaults.withCredentials = false;
axios.defaults.baseURL = process.env.VUE_APP_STRAPI_URL;
axios.interceptors.response.use(undefined, function(error) {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      store.dispatch("LogOut");
      return router.push("/login");
    }
  }
});

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
Vue.use(VeeValidate, {
  validity: true,
});

Vue.use(VModal);

Vue.use(GmapVue, {
  load: {
    key: "AIzaSyBzbFAN1xNxA2nxHJMz7-F3Dad5P7pkuTk",
    libraries: "",
    region:"NO",
    language: "NO",
  },
  installComponents: true,
});


Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
