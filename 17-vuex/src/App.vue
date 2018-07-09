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
    }
  }
</script>

