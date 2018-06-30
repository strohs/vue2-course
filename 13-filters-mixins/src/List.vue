<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <h1>Filters and Mixins</h1>

        <input v-model="filterText" type="text">
        <ul>
          <!-- example of calling a function in v-for to filter that containing the chars entered in the input above -->
          <li v-for="fruit in filteredFruits"> {{ fruit }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {fruitMixin} from "./fruitMixin";

  export default {
    //import your mixins and add them in an array to the mixins property
    mixins: [fruitMixin],
    created() {
      console.log('inside List created hook')
    }
  }
</script>

<style>

</style>
