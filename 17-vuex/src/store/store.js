import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

//this will import all exports from actions.js as an object named 'actions'
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

export const store = new Vuex.Store({
  //state: holds the mutable state of the application
  state: {
    value: 0
  },
  getters,
  //NOTE that mutations MUST always be synchronous, do not run ASYNC tasks in any mutation methods
  // mutations object imported above
  mutations,
  // actions can run asynchronous tasks before committing a mutation,
  // actions is the name of the object we imported above using '*' syntax
  actions,

  modules: {
    counter: counter
    //OR in es6 just  counter
  }
});
