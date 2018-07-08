<template>
  <div>
    <h1>The User Page</h1>
    <hr>
    <!--<p>Loaded id: {{ id }}</p>-->
    <!--<p>query parameter foo is: {{ foo }}</p>-->
    <button @click="navigateToHome" class="btn btn-primary">Go To Home</button>
    <hr>
    <router-view></router-view>
  </div>


</template>

<script>
  // SEE ALSO https://router.vuejs.org/guide/essentials/passing-props.html
  // this is newer way to pass in $route(s) to a component using props:, thereby decoupling a component from $route
  export default {
    // data() {
    //   return {
    //     //accessing a passed in parameter on the URL path
    //     id: this.$route.params.id,
    //     //accessing a query parameter named foo
    //     foo: this.$route.query.foo
    //   }
    // },
    // watch: {
    //   //if storing the id in data parameter, you have to watch for changes on the $route so that the id parameter
    //   // is updated whenever it changes on the URL. See also beforeRouteUpdate
    //   '$route'(to, from) {
    //     this.id = to.params.id;
    //   }
    // },
    methods: {
      navigateToHome() {
        //push the path onto the router, so that 'back' buttons work in the browser, can also push a Object with
        // a path parameter  {path: '/'} or a name: parameter
        //this.$router.push('/');
        this.$router.push( { name: 'home' } );
      }
    }
  }
</script>
