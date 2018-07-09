<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 m-auto">
        <h1>Vuex</h1>
        <app-result></app-result>
        <app-another-result></app-another-result>
        <hr>
        <app-counter></app-counter>
        <app-another-counter></app-another-counter>
        <hr>
        <input type="text" v-model="value">
        <p>value: {{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Counter from './components/Counter.vue';
  import AnotherCounter from './components/AnotherCounter.vue';
  import Result from './components/Result.vue';
  import AnotherResult from './components/AnotherResult.vue';

  export default {
    components: {
      appCounter: Counter,
      appAnotherCounter: AnotherCounter,
      appResult: Result,
      appAnotherResult: AnotherResult
    },
    computed: {
      value: {
        //using getters and setters to 2-way bind a value stored in Vuex state
        get() {
          return this.$store.getters.value;
        },
        //setters are rarely used to set state directly, but there could be cases when you need to do so
        set(value) {
          this.$store.dispatch('updateValue', value );
        }
      }
    },
    methods: {
      updateValue(event) {
        this.$store.dispatch('updateValue', event.target.value );
      }
    }
  }
</script>

