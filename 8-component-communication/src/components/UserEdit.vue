<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
      <p>User Age {{ userAge }}</p>
      <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
  import {eventBus} from '../main';

  export default {
    props: ['userAge'],
    methods: {
      editAge() {
        this.userAge = 30;
        //OPTION1: use $emit to notify a sibling component of a change, you have to notify the parent
        // component 'User' which has to notify the sibling component
        //this.$emit('ageWasEdited', this.userAge );

        // OPTION2: pass in a callback function as a property to this component, then call the function to trigger
        // the parent to change the name and notify siblings
        // OPTION3: use an event bus to do direct sibling to sibling communication
        //eventBus.$emit('ageWasEdited', this.userAge);
        eventBus.changeAge( this.userAge );
        // OPTION4: use VueX for state management - preferred for really large projects

      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
