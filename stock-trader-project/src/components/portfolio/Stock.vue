<template>

    <div class="col-md-4 col-sm-6">
        <b-card no-body class="my-4">
            <b-card-header class="bg-primary text-white">
                <strong>{{stock.name}}</strong> <small>(Price: {{stock.price}} | Quantity: {{stock.quantity}})</small>
            </b-card-header>
            <b-card-body>
                <b-form inline>
                    <label class="sr-only" for="inputQuantity">Quantity</label>
                    <b-input id="inputQuantity"
                             :class="{danger: bInsufficientQuantity}"
                             type="number"
                             placeholder="Quantity"
                             v-model="quantity"/>
                    <b-button variant="primary" @click="sellStock" :disabled="!validQuantity(quantity) || bInsufficientQuantity">Sell</b-button>
                </b-form>
                <p v-if="bInsufficientQuantity" class="text-danger">You only own {{ stock.quantity }} shares</p>
            </b-card-body>
        </b-card>
    </div>

</template>

<script>

    export default {
        name: "PortfolioStock",
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        methods: {
            validQuantity(quantity) {
                const quant = Number.parseInt( this.quantity, 10);
                return ( Number.isInteger( quant ) && ( quant > 0 ) );
            },
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.$store.dispatch('portfolio/sellStock',order);
                this.quantity = 0;
            }
        },
        computed: {
            bInsufficientQuantity() {
                return this.quantity > this.stock.quantity;
            }
        }
        
    }
</script>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>