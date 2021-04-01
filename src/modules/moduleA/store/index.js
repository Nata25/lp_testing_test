import mock from './mock.json';

export default {
  state: {
    list: [],
  },
  getters: {
  },
  mutations: {
    addToList(state, items) {
      items.forEach((item) => {
        state.list.push(item);
      });
    },
  },
  actions: {
    async getData({ commit }) {
      if (process.env.NODE_ENV === 'development') {
        commit('addToList', mock);
      } else {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        try {
          if (response.ok) {
            const data = await response.json();
            commit('addToList', data);
          } else {
            console.error(response.status);
          }
        } catch (e) {
          console.error(e);
        }
      }
    },
  },
};
