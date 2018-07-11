
const state = {
    funds: 10000,   //available funds
    stocks: [],     //stocks in your portfolio: {id, quantity}
};

const namespaced = true;

const getters = {
    funds: (state) => {
        return state.funds;
    },
    stockPortfolio: (state, getters, rootState, rootGetters) => {
        //getters parameter is used to access getters on our datastore
        return state.stocks.map( stock => {
            const record = rootGetters['stocks/stocks'].find( el => el.id === stock.id );
            return {
                id: stock.id,
                quantity: stock.quantity,
                price: record.price,
                name: record.name
            }
        })
    }
};

const mutations = {
    'BUY_STOCK'(state, {stockId, stockPrice, quantity}) {
        //does stock already exist in our portfolio?
        const record = state.stocks.find(el => el.id === stockId);
        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({id: stockId, quantity: quantity});
        }
        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCK'(state, {stockId, stockPrice, quantity}) {
        //does stock already exist in our portfolio?
        const record = state.stocks.find(el => el.id === stockId);
        //check if we have enough quantity to sell
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            //else we are selling all shares so remove from portfolio
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockPrice * quantity;
    },
    'SET_FUNDS'( state, fundAmount ) {
        state.funds = fundAmount;
    },
    'SET_STOCK_PORTFOLIO'( state, stockPortfolio ) {
        const stocks = stockPortfolio.map( stock => {
            return {
                id: stock.id,
                quantity: stock.quantity,
            }
        });
        state.stocks = stocks;
    }

};

const actions = {
    sellStock: ({commit}, order ) => {
        commit('SELL_STOCK', order);
    }
};

export default {
    namespaced,
    state,
    getters,
    mutations,
    actions
}