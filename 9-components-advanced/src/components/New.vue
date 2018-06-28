<template>
  <div>
    <h3>New Quote</h3>
    <button @click="counter++">Increase!</button>
    <p>current count:{{ counter }}</p>
  </div>
</template>

<script>
    export default {
      data: function() {
        return {
          counter: 0
        }
      },
      destroyed() {
        console.log( 'destroyed');
      },
      deactivated() {
        //called when a keep-alive component is deactivated
        console.log( ' deactivated');
      },
      activated() {
        //called when a keep-alive component is activated
        console.log( ' activated');
      }
    }
</script>

<style scoped>

</style>
