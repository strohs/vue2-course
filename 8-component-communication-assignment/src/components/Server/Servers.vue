<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="server in servers" :key="server.id">
        Server #{{ server.id }} <button @click="serverDetails(server)">Details</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import {eventBus} from '../../main.js';

  export default {
    data: function () {
      return {
        servers: [
          {id: 1, status: 'Normal'},
          {id: 2, status: 'Critical'},
          {id: 3, status: 'Starting'},
          {id: 4, status: 'Shutting Down'}
        ]
      }
    },
    methods: {
      serverDetails( server ) {
        //console.log( server.id + "::" + server.status );
        eventBus.showServerDetails( server );
      }
    }
  }
</script>

<style>

</style>
