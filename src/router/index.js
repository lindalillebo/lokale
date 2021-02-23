import Vue from 'vue';
import VueRouter from "vue-router";
import store from '../store';
import SearchPage from "../views/SearchPage.vue";
import LoginPage from "../views/LoginPage.vue";
import ContactPage from "../views/ContactPage.vue";
import ListingPage from "../views/ListingPage.vue";
import VenueDetailsPage from "../views/VenueDetailsPage.vue";
import AddVenuePage from "../views/AddVenuePage.vue";
import ChangeVenuePage from "../views/ChangeVenuePage.vue";
import EnquireVenuePage from "../views/EnquireVenuePage.vue";

Vue.use(VueRouter);

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
    path: "/venue-details",
    name: "VenueDetailsPage",
    component: VenueDetailsPage,
  },
  {
    path: "/add-venue",
    name: "AddVenuePage",
    component: AddVenuePage,
    meta: { guest: true },
  },
  {
    path: "/change-venue",
    name: "ChangeVenuePage",
    component: ChangeVenuePage,
    meta: {requireAuthentication: true},
  },
  {
    path: "/enquire-venue",
    name: "EnquireVenuePage",
    component: EnquireVenuePage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requireAuthentication)) {
    if (store.getters.isAuthenticated) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next("/change-venue");
      return;
    }
    next();
  } else {
    next();
  }
});

export default router