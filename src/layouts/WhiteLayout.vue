<template>
  <div class="white">
    <navigation />

    <div class="padding">
      <slot />
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
  components: { Navigation },
};
</script>

<style scoped>
.white {
  color: #100432;
}

.padding {
  padding: 10px;
}
</style>
