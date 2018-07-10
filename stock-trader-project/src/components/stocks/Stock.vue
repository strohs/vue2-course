<template>

    <div class="col-md-4 col-sm-6">
        <b-card no-body class="my-4">
            <b-card-header class="bg-success text-white">
                <strong>{{stock.name}}</strong> <small>(Price: {{stock.price}})</small>
            </b-card-header>
            <b-card-body>
                <b-form inline>
                    <label class="sr-only" for="inputQuantity">Quantity</label>
                    <b-input id="inputQuantity"
                             class="mr-sm-0"
                             type="number"
                             placeholder="Quantity"
                             v-model="quantity"/>
                    <b-button variant="success" @click="buyStock" :disabled="!validQuantity(quantity)">Buy</b-button>
                </b-form>
            </b-card-body>
        </b-card>
    </div>



</template>

<script>
    export default {
        name: "Stock",
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        methods: {
            validQuantity(quantity) {
                const quant = Number.parseInt( this.quantity, 10);
                return ( Number.isInteger( quant ) && (quant > 0) );
                },

            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: Number.parseInt( this.quantity, 10)
                };
                console.log('Buy Stock clicked: ', order);
                //TODO mutate with Vuex
            }
        }

    }
</script>

<style scoped>

</style>