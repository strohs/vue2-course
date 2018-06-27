<template>
    <footer>
        <p>All Servers are managed here ( {{ serverCount }} )</p>
    </footer>
</template>

<script>
    export default {
        name: "ServerFooter",
        data: function () {
            return {
                serverCount: 5
            }
        }
    }
</script>

