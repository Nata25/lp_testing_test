<template>
  <div class="wrapper">
    <router-link
      v-for="l in links"
      :key="l.to"
      class="link"
      :to="l.to"
      exact
    >
      {{ l.name }}
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          to: '/',
          name: 'Home',
        },
        {
          to: '/moduleA',
          name: 'moduleA',
        },
        {
          to: '/moduleB',
          name: 'moduleB',
        },
        {
          to: '/moduleC',
          name: 'moduleC',
        },
        {
          to: '/moduleD',
          name: 'moduleD',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  background-color: $c-blue;
  padding: 20px;
  box-shadow: 0 2px 4px $c-blue;
  border-bottom: 1px solid $c-dark;
}

.link {
  color: white;
  text-decoration: none;
  opacity: .7;
  transition: opacity .3s;
  margin: 0 5px;

  &:hover, &.router-link-active {
    opacity: 1;
  }
}
</style>
