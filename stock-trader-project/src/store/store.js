import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../axios-auth.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    //state: holds the mutable state of the application
    state: {
        //available funds
        funds: 10000,
        // stock: id name price
        portfolio: []
    },
    getters: {
        getFunds: (state) => {
            return state.funds;
        },
        getPortfolio: (state) => {
            return state.portfolio;
        }
    },
    mutations: {
        creditFunds: ( state, amount ) => {
            state.funds += amount;
        },
        debitFunds: ( state, amount ) => {
            state.funds -= amount;
        },
        addStockToPortfolio: ( state, stock ) => {
            state.portfolio.push( stock );
        },
        removeStockFromPortfolio: (state, stock) => {
            const index = state.portfolio.findIndex( el => el.id === stock.id );
            if ( index >= 0 ) state.portfolio.splice(index,1);
        }
    },
    // actions can run asynchronous tasks before committing a mutation,
    actions: {
        // order consists of: stockId stockPrice quantity
        buyStock: ({commit}, {stockId, stockPrice, quantity}) => {
            //TODO update database

            const debitAmount = stockPrice * quantity;
            commit('debitFunds', debitAmount);
        },
        sellStock: ( {commit}, {stockId, stockPrice, quantity} ) => {
            //TODO update database with sale details

            const creditAmount = stockPrice * quantity;
            commit('creditFunds', creditAmount);
        },
        fetchPortfolio: ({commit}, payload ) => {
            //TODO fetch portfolio from database
        }
    }

});