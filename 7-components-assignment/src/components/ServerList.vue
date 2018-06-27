<template>
    <div class="row">
        <div class="col-xs-12 col-sm-6">
            <ul class="list-group">
                <li class="list-group-item" v-for="index in serverCount">
                    Server #{{ index }}
                </li>
            </ul>
        </div>
        <div class="col-xs-12 col-sm-6">
            <server-details></server-details>
        </div>
    </div>

</template>

<script>
    import ServerDetails from './ServerDetails.vue'

    export default {
        name: "ServerList",
        data: function () {
            return {
                serverCount: 5
            }
        },
        components: {
            'server-details': ServerDetails
        }
    }
</script>

<!--by default any style set in any component will be applied globally unless you use scoped-->
<style scoped>
    div {
        border: 1px solid blue;
    }
</style>