<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
  import {mapGetters}  from 'vuex';

  export default {
    computed: {
      //spread operator needed here so we can add our own computed properties in addition to mapGetters
      ...mapGetters('counter',{
        counter: 'doubleCounter'
      }),
      ourOwnComputedProperty() {
        //do some computed calculation
      }
    }
  }
</script>
