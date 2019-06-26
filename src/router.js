import Vue from 'vue';
import Router from 'vue-router';
import Fractions from './views/Fractions.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'fractions',
      component: Fractions,
    },
    {
      path: '/websocket',
      name: 'websocket',
      component: () => import(/* webpackChunkName: "websocket" */ './views/Websocket.vue'),
    },
  ],
});
