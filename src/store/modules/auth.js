import axios from 'axios'
import Cookies from 'js-cookie'
import router from '../../router'

const state = {
    user: null
};
const getters = {
    isAuthenticated: state => !!state.user,    
    StateUser: state => state.user,
};
const actions = {
    async Register({dispatch}, form) {
        let venueData = new FormData();
        let response = await axios.post('/auth/local/register', { 
            username: form.email, 
            email: form.email, 
            password: form.password 
        });

        venueData.append('email', form.email)
        venueData.append('password', form.password)
        venueData.append('repeatPassword', form.repeat_password)
        venueData.append('name', form.name)
        venueData.append('venuename', form.venuename)
        venueData.append('website', form.website)
        venueData.append('number', form.number)
        venueData.append('description', form.description)
        venueData.append('pricing', form.pricing)
        venueData.append('fromprice', form.fromprice)
        venueData.append('seating', form.seating)
        venueData.append('standing', form.standing)
        venueData.append('address', form.address)
        venueData.append('gallery', form.gallery)
        venueData.append('venue_types', form.venue_types)
        venueData.append('features', form.features)

        await axios.post('/venues', venueData);

        await dispatch('LogIn', response.user)
    },
    async LogIn({commit}, user) {
        const response = await axios.post('/login', user);
        await commit('setUser', response.user)

        router.push("/");
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