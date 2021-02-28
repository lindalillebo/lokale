import Vue from 'vue';
import VueRouter from "vue-router";
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
    path: "/details/:id",
    name: "VenueDetailsPage",
    component: VenueDetailsPage,
  },
  {
    path: "/register",
    name: "AddVenuePage",
    component: AddVenuePage,
    meta: { guest: true },
  },
  {
    path: "/edit/:id",
    name: "ChangeVenuePage",
    component: ChangeVenuePage,
    meta: {requireAuthentication: true},
  },
  {
    path: "/enquire/:id",
    name: "EnquireVenuePage",
    component: EnquireVenuePage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router