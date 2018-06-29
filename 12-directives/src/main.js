import Vue from 'vue'
import App from './App.vue'

//create a custom GLOBAL directive named highlight, accessed via v-highlight
Vue.directive('highlight', {
  //use directive hooks: bind, inserted, update, componentUpdated,unbind

  bind( el, binding, vnode ) {
    //el.style.backgroundColor = 'green';
    // el.style.backgroundColor = binding.value;

    var delay = 0;
    // if the delayed modifier is present, then wait 3 seconds before performing the color change
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }
    setTimeout( () => {
      if ( binding.arg == 'background' )
        el.style.backgroundColor = binding.value;
      else
        el.style.color = binding.value;
    },delay)

  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
