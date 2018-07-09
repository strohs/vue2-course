<template>
  <div>
    <button class="btn btn-primary" @click="increment(100)">Increment</button>
    <button class="btn btn-primary" @click="decrement(100)">Decrement</button>
  </div>
</template>

<script>
  import {mapMutations, mapActions} from 'vuex';

  export default {
    methods: {
      ...mapActions('counter',[
        'increment',
        'decrement'
      ]),
      // NOTE mapActions generates (for us) the increment,decrement methods you see below
      // increment(by) {
      //   this.$store.dispatch('increment', by );
      // },
      // decrement(by) {
      //   this.$store.dispatch('decrement', by );
      // },
      myOtherMethod() {
        //method which does some calculation
      }
    }
  }
</script>
