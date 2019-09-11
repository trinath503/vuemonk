import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';
import store from './store/store'
Vue.use(VueRouter);

Vue.filter('videTime', (value) =>{
	return parseFloat(value).toFixed( 2 )+' secs';
});

const router = new VueRouter({
  mode:'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
