import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    //getters are a good place to put 'complex state' functions that get reused throughout multiple components
    doubleCounter: state => {
      return state.counter * 2;
    },
    stringCounter: state => {
      return state.counter + 'Clicks';
    }
  },
  //NOTE that mutations MUST always be synchronous, do not run ASYNC tasks in any mutation methods
  mutations: {
    increment: (state, payload )=> {
      state.counter += payload;
    },
    decrement: (state, payload ) => {
      state.counter -= payload;
    }
  },
  // actions can run asynchronous tasks before committing a mutation
  actions: {
    //using destructuring here
    increment: ( {commit}, payload ) => {
      //async tasks can be done here
      commit('increment',payload);
    },
    //no destructuring
    decrement: (context, payload) => {
      context.commit('decrement', payload );
    },
    asyncIncrement: ({commit}, payload) => {
      //wait for some duration then increment the counter
      setTimeout( () => {
        commit('increment', payload.by );
      }, payload.duration );
    },
    asyncDecrement: ({commit}, payload) => {
      //wait for some duration then increment the counter
      setTimeout( () => {
        commit('decrement', payload.by );
      }, payload.duration );
    }
  }
});
