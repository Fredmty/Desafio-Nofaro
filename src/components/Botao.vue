<template>
  <main class="add-bto-main">
    <button :class="[inverter ? 'inverter-bto': 'padrao-bto', menor ? 'bto-menor-container' :'bto-padrao-container']">
      <slot/>
    </button>
  </main>
</template>

<script>
export default {
name: 'AddProfileBto',
props: {
  inverter: {
    tipo: Boolean,
    padrao: false
  },
  menor: {
    tipe: Boolean,
    padrao: false
  },
}
}
</script>

<style lang="scss" scoped> //scss biblioteca estilo css para VUE
  button {
    outline: none;
    border: none;
  }
  .default-bto {
    background-color: $primary-color;
    color:red;
    &:hover {
      cursor:pointer;
      background-color: $background;
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