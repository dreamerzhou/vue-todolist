import Vue from 'vue';

import app from './components/app.vue';
import store from './store/store.js';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  render: h => h(app)
})