<template>
  <div class="dark">
    <Navigation />

    <section class="padding">
      <slot />
    </section>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
  components: { Navigation },
};
</script>

<style scoped lang="scss">
.dark {
  color: $c-white;
  background-color: $c-dark;
}

.padding {
  padding: 10px;
}
</style>
