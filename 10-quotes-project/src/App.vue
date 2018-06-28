<template>
    <div class="container">
      <app-header :quote-count="quotes.length" :max-quotes="maxQuotes"></app-header>
      <!-- NOTE that Vue will set the $event implicitly, so you don't have to declare it in the method -->
      <!-- recommended to always use kebab-case for event names -->
      <app-new-quote @quote-added="addNewQuote($event)"></app-new-quote>
      <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote($event)"></app-quote-grid>
      <div class="row">
        <div class="col-sm-12 text-center">
          <div class="alert alert-info">
            Info: Click on a quote to delete it!
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import QuoteGrid from './components/QuoteGrid.vue';
  import NewQuote from './components/NewQuote.vue';
  import Header from './components/Header.vue';

    export default {
      data: function () {
        return {
          maxQuotes: 10,
          quotes: [
            'The initial quote'
          ]
        }
      },
      components: {
        appQuoteGrid: QuoteGrid,
        appNewQuote: NewQuote,
        appHeader: Header
      },
      methods: {
        addNewQuote( quote ) {
          if ( this.quotes.length >= this.maxQuotes ) {
            return alert('Please delete a quote first!');
          }
          this.quotes.push( quote );
        },
        deleteQuote( index ) {
          this.quotes.splice(index, 1);
        }
      }
    }
</script>

<style>
</style>
