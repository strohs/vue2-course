<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <h1>Filters and Mixins</h1>
        <!-- use pipe syntax to call the filter -->
        <p>{{ text | toUppercase | capitalize }}</p>
        <hr>
        <input v-model="filterText" type="text">
        <ul>
          <!-- example of calling a function in v-for to filter that containing the chars entered in the input above -->
          <li v-for="fruit in filteredFruits"> {{ fruit }}</li>
        </ul>
        <hr>
      </div>
    </div>
    <div class="row">
      <app-list></app-list>
    </div>

  </div>
</template>

<script>
  import List from './List.vue';
  import {fruitMixin} from "./fruitMixin";

  export default {
    mixins: [fruitMixin],

    data() {
      return {
        text: 'hello there',
      }
    },
    filters: {
      //locally registered filter, can also be declared in string format   'to-uppercase'() {  }
      toUppercase(value) {
        return value.toUpperCase();
      }
    },
    components: {
      appList: List
    }
  }
</script>

<style>

</style>
