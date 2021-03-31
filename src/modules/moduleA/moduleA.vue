<template>
  <div>
    <h1>Module A</h1>
    List:
    <ul>
      <li
        v-for="item in $store.state.moduleA.list"
        :key="item.id"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('getData');
  },
};
</script>
