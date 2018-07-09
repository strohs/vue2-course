const state = {
  counter: 0
};

//set this module to automatically use namespaces
const namespaced = true;

const getters = {
  //getters are a good place to compute derived state based on store state
  doubleCounter: state => {
    return state.counter * 2;
  },
  //getters can optionally receive other getters as a second argument
  stringCounter: (state,getters) => {
    //could call getters.doubleCounter here
    return state.counter + 'Clicks';
  }
};

const mutations = {
  increment: (state, payload )=> {
    state.counter += payload;
  },
  decrement: (state, payload ) => {
    state.counter -= payload;
  }
};

const actions = {
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
};

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced
}
