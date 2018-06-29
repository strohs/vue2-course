<template xmlns:v-local-highlight="http://www.w3.org/1999/xhtml" xmlns:v-highlight="http://www.w3.org/1999/xhtml"
          xmlns:v-my-on="http://www.w3.org/1999/xhtml">
  <div class="container">
    <!-- custom directive -->
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <h1>Directives Assignment</h1>
        <div v-my-on:click="funcToExec('ploo')">
          <p>a sample paragraph</p>
        </div>
        <hr>
        <div>
          <button @click="loggit">Log it</button>
        </div>


      </div>
    </div>

  </div>
</template>

<script>

  export default {
    //assignment, write a custom directive that behaves like v-on
    directives: {
      'my-on': {
        bind(el, binding, vnode) {
          const eventName = binding.arg;
          const func = binding.value;

          el.addEventListener( eventName, func );
        }
      }
    },
    methods: {
      funcToExec(event) {
        console.log( event );
        console.log( arguments )
        console.log('executing function with value: ');
      },
      loggit(event) {
        console.log( event );

      }

    }
  }
</script>

<style>

</style>
