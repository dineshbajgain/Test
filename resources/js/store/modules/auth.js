import axios from "axios";

const state = {
  user: null,
  token: null
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  StateUser: (state) => state.user,
};

const actions = {
  async Register({dispatch}, form) {
    await axios.post('register', form)
    let UserForm = new FormData()
    UserForm.append('email', form.email)
    UserForm.append('password', form.password)
    await dispatch('LogIn', UserForm)
  },

  async LogIn({commit}, user) {
    try{
      let responseData = await axios.post("login", user)  
      await commit("setUser", responseData.data.data);
      return responseData
    }catch(error){
      return error.response
    }
   
  },

  async LogOut({ commit }) {
    let user = null;
    commit("logout", user);
  },
};

const mutations = {
  setUser(state, user) {
    state.user = user.name;
    state.token = user.token;
  },

  logout(state, user) {
    state.user = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
