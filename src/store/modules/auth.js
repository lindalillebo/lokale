import axios from "axios";
import router from "../../router";
import qs from "qs";

const state = {
  user: "",
  authToken: localStorage.getItem("authToken") || ""
};
const getters = {
  user: state => state.user,
  isAuthenticated: (state) => !!state.user,
  authToken: (state) => state.user?.jwt,
  identifier: (state) => state.user?.user.id,
  username: (state) => state.user?.user.username,
};
const actions = {
  async register({ dispatch }, form) {
    console.log("Registering...", form);

    let venueData = new FormData();

    let response = await axios.post("/auth/local/register", {
      username: form.email,
      email: form.email,
      password: form.password,
    });

    console.log("New user registered...", response);

    // eslint-disable-next-line no-unused-vars
    const { password, files, ...formData } = form;
    formData.users_permissions_user = response.data.user.id;

    venueData.append("data", JSON.stringify(formData));

    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        venueData.append(`files.gallery`, file, file.name);
      }
    }

    await axios.post("/venues", venueData);

    await dispatch("logIn", { username: response.data.user.email, password });
  },
  async logIn({ commit, dispatch }, user) {
    console.log("Logging in...", user);

    const response = await axios.post("/auth/local", {
      identifier: user.username,
      password: user.password,
    });

    localStorage.setItem("authToken", response.data.jwt);
    axios.defaults.headers.common['Authorization'] = "Bearer " + response.data.jwt;

    await commit("setUser", response.data);
    await dispatch("goToProfile");
  },
  async logOut({ commit }) {

    localStorage.removeItem('authToken')
    delete axios.defaults.headers.common['Authorization'];

    commit("logout");
    router.push("/login");
  },
  async goToProfile({ getters }) {
    const query = qs.stringify({
      _where: [{ "users_permissions_user.id": getters.identifier }],
    });
    const venueResponse = await axios.get(`/venues?${query}`);

    router.push(`/edit/${venueResponse.data[0]?.id}`);
  },
  async deleteAccount({ dispatch }) {
    const query = qs.stringify({
      _where: [{ "users_permissions_user.id": getters.identifier }],
    });

    const venueResponse = await axios.get(`/venues?${query}`);

    await axios.delete(`/venues/${venueResponse.data[0]?.id}`);
    await axios.delete(`/users/${venueResponse.data[0]?.users_permissions_user.id}`);
    
    dispatch("logOut");
  },
};
const mutations = {
  setUser(state, user) {
    state.user = user;
    state.authToken = user.jwt;
  },
  logout(state) {
    state.user = null;
    state.authToken = null;
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};
