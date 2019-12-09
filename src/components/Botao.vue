<template>
  <main class="add-bto-main">
    <button :class="[inverted ? 'inverted-bto': 'default-bto', small ? 'bto-small-container' :'bto-default-container']">
      <slot/>
    </button>
  </main>
</template>

<script>
export default {
name: 'AddProfileBto',
props: {
  inverted: {
    type: Boolean,
    default: false
  },
  small: {
    type: Boolean,
    default: false
  },
}
}
</script>

<style lang="scss" scoped>
  button {
    outline: none;
    border: none;
  }
  .default-bto {
    background-color: $primary-color;
    color:red;
    &:hover {
      cursor: pointer;
      background-color: $primary-hover-color;
    }
  }
  .inverted-bto {
    background-color: rgb(92, 40, 40);
    color: $primary-color;
    &:hover {
      cursor: pointer;
      background-color:violet;
    }
  }
  .bto-default-container {
    border-radius: 1rem;
    padding: .4rem 1rem;
  }
  .bto-small-container {
    border-radius: 1rem;
    padding: .2rem 1.5rem;
  }
</style>