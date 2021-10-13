export default Vuex.createStore({
  state: {
    procs: ["石原夏織"],
  },
  mutations: {
    push(state, payload) {
      state.procs.push(payload);
    },
    pop(state) {
      state.procs.pop();
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
