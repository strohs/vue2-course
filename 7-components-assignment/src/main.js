import Vue from 'vue'
import App from './App.vue'
import ServerStatusHeader from './components/ServerHeader.vue'
import ServerFooter from './components/ServerFooter.vue'
import ServerList from './components/ServerList'

Vue.component('server-status-header', ServerStatusHeader);
Vue.component('server-footer',ServerFooter);
Vue.component('server-list',ServerList);

new Vue({
  el: '#app',
  render: h => h(App)
})
