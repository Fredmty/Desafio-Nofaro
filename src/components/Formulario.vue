<template>
  <main>
    <div class="formu-container">
      <div class="mb-1">
        <div style="text-align: right"><label :for="`nome-${_uid}`">Nome:</label></div>
        <input v-model="formu.name" type="text" :id="`nome-${_uid}`">
      </div>
      <div class="mb-1">
        <div style="text-align: right"><label :for="`email-${_uid}`">E-mail</label></div>
        <input v-model="formu.email" type="text" :id="`email-${_uid}`">
      </div>
      <div class="formu-action">
        <custom-btn big @click.native="$emit('onSaveForm', formu)">Salvar</custom-btn>
      </div>
    </div>
  </main>
</template>

<script>
import Botao from "@/components/Botao"

export default {
  nome: 'EditaFormu',
  components: {
    Botao
  },
  props: ['pessoa'],
  data:(() => {
    return {
      formu: {
        nome: null,
        email: null
      }
    }
  }),
  watch: {
    pessoa: function() {
      this.formu.name = this.pessoa.name
      this.formu.email = this.pessoa.email
    }
  }
}
</script>

<style lang="scss" scoped>
.formu-container {
  margin-top: 1.5rem;
  text-align: left;
  color: $primary-color;
  
  input {
    border-radius: 2rem;
    outline: none;
    border: 1px solid $primary-color;
    padding: 4px;
    color: $primary-color;
    
  }
  .formu-action {
    display: flex;
    justify-content: center;
    text-align: center;
  }
}
@media (max-width: 270px) {
  .formu-container {
    display: flex;
    justify-content: right ;
    align-items: left ;
    flex-direction: column;
    input {
      max-width: 40px;
    }
  }
}
</style>