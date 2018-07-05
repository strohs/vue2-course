import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use( VueResource );

//we are setting up the main (default URL) we are going to use for this application
Vue.http.options.root = 'https://vuejs-http-c8a12.firebaseio.com/data.json';
//could set headers here as well
//Vue.http.options.headers()

//example of using VueResource interceptors to change POST requests into PUT
Vue.http.interceptors.push((request, next) => {
  console.log( request );
  if (request.method === 'POST') {
    request.method = 'PUT';
  }
  next(response => {
    response.json = () => {
      return { messages: response.body }
    }
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
});
