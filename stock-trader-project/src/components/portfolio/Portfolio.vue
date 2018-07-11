<template>

    <div class="row">
        <app-stock v-for="stock in portfolio" :key="stock.id" :stock="stock"></app-stock>
    </div>

</template>

<script>
    import Stock from './Stock.vue';

    export default {
        name: "Portfolio",
        components: {
            appStock: Stock
        },
        computed: {
            portfolio() {
                return this.$store.getters['portfolio/stockPortfolio'];
            }
        }
    }
</script>

<style scoped>

</style>