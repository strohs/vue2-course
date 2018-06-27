import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

//in this example we are registering the component as a Global Component
Vue.component('app-servers', Home );

new Vue({
  el: '#app',
  //render is an alternative to 'template:', a better alternative, see docs
  render: h => h(App)
})
