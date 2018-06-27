<template>
    <header>
        <h1>Server Status: {{ status }}</h1>
    </header>
</template>

<script>
    export default {
        name: "ServerHeader",
        data: function () {
            return {
                status: 'Up'
            }
        }
    }
</script>

