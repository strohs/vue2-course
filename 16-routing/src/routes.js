import Home from './components/Home';
import Header from './components/Header';
// import User from './components/user/User';
// import UserStart from './components/user/UserStart';
// import UserDetail from './components/user/UserDetail';
// import UserEdit from './components/user/UserEdit';

//this tells WebPack to lazily load components -- START
const User = resolve => {
  require.ensure(['./components/user/User.vue'], () => {
    resolve(require('./components/user/User.vue'));
  })
};
const UserStart = resolve => {
  require.ensure(['./components/user/UserStart.vue'], () => {
    resolve(require('./components/user/UserStart.vue'));
  })
};
const UserDetail = resolve => {
  require.ensure(['./components/user/UserDetail.vue'], () => {
    resolve(require('./components/user/UserDetail.vue'));
  })
};
const UserEdit = resolve => {
  require.ensure(['./components/user/UserEdit.vue'], () => {
    resolve(require('./components/user/UserEdit.vue'));
  })
};
//lazy loading -- END

export const routes = [
  {
    path: '', name: 'home', components: {
      default: Home,
      'header-top': Header  //this is the named router view 'header-top' which will use the Header component
    }
  },
  //example of passing a parameter :id to the user component
  {
    path: '/user', components: {
      default: User,
      'header-bottom': Header
    }, children: [
      {path: '', component: UserStart},
      {
        path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
          console.log('inside route setup');
          next();
        }
      },
      {path: ':id/edit', component: UserEdit, name: 'userEdit'}
    ]
  },
  // entering /redirect-me  in the URL will redirect to /user
  {path: '/redirect-me', redirect: {path: '/user'}},
  //catch all route that handles any URL not explicitly handled above it
  {path: '*', redirect: '/'}

];
