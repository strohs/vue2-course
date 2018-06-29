<template xmlns:v-local-highlight="http://www.w3.org/1999/xhtml" xmlns:v-highlight="http://www.w3.org/1999/xhtml">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <h1>Built in directives</h1>
        <p v-text="'Some Text'"></p>
        <p v-html="'<strong>some strong text</strong>'"></p>
      </div>
    </div>
    <hr>
    <!-- custom directive -->
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <h1>Custom directives</h1>
        <!-- custom directive that sets the background color if :background is specified, else sets text color -->
        <!-- if the delayed modifier is present, then wait 3 seconds before performing the color change  -->
        <p v-highlight:background.delayed="'cornflowerblue'"> Color this too</p>
        <!-- passing multiple values to the directive in a javascript object -->
        <p v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay:500}"> Color this too</p>

      </div>
    </div>

  </div>
</template>

<script>
  export default {
    directives: {
      //could also use the javascript property name: localHighlight instead of 'local-highlight'
      'local-highlight': {
        bind( el,binding,vnode ) {
          var delay = 0;
          // if the delayed modifier is present, then wait 3 seconds before performing the color change
          if (binding.modifiers['delayed']) {
            delay = 3000;
          }
          if (binding.modifiers['blink']) {
            let mainColor, secondColor, currentColor, delay;
            ( {mainColor,secondColor,delay } = binding.value );
            currentColor = mainColor;
            setTimeout( () => {
              setInterval( () => {
                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                if ( binding.arg == 'background' )
                  el.style.backgroundColor = currentColor;
                else
                  el.style.color = currentColor;
              },1000);

            },delay)
          } else {
            setTimeout( () => {
              if ( binding.arg == 'background' )
                el.style.backgroundColor = binding.value;
              else
                el.style.color = binding.value;
            },delay)
          }

        }
      }
    }
  }
</script>

<style>

</style>
