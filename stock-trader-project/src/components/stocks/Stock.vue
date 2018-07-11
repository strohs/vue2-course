<template>
        
        <div class="col-md-4 col-sm-6">
            <b-card no-body class="my-4">
                <b-card-header class="bg-success text-white">
                    <strong>{{stock.name}}</strong>
                    <small>(Price: {{stock.price}})</small>
                </b-card-header>
                <b-card-body>
                    <b-form inline>
                        <label class="sr-only" for="inputQuantity">Quantity</label>
                        <b-input id="inputQuantity"
                                 :class="{danger: bInsufficientFunds}"
                                 type="number"
                                 placeholder="Quantity"
                                 v-model="quantity"/>
                        <b-button variant="success" @click="buyStock" :disabled="!validQuantity(quantity) || bInsufficientFunds">Buy</b-button>
                    </b-form>
                    <p v-if="bInsufficientFunds" class="text-danger">Insufficient Funds</p>
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
            bFundsAvailable() {
                const orderTotal = this.stock.price * this.quantity;
                return orderTotal <= this.$store.getters['portfolio/funds'];
            },

            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: Number.parseInt( this.quantity, 10)
                };
                this.$store.dispatch('stocks/buyStock', order);
                this.quantity = 0; //reset quantity to 0
            }
        },
        computed: {
            bInsufficientFunds() {
                return this.quantity * this.stock.price > this.$store.getters['portfolio/funds'];
            }
        }

    }
</script>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>