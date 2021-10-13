"use strict";

export default Vuex.createStore({
  state: {
    procs: [],
  },
  mutations: {
    setProcs(state, payload) {
      state.procs = payload.procs;
    },
    push(state, payload) {
      state.procs.push(payload);
    },
    pop(state) {
      state.procs.pop();
    },
  },
  actions: {
    async getActresses(context) {
      const payload = { procs: [] };
      const url = "http://localhost/vue/data.json";
      await axios.get(url).then((res) => {
        payload.procs = res.data.actresses;
      });
      context.commit("setProcs", payload);
    },
  },
  getters: {
    exists: (state) => (payload) => {
      return state.procs.findIndex((p) => p === payload) > -1;
    },
    getProcs: (state) => {
      return state.procs;
    },
  },
});
