<template>

    <div>
        <b-card no-body class="my-4">
            <b-card-header><h1>Trade or View your Portfolio</h1></b-card-header>
            <b-card-body>
                <h5>You may Save & Load your data</h5>
                <h5>Click on 'End Day' to begin a new Day!</h5>
            </b-card-body>
            <b-card-footer style="font-weight: bold">Your Funds: {{funds | currency }}</b-card-footer>
        </b-card>
    </div>
    
</template>

<script>
    export default {
        name: "Home",
        computed: {
            funds() {
                return this.$store.getters['portfolio/funds'];
            }
        }
    }
</script>

<style scoped>

</style>