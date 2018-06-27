<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ switchName() }}</p>
    <p>User Age: {{ userAge }}</p>
    <button @click="resetName">Reset Name</button>
    <!-- calls the callback function from the parent -->
    <button @click="resetFn()">Reset Name callback Fn</button>
  </div>
</template>

<script>
  import {eventBus} from "../main";

  export default {
    //has to match property we are using in our template
    props: {
      myName: {
        type: String, //type could also be Boolean, Number, Array, Object...
        //required: true,
        default:'DefaultString'
      },
      //passing a callback function from the parent
      resetFn: Function,
      userAge: Number
    },
    methods: {
      switchName() {
        //we are accessing the prop 'myName' as if it were a data normal property
        return this.myName.split("").reverse().join("");
      },
      resetName() {
        //this.myName = 'Max';
        this.$emit('nameWasReset', 'MaX');
      }
    },
    created() {
      //created lifecycle hook
      //want to create a listener that listens to the event bus when this component is created
      eventBus.$on('ageWasEdited', (age) => {
          this.userAge = age;
      });
    }
  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
