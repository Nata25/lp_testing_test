<template>
  <div class="card">
    <div class="image">
      <img
        :src="$store.state.moduleB.card.img"
        alt=""
      >
    </div>
    <div class="body">
      <div class="title">
        {{ $store.state.moduleB.card.title }}
      </div>
      {{ $store.state.moduleB.card.description }}
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
  .card {
    background-color: #e6e9ff;
    display: inline-block;
    width: 400px;
    text-align: center;
    margin: 40px;
    border: 1px solid #100432;
    box-shadow: 2px 2px 4px #3f51b5;
  }

  .body {
    padding: 40px;
  }

  .title {
    font-weight: bold;
  }
</style>
