import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';

//enable vue router
Vue.use(VueRouter);

const router = new VueRouter( {
  routes: routes,   //in ES6, since key and value name match, you could simply say   routes
  mode: 'history',
  scrollBehavior(to,from,savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return {x: 0, y: 0 };
  }
});

//using the beforeEach Guard to guard all routes
router.beforeEach((to,from,next) => {
  //console.log('global beforeEach');
  // you can explicitly pass an object to route and tell it where to route to next, OR you can halt routing with next(false)
  // OR you omit next() (or explicitly include next() ) and Vue will route to whatever component is configured next.
  next();
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
