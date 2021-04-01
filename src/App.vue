<template>
  <component
    :is="layout"
    class="root"
  >
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
  </component>
</template>

<script>
import WhiteLayout from '@/layouts/WhiteLayout.vue';
import DarkLayout from '@/layouts/DarkLayout.vue';

export default {
  components: { WhiteLayout, DarkLayout },
  computed: {
    layout() {
      return `${this.$route.meta.layout || 'White'}Layout`;
    },
  },
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
