import Vue from 'vue';
import VueRouter from 'vue-router';
import moduleA from '@/modules/moduleA/moduleA.vue';
import moduleB from '@/modules/moduleB/moduleB.vue';
import moduleC from '@/modules/moduleC/moduleC.vue';
import moduleD from '@/modules/moduleD/moduleD.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/moduleA', component: moduleA },
  { path: '/moduleB', component: moduleB },
  { path: '/moduleC', component: moduleC },
  { path: '/moduleD', component: moduleD },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
