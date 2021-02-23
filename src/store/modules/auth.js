import axios from 'axios'
import strapi from '../../util/strapi'
import Cookies from 'js-cookie'

const state = {
    user: null,
    venue: null
};
const getters = {
    isAuthenticated: state => !!state.user,    
    StateVenue: state => state.venue,
    StateUser: state => state.user,
};
const actions = {
    async Register({dispatch}, form) {
        await axios.post('/add-venue', form)

        let UserForm = new FormData()

        UserForm.append('email', form.email)
        UserForm.append('password', form.password)
        UserForm.append('repeatPassword', form.repeat_password)
        UserForm.append('name', form.name)
        UserForm.append('venuename', form.venuename)
        UserForm.append('website', form.website)
        UserForm.append('number', form.number)
        UserForm.append('description', form.description)
        UserForm.append('pricing', form.pricing)
        UserForm.append('fromprice', form.fromprice)
        UserForm.append('seating', form.seating)
        UserForm.append('standing', form.standing)
        UserForm.append('address', form.address)
        UserForm.append('gallery', form.gallery)
        UserForm.append('venue_types', form.venue_types)
        UserForm.append('features', form.features)

        await dispatch('LogIn', UserForm)
    },
    async LogIn({commit}, User) {
        const response = await strapi.login('/login', User)
        await commit('setUser', response.User)
    },
    async CreateVenue({dispatch}, venue) {
        await axios.post('venue', venue)
        await dispatch('GetVenues')
    },
    async GetVenues({commit}){
        let response = await axios.get('/venues')
        commit('setVenues', response.data)
    },
    async DeleteVenue({commit}){
        let response = await axios.delete('/venues')
        commit('deleteVenues', response.data)
    },
    async LogOut({commit}){
        let user = null
        commit('logout', user)
    }
};
const mutations = {
    setUser(state, user){
        state.user = user
        Cookies.set('user', user)
    },
    setVenues(state, venues){
        state.venues = venues
    },
    logout(state){
        state.user = null
        state.venues = null
    },
};
export default {
  state,
  getters,
  actions,
  mutations
};