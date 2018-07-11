import stockData from '../../data/stocks.js';

const state = {
    //stock.id, stock.price, stock.name
    stocks: []
};

const namespaced = true;

const getters = {
    stocks: (state) => {
        return state.stocks;
    }
};

const mutations = {
    'SET_STOCKS' (state,stocks) {
        //overwrite stocks with new set of stocks
        state.stocks = stocks;
    },
    'RND_STOCKS' (state) {
        state.stocks.forEach( stock => {
            stock.price = Math.round( stock.price * (1 + Math.random() - 0.5 ) );
        });
    }
};

const actions = {
    // order consists of: stockId stockPrice quantity
    buyStock: ({commit}, order ) => {
        //example of calling commit in another NAMESPACED module
        commit('portfolio/BUY_STOCK', order, {root:true} );
    },
    initStocks: ( {commit} ) => {
        commit('SET_STOCKS', stockData );
    },
    randomizeStocks: ({commit}) => {
        commit('RND_STOCKS');
    }

};

export default {
    state,
    namespaced,
    getters,
    mutations,
    actions
}