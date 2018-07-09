<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of clicks: {{ stringCounter }}</p>
  </div>

</template>

<script>
  import {mapGetters}  from 'vuex';

  export default {
    computed: {
      //spread operator needed here so we can add our own computed properties in addition to mapGetters
      ...mapGetters('counter',{
        doubleCounter: 'doubleCounter',
        stringCounter: 'stringCounter'
      }),
      ourOwnComputedProperty() {
        //do some computed calculation
      }
    }
  }
</script>

