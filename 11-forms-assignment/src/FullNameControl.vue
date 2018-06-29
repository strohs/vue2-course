<template>
  <div class="form-group">
    <label for="firstname">First Name</label>
    <input
      type="text"
      id="firstname"
      class="form-control"
      @input="emitFullName"
      v-model="name.first">

    <label for="lastname">Last Name</label>
    <input
      type="text"
      id="lastname"
      class="form-control"
      @input="emitFullName"
      v-model="name.last">
  </div>
</template>

<script>
  export default {
    name: "FullNameControl",
    props: ['value'],
    data() {
      return {
        name: {
          first: '',
          last: ''
        }
      }
    },
    methods: {
      emitFullName() {
        const fullName = this.name.first + " " + this.name.last;
        this.$emit('input', fullName );
      }
    }
  }
</script>

<style scoped>

</style>
