<template>
  <white-layout class="root">
    <transition name="fade">
      <router-view />
    </transition>
  </white-layout>
</template>

<script>
import WhiteLayout from '@/layouts/WhiteLayout.vue';

export default {
  components: { WhiteLayout },
};
</script>

<style lang="scss">
  body, html {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  .root {
    min-height: 100vh;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>
