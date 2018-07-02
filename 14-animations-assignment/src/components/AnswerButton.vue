<template>
  <div class="btn btn-primary mb-4" @click="sendAnswer">{{ value }}</div>
</template>

<script>
  export default {
    name: "AnswerButton",
    props: {
      value: Number
    },
    methods: {
      sendAnswer() {
        this.$emit('answerSent', this.value);
      }
    }
  }
</script>

<style scoped>

</style>
