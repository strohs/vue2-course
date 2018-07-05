<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 m-auto">
        <h1 class="text-center">HTTP</h1>
        <div class="form-group">
          <label for="text-username">Username</label>
          <input id="text-username" type="text" class="form-control" v-model="user.username">
        </div>
        <div class="form-group">
          <label for="text-mail">e-mail</label>
          <input id="text-mail" type="text" class="form-control" v-model="user.email">
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr>
        <button class="btn btn-primary" @click="fetchData">Get Data</button>
        <ul class="list-group my-2">
          <li class="list-group-item" v-for="u in users"> {{ u.username }} {{ u.email }}</li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        email: ''
      },
      users: [],
    }
  },
  methods: {
    submit() {
      //the default URL we are using is set in the main.js file
      this.$http.post('', this.user).
      then( response => {
        console.log( response );
      }, error => {
        console.log( error );
      });
    },
    fetchData() {
      this.$http.get('')
        .then( response => {
          return response.json();

        })
        .then( data => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push( data[key] );
          }
          this.users = resultArray;
        });
    }
  }
}
</script>

<style>

</style>
