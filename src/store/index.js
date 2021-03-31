import Vue from 'vue';
import Vuex from 'vuex';

import moduleAStore from '@/modules/moduleA/store';
import moduleBStore from '@/modules/moduleB/store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    moduleA: moduleAStore,
    moduleB: moduleBStore,
  },
});
