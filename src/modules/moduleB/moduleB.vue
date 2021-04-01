<template>
  <div>
    <h1>Module B</h1>
    <Card v-bind="card" />
  </div>
</template>

<script>
import Card from './components/Card.vue';

export default {
  components: {
    Card,
  },
  computed: {
    card() {
      return this.$store.state.moduleB.card;
    },
  },
};
</script>
