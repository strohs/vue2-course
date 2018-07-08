<template>
  <ul class="nav nav-pills">
    <li role="presentation" class="nav-item">
      <router-link to="/" class="nav-link" active-class="active" exact="">Home</router-link>
    </li>
    <li role="presentation" class="nav-item">
      <!-- passing the parameter 10 to the user component, which was also configured in routes.js -->
      <router-link to="/user" class="nav-link" active-class="active">User</router-link>
    </li>

  </ul>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
