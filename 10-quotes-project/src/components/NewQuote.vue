<template>
  <div class="row">
    <div class="col-sm-8 col-xs-12 col-md-6 mx-auto form-group">
      <form>
        <label for="ta-quote">Quote</label>
        <textarea class="form-control" name="ta-quote" id="ta-quote" rows="3" v-model="quote"></textarea>
        <div class="my-2">
          <!-- using click.prevent here so that form is NOT submitted to the server, this is a single page app
         and we don't want page to reload -->
          <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
        </div>

      </form>

    </div>
  </div>
</template>

<script>
  export default {
    name: "NewQuote",
    data: function () {
      return {
        quote: ''
      }
    },
    methods: {
      createNew() {
        //emit the quote (set via 2-way binding) to the parent component
        this.$emit('quote-added', this.quote );
        //clear the quote after sending it
        this.quote = '';
      }
    }
  }
</script>

<style scoped>

</style>
