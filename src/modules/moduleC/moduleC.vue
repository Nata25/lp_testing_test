<template>
  <div>
    <h1>Module C</h1>
    <Card v-bind="card" />
  </div>
</template>

<script>
import Card from '@/modules/moduleB/components/Card.vue';

export default {
  components: {
    Card,
  },
  data() {
    return {
      card: {
        title: 'module C card name',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: 'https://picsum.photos/400/200',
      },
    };
  },
};
</script>
