import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router/dist/vue-router'
Vue.use(VueRouter);

import Router from './Router.vue'

const routes = [
  { path: '/', component: Router }
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
