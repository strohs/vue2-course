<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <h1>Filters and Mixins Assignment</h1>
        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <p>{{ text | reverse }}</p>

        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
        <p> {{ text | appendLength }}</p>

        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <p> {{ reverseAndAppendLength }}</p>

        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
        <p> {{ reverseAndAppendLength }} </p>

      </div>
    </div>
  </div>
</template>

<script>
  import {reverseMixin} from "./reverseMixin";

  export default {
    mixins: [reverseMixin],

    data() {
      return {
        text: 'hello there',
      }
    },
    filters: {
      reverse(value) {
        return value.split('').reverse().join('');
      }
    }
    // ,
    // computed: {
    //   reverseAndAppendLength() {
    //     const reversed = this.text.split('').reverse().join('');
    //     return `${reversed} (${reversed.length})`;
    //   }
    // }
  }
</script>

<style>

</style>
