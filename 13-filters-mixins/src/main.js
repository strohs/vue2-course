import Vue from 'vue'
import App from './App.vue'

//global filter
Vue.filter('capitalize', function (value) {
  const capStr = value[0].toUpperCase() + value.substring(1);
  return capStr;
});

//global MixIn that will be added to every component of your application, USE CAUTIOUSLY, probably not needed
Vue.mixin({
  created() {
    console.log('Global Mixin created hook');
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
