export default {
  state: {
    list: [],
  },
  getters: {
  },
  mutations: {
    addToList(state, item) {
      state.list.push(item);
    },
  },
  actions: {
    getData({ commit }) {

      // commit('addToList', item);
    },
  },
};
