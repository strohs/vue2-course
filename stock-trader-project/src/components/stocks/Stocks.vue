<template>

    <div class="row">
        <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
    </div>

</template>

<script>
    import Stock from './Stock.vue';

    export default {
        name: "Stocks",
        data() {
            return {
                stocks: [
                    { id: 1, name: 'BMW', price: 110 },
                    { id: 2, name: 'Apple', price: 220 },
                    { id: 3, name: 'Google', price: 125 },
                    { id: 4, name: 'Twitter', price: 70 }
                ]
            }
        },
        components: {
            appStock: Stock
        }
    }
</script>

<style scoped>

</style>