<template>
  <!-- This is a custom form control -->
  <div>
    <div id="on" @click="switched(true)" :class="{active: value}">On</div>
    <div id="off" @click="switched(false)" :class="{active: !value}">Off</div>
  </div>
</template>

<script>
    export default {
        name: "Switch",
      //props has to be 'value' when creating a custom control that you want to use with v-model
      props: ['value'],
      methods: {
          switched(isOn) {
            //emit name has to be 'input' when using a custom control that you want to use with v-model
            this.$emit('input', isOn)
          }
      }
    }
</script>

<style scoped>
  #on, #off {
    width: 40px;
    height: 20px;
    background-color: lightgray;
    padding: 2px;
    display: inline-block;
    margin: 10px -2px;
    box-sizing: content-box;
    cursor: pointer;
    text-align: center;
  }

  #on:hover, #on.active {
    background-color: lightgreen;
  }
  #off:hover, #off.active {
    background-color: lightcoral;
  }
</style>
