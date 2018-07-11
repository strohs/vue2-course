import Vue from 'vue';
import Vuex from 'vuex';

import stocks from './modules/stocks.js';
import portfolio from './modules/portfolio.js';
//this will import all exports from actions.js as an object named 'actions'
import * as actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    actions,    //aka  actions: actions
    modules: {
        stocks,
        portfolio,
        actions
    }

});