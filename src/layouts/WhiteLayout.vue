<template>
  <div class="white">
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
.white {
  color: $c-dark;
}

.padding {
  padding: 10px;
}
</style>
