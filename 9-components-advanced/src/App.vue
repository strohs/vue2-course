<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <!-- buttons to dynamically change components -->
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr>
        <p> {{ selectedComponent }}</p>
        <!-- dynamically bind a component using the component name stored in data.selectedComponent -->
        <!-- by default, dynamic components are re-instantiated each time you switch between them, keep-alive
         is a reserved Vue element that keeps components from being re-instantiated-->
        <keep-alive>
          <component :is="selectedComponent">
            <p>default content</p>
          </component>
        </keep-alive>

        <!--<app-quote>-->
        <!--&lt;!&ndash; any interpolations or other vue bindings will be applied before the template is sent to the child &ndash;&gt;-->
        <!--&lt;!&ndash; using named slots so child component can specify where html content should be placed &ndash;&gt;-->
        <!--<h2 slot="title">{{ quoteTitle }}</h2>-->
        <!--<p>A Wonderful Quote</p>-->
        <!--</app-quote>-->
      </div>
    </div>
  </div>
</template>

<script>
  import Quote from './components/Quote';
  import Author from './components/Author';
  import New from './components/New';

  export default {
    data() {
      return {
        quoteTitle: 'The Quote...',
        selectedComponent: 'appQuote'
      }
    },
    components: {
      appQuote: Quote,
      appAuthor: Author,
      appNew: New
    }
  }
</script>

<style scoped>

  h3 {
    color: green;
  }
</style>
