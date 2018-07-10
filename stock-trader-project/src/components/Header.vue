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
                    <b-nav-item href="#">End Day</b-nav-item>

                    <b-nav-item-dropdown text="Save & Load" right>
                        <b-dropdown-item href="#">Save Data</b-dropdown-item>
                        <b-dropdown-item href="#">Load Data</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item href="#">Funds ${{funds}}</b-nav-item>
                </b-navbar-nav>
            </b-collapse>

        </b-navbar>
    </div>

</template>

<script>

    export default {
        name: "Header",
        data() {
            return {
                //TODO convert to Vuex state
                funds: 9999.99
            }
        }
    }
</script>

<style scoped>

</style>
