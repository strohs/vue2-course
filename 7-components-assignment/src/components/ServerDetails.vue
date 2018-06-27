<template>
    <div>
        <p>Server Details: {{ name }} {{ cpu }} {{ ram }}</p>
    </div>
</template>

<script>
    export default {
        name: "ServerDetails",
        data: function () {
            return {
                name: 'Datamine server',
                cpu: '8 Core Intel',
                ram: '96 GB'
            }
        }
    }
</script>

<style scoped>
    div {
        border: 1px solid red;
    }
</style>