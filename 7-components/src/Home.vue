<template>
  <div>
    <app-server-status v-for="server in 5"></app-server-status>
  </div>

</template>

<script>
  import ServerStatus from './ServerStatus.vue';
  export default {
    //using a Local Component here
    components: {
      'app-server-status': ServerStatus
    }
  }
</script>

<style>

</style>
