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
      <p class="description">
        {{ description }}
      </p>
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

<style scoped lang="scss">
  .card {
    background-color: $c-light-violet;
    display: inline-block;
    width: 400px;
    text-align: center;
    margin: 40px;
    border: 1px solid $c-dark;
    box-shadow: 2px 2px 4px $c-blue;
  }

  .body {
    padding: 40px;
  }

  .title {
    font-weight: bold;
  }

  .title,
  .description {
    color: $c-dark;
  }
</style>
