<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change my name</button>
    <p>Name is {{ name }}</p>
    <p>Age is {{ age }}</p>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <!-- note that the case sensitive attribute name, myName, only works in these single file templates, normal
         DOMS are case insensitive -->
        <!-- v-binding the name property and then passing it to the user-detail component as myName  -->
        <!-- if you pass a reference type, (Object, Array,...) it can be mutated by the child component and the
         changes will be reflected in the parent -->
        <app-user-detail :myName="name"
                         @nameWasReset="name = $event"
                         :resetFn="resetName"
                          :userAge="age"></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :userAge="age"
                       @ageWasEdited="age = $event"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
  import UserDetail from './UserDetail.vue';
  import UserEdit from './UserEdit.vue';

  export default {
    data: function() {
      return {
        name: 'Max',
        age: 27
      };
    },
    components: {
      appUserDetail: UserDetail,
      appUserEdit: UserEdit
    },
    methods: {
      changeName() {
        this.name = 'Anna'
      },
      resetName() {
        this.name = 'Max'
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: lightblue;
  }
</style>
