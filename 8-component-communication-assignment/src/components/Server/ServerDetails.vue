<template>
    <div class="col-xs-12 col-sm-6">
      <p v-if="!server">Please select a server</p>
      <p v-else>Server Details for id: {{ server.id }} status:{{ server.status }}</p>
      <hr>
      <button @click="resetStatus">Reset Status</button>
    </div>

</template>

<script>
  import {eventBus} from "../../main";

  export default {
    data: function() {
      return {
        server: null
      }
    },
    created() {
      //created lifecycle hook
      //want to create a listener that listens to the event bus when this component is created
      eventBus.$on('serverClicked', (server) => {
        this.server = server;
      });
    },
    methods: {
      resetStatus() {
        this.server.status = 'Normal';
      }
    }
  }
</script>

<style>

</style>
