<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 m-auto">
        <h1>Vue Routing</h1>
        <hr>
        <!-- using a named router view, defined in routes.js -->
        <router-view name="header-top"></router-view>
        <!-- built in view component that tells where to put the routed pages -->
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
        <router-view name="header-bottom"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header';

  export default {
    components: {
      appHeader: Header
    }
  }
</script>

<style>
  .slide-enter {
    opacity: 0;
    /* already set up as a keyframe */
    /*transform: translateY(20px);*/
  }

  .slide-enter-active {
    animation: slide-in 0.5s ease-out forwards;
    transition: opacity .5s;
  }

  .slide-leave {

  }

  .slide-leave-active {
    animation: slide-out 0.5s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
    /*position: absolute;*/
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
