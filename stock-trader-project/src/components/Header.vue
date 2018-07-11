<template>

    <div class="col">
        <b-navbar toggleable="md" type="light" variant="light">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand to="/">Stock Trader</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item to="/portfolio" active-class>Portfolio</b-nav-item>
                    <b-nav-item to="/stocks" active-class>Stocks</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#" @click="endDay">End Day</b-nav-item>

                    <b-nav-item-dropdown text="Save & Load" right>
                        <b-dropdown-item @click="saveData">Save Data</b-dropdown-item>
                        <b-dropdown-item @click="loadData">Load Data</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item href="#">Funds: {{funds | currency }}</b-nav-item>
                </b-navbar-nav>
            </b-collapse>

        </b-navbar>
    </div>

</template>

<script>
    import axios from '../axios-auth.js';
    
    export default {
        name: "Header",
        computed: {
            funds() {
                return this.$store.getters['portfolio/funds'];
            }
        },
        methods: {
            endDay() {
                this.$store.dispatch('stocks/randomizeStocks');
            },
            saveData() {
                const data = {
                    funds: this.$store.getters['portfolio/funds'],
                    stockPortfolio: this.$store.getters['portfolio/stockPortfolio'],
                    stocks: this.$store.getters['stocks/stocks']
                };
                console.log('saving application data:', data);
                axios.put('/data.json', data)
                    .then( res => console.log(res) )
                    .catch( error => console.log(error) )
            },
            loadData() {
                this.$store.dispatch('loadData');
            }
        }
    }
</script>

<style scoped>

</style>
