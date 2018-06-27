import Vue from 'vue'
import App from './App.vue'

//event bus used for inter-component communication, must be declared before the main Vue() object below
export const eventBus = new Vue({
  //this is showing how to use a centralized event bus that is callable from multiple components and avoids code
  // duplication. You could also declare data: properties which would be accessible from all over your application
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited',age);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});


