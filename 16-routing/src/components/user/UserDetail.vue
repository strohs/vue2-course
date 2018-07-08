<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded has id: {{ $route.params.id }}</p>
    <router-link class="btn btn-primary"
                 tag="button"
                 :to="link"
    >Edit User</router-link>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        link: {
          name: 'userEdit',
          params: {
            id: this.$route.params.id
          },
          query: {
            locale: 'en',
            q: 100
          },
          hash: '#data'
        }
      }
    },
    beforeRouteEnter(to, from, next) {
      //this Guard is like a lifecycle hook. You won't have access to this components data (like this.link)
      // if you must check this component's data, you will need to pass a reference to this component as a parameter
      // in a callback function to next i.e. next( vm => {vm.link} )

      if (true) {
        console.log('userDetail beforeRouteEnter');
        //could check if user is authenticated
        next();
      } else {
        next(false);
      }
    }
  }
</script>
