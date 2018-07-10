import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import {routes} from './routes.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter( {
    routes: routes,   //in ES6, since key and value name match, you could simply say   routes
    mode: 'history'
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
