import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    newsPaper: [],
  },
  mutations: {
    setNews(state, payload) {
      state.newsPaper = payload;
    },
  },
});

export default store;
