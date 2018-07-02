<template>
  <div id="container">
    <div class="row">
      <div class="col-md-4 offset-md-4">
        <h1>Animations</h1>
        <select v-model="alertAnimation" class="form-control">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <br>
        <button class="btn btn-primary mb-4" @click="show = !show">Show Alert</button>

        <transition :name="alertAnimation">
          <!-- we are using v-model to set the animation type, based on the select control above -->
          <!-- can only animate one element within a <transition> -->
          <!-- can also use v-show  to do animations -->
          <div class="alert alert-info" v-if="show">This is an info</div>
        </transition>

        <!-- if mixing animation and transition, use 'type' to specify which one Vuejs should use -->
        <transition name="slide" type="animation">
          <!-- can only animate one element within a <transition> -->
          <!-- can also use v-show  to do animations -->
          <div class="alert alert-success" v-if="show">This is an info</div>
        </transition>

        <transition
          appear
          enter-active-class="animated bounce"
          leave-active-class="animated shake">
          <!-- we are explicitly overriding Vue's default classes and specifying our third party library -->
          <!-- can also use v-show  to do animations -->
          <!-- appear attribute causes animation to trigger when page loads -->
          <div class="alert alert-info" v-if="show">This is a animated.css info</div>
        </transition>
        <transition :name="alertAnimation" mode="out-in">
          <!-- using v-show will not work if trying to transition with multiple elements, must use v-if -->
          <!-- the 'key' attribute is used by Vue to give each element a unique key-->
          <!-- mode=out-in tells Vue to animate the old element out first, then animate the new element in -->
          <!--     mode=in-out does the opposite-->
          <div class="alert alert-info" v-if="show" key="info">This is an info</div>
          <div class="alert alert-warning" v-if="!show" key="warning">This is a warning</div>
        </transition>
        <hr>
        <!-- start of animating with javascript, Vue DOES allow you to mix CSS with Javascript -->
        <button class="btn btn-primary" @click="load = !load">Load/Remove Element</button>
        <br>
        <br>
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false">
          <!-- :css tells Vue we are not using CSS, not required to do this but could help speed up Vue -->
          <div style="width: 300px; height: 100px; background-color: lightgreen" v-if="load"></div>
        </transition>
        <hr>
        <button class="btn btn-primary mb-2"
                @click="toggleSelectedComponent">
          Toggle Components
        </button>
        <transition name="fade" mode="out-in">
          <component :is="selectedComponent"></component>
        </transition>
        <hr>
        <button class="btn btn-primary mb-2" @click="addItem">Add Item</button>
        <ul class="list-group">
          <!-- transition-group renders a new HTML tag which is (by default) <span> -->
          <!--  you can override this by setting <transition-group tag='TAG'>-->
          <transition-group name="slide">
            <li class="list-group-item"
                v-for="(number,index) in numbers"
                @click="removeItem(index)"
                style="cursor:pointer"
                :key="index"> {{number}}
            </li>
          </transition-group>
        </ul>

      </div>
    </div>

  </div>
</template>

<script>
  import DangerAlert from './DangerAlert.vue';
  import SuccessAlert from './SuccessAlert.vue';

  export default {
    data() {
      return {
        show: false,
        load: true,
        alertAnimation: 'fade',
        elementWidth: 100,
        selectedComponent: 'app-success-alert',
        numbers: [1, 2, 3, 4, 5]
      }
    },
    methods: {
      toggleSelectedComponent() {
        if (this.selectedComponent === 'app-success-alert')
          this.selectedComponent = 'app-danger-alert';
        else
          this.selectedComponent = 'app-success-alert';
      },
      beforeEnter(el) {
        console.log('beforeEnter');
        this.elementWidth = 100;
        el.style.width = this.elementWidth + 'px';
      },
      enter(el, done) {
        console.log('enter');
        let round = 1;
        const interval = setInterval(() => {
          el.style.width = (this.elementWidth + round * 10) + 'px';
          round++;
          if (round > 20) {
            clearInterval(interval);
            done();
          }
        }, 20);
        //done() tells Vue once the animation finishes, not needed if using CSS animations
      },
      afterEnter() {
        console.log('afterEnter');
      },
      enterCancelled() {
        console.log('enterEnter');
      },
      beforeLeave(el) {
        console.log('beforeLeave');
        this.elementWidth = 300;
        el.style.width = this.elementWidth + 'px';
      },
      leave(el, done) {
        console.log('leave');
        let round = 1;
        const interval = setInterval(() => {
          el.style.width = (this.elementWidth - round * 10) + 'px';
          round++;
          if (round > 20) {
            clearInterval(interval);
            done();
          }
        }, 20);
      },
      afterLeave(el) {
        console.log('afterLeave');
      },
      leaveCancelled(el) {
        console.log('leaveCancelled');
      },
      addItem() {
        const pos = Math.floor(Math.random() * this.numbers.length);
        this.numbers.splice(pos, 0, this.numbers.length + 1);
      },
      removeItem(index) {
        this.numbers.splice(index, 1);
      }
    },
    components: {
      appDangerAlert: DangerAlert,
      appSuccessAlert: SuccessAlert
    }
  }
</script>

<style scoped>
  /* only attached for one frame at the beginning */
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-leave {

  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }

  .slide-enter {
    opacity: 0;
    /* already set up as a keyframe */
    /*transform: translateY(20px);*/
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
  }

  .slide-leave {

  }

  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
    /*position: absolute;*/
  }

  /* used in transition group */
  .slide-move {
    /*transition: tramsform 1s;*/
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }
</style>
