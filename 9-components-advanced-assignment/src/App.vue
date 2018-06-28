<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br>
        <button class="btn btn-primary" @click="selectComponent('Blue')">Load Blue Template</button>
        <button class="btn btn-success" @click="selectComponent('Green')">Load Green Template</button>
        <button class="btn btn-danger" @click="selectComponent('Red')">Load Red Template</button>
        <hr>
              <component :is="selectedComponent">
                <h2>You selected {{ selectedName }}</h2>
              </component>
        <!--<app-blue></app-blue>-->
        <!--<app-green></app-green>-->
        <!--<app-red></app-red>-->
      </div>
    </div>
  </div>
</template>

<script>
  import Blue from './components/Blue.vue';
  import Green from './components/Green.vue';
  import Red from './components/Red.vue';

  export default {
    data: function () {
      return {
        selectedComponent: '',
        selectedName: ''
      }
    },
    components: {
      appBlue: Blue,
      appGreen: Green,
      appRed: Red
    },
    methods: {
      selectComponent( name ) {
        this.selectedName = name;
        this.selectedComponent = 'app' + name;
      }
    }
  }
</script>

<style>
</style>
