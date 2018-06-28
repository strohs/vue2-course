<template>
    <div>
      <!-- slot is used to pass in content from outside this component, in this case it will
       will be replaced with the content in between the app-quote element from the parent -->

      <div class="title">
        <!-- using name slots below to explicitly specify where parent content should be placed -->
        <slot name="title"></slot>
        <!-- specifying a slot with default content in case it's not sent by parent component -->
        <span style="color: #ccc"><slot name="subtitle">The default subtitle</slot></span>
      </div>
      <hr>
      <div>
        <!-- an unnamed slot will be treated as the default slot -->
        <slot></slot>
      </div>

    </div>
</template>

<script>
    export default {
        name: "Quote"
    }
</script>

<style scoped>
  /* styling can be set by the parent component and passed into the child, the child can also override  */
  /* any styling here */
  div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
  }

  h2 {
    color: red;
  }

  .title {
    font-style: italic;
  }
</style>
