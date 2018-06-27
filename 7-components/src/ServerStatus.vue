<template>
  <!--wrap all template code inside ONE ROOT ELEMENT-->
  <div>
    <p>Server Status: {{ status }}</p>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
  export default {
    name: 'ServerStatus',
    data: function () {
      return {
        status: 'Critical'
      }
    },
    methods: {
      changeStatus() {
        this.status = 'Normal'
      }
    }
  }
</script>

<style>

</style>
