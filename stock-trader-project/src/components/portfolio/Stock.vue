<template>

    <div>
        <b-card>
            <b-card-header class="bg-primary">
                <strong>{{stock.name}}</strong> <small>(Price: {{stock.price}})</small>
            </b-card-header>
            <input type="text" :value="quantity">
            <button class="btn btn-primary" @click="sellStock">Sell</button>
        </b-card>
    </div>

</template>

<script>
    export default {
        name: "Stock",
        data() {
            return {
                stock: {
                    name: 'DefaultName',
                    price: 22.34,
                    sharesOwned: 100,
                },
                quantity: 0
            }
        },
        methods: {
            sellStock() {
                console.log('Sell Stock clicked');
            }
        }
        
    }
</script>

<style scoped>

</style>