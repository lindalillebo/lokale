import Vue from 'vue';
import VueRouter from "vue-router";
import store from "../store";
import SearchPage from "../views/SearchPage.vue";
import LoginPage from "../views/LoginPage.vue";
import ContactPage from "../views/ContactPage.vue";
import ListingPage from "../views/ListingPage.vue";
import VenueDetailsPage from "../views/VenueDetailsPage.vue";
import AddVenuePage from "../views/AddVenuePage.vue";
import ChangeVenuePage from "../views/ChangeVenuePage.vue";
import EnquireVenuePage from "../views/EnquireVenuePage.vue";

Vue.use(VueRouter);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}

const routes = [
  {
    path: "/",
    name: "SearchPage",
    component: SearchPage,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
    meta: { guest: true },
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: ContactPage,
  },
  {
    path: "/listing",
    name: "ListingPage",
    component: ListingPage,
  },
  {
    path: "/details/:id",
    name: "VenueDetailsPage",
    component: VenueDetailsPage,
  },
  {
    path: "/register",
    name: "AddVenuePage",
    component: AddVenuePage,
    meta: { guest: true },
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: "/edit/:id",
    name: "ChangeVenuePage",
    component: ChangeVenuePage,
    meta: {requireAuthentication: true},
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/enquire/:id",
    name: "EnquireVenuePage",
    component: EnquireVenuePage,
  },
];

const router = new VueRouter({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition
    }
      return { x: 0, y: 0 }
  },
  base: process.env.BASE_URL,
  routes
})

export default router