<template>
  <main class="container">
    <section class="Informacoes">
      <div class="Titulo" v-if="Volta">
         <router-link to="/ListaPessoa">
          <v-icon name="arrow-left" class="mr-1" scale="1.3"/>
          {{pageTitle}}
         </router-link>
      </div>
      <div class="Titulo" v-else>
          {{pageTitle}}
      </div>
      <router-link to="/criar-pessoa">
        <custom-btn>+ Adicionar Perfil</custom-btn>
      </router-link>
    </section>
    <section class="box">
      <slot/>
    </section>
  </main>
</template>

<script>
import Botao from "@/components/Botao"
export default {
  name: "Main",
  props: {
    Titulo: {
      type:String,
      required: true
    },
    Volta: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Botao
  },
}
</script>

<style lang="scss" scoped>
  .container {
    width: 40%;
    margin: 0 auto;
    margin-bottom: 3rem;
    .informative-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      .page-title {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        color: $primary-color;
       
      }
      @media (max-width: 778px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
    }
    .caixa {
      border-radius: 1rem;
      padding: 1.5rem;
      border: 1px solid $primary-color;
      height: 500px;
      overflow-y: auto;
    }
  }
</style>