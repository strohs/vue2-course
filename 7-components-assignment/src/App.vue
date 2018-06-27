<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <server-header></server-header>
            </div>
        </div>
        <hr>
        <server-list></server-list>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <server-footer></server-footer>
            </div>
        </div>
    </div>
</template>

<script>
    import ServerHeader from './components/ServerHeader'
    import ServerFooter from './components/ServerFooter'
    import ServerList from './components/ServerList'

    export default {
        components: {
            'server-header': ServerHeader,
            'server-footer': ServerFooter,
            'server-list': ServerList
        }
    }
</script>

<style>

</style>
