import Vue from 'vue'
import App from './App.vue'

import { store } from './store/store';

new Vue({
  el: '#app',
  // provide the store using the "store" option. This will inject the store instance to all child components.
  store: store,
  render: h => h(App)
})
