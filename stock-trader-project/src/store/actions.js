import axios from '../axios-auth.js';

export const loadData = ({commit}) => {
    axios.get('/data.json')
        .then(res => {
            const data = res.data;
            if (data) {
                console.log(data.funds);
                commit('portfolio/SET_FUNDS', data.funds);
                console.log(data.stockPortfolio);
                commit('portfolio/SET_STOCK_PORTFOLIO', data.stockPortfolio);
                console.log(data.stocks);
                commit('stocks/SET_STOCKS', data.stocks);
            }
        })
        .catch(error => console.log(error));
};