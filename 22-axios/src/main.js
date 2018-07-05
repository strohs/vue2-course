import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

//setting of Global defaults for axios which are applied to this entire application
axios.defaults.baseURL = 'https://vuejs-http-c8a12.firebaseio.com';
//setting custom headers
axios.defaults.headers.common['Authorization'] = 'fasfda';
//setting headers for GET requests
//axios.defaults.headers.get['Accepts'] = 'application/json';

const reqInterceptor = axios.interceptors.request.use( config => {
  console.log('interceptor req config:', config );
  //can modify the request here before sending to the server
  return config;
});
const resInterceptor = axios.interceptors.response.use( res => {
  console.log( 'interceptor res: ', res );
  //can modify the response here
  return res;
});

//examples of removing interceptors, you will need to store the request/response IDs in a variable
axios.interceptors.request.eject( reqInterceptor );
axios.interceptors.response.eject( resInterceptor );

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
