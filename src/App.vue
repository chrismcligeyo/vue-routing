<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Routing</h1>
        <hr>

<!--        <app-header></app-header>-->

  <router-view name="header-top"></router-view><!--replaces app-header. used when you set components in path in routes.js-->
       <transition name="slide" mode="out-in">
         <router-view></router-view><!--this is component shipped in with VueRouter. Tells vue to load components associated with router. this is after registering routes in main. will load homepage-->
       </transition>

       <router-view name="header-bottom"></router-view><!--places Header section at bottom of user page-->
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  export default {
    components: {
      appHeader: Header
    }
  }
</script>

<style>
  .slide-leave-active {
    transition: opacity 1s ease;
    opacity: 0;
    animation: slide-out 1s ease-out forwards;
  }

  .slide-leave {
    opacity: 1;
    transform: translateX(0);
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
  }

  @keyframes slide-out {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-30px);
    }
  }

  @keyframes slide-in {
    0% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
