<template>
  <article class="card">
    <div class="image">
      <img
        :src="img"
        alt="title"
      >
    </div>
    <div class="body">
      <h3 class="title">
        {{ title }}
      </h3>
      <p>{{ description }}</p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
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
