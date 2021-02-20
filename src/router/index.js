import { createRouter, createWebHistory } from 'vue-router'
import SearchPage from '../pages/SearchPage.vue'
import LoginPage from '../pages/LoginPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import ListingPage from '../pages/ListingPage.vue'
import VenueDetailsPage from '../pages/VenueDetailsPage.vue'
import AddVenuePage from '../pages/AddVenuePage.vue'
import ChangeVenuePage from '../pages/ChangeVenuePage.vue'
import EnquireVenuePage from '../pages/EnquireVenuePage.vue'

const routes = [
      {
        path: '/',
        name: 'SearchPage',
        component: SearchPage
      },
      {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
      },
      {
        path: '/contact',
        name: 'ContactPage',
        component: ContactPage
      },
      {
        path: '/listing',
        name: 'ListingPage',
        component: ListingPage
      },
      {
        path: '/venue-details',
        name: 'VenueDetailsPage',
        component: VenueDetailsPage
      },
      {
        path: '/add-venue',
        name: 'AddVenuePage',
        component: AddVenuePage
      },
      {
        path: '/change-venue',
        name: 'ChangeVenuePage',
        component: ChangeVenuePage
      },
      {
        path: '/enquire-venue',
        name: 'EnquireVenuePage',
        component: EnquireVenuePage
      }
    ]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router


  