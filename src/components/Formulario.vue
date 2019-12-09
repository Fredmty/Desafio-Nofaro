<template>
  <main>
    <div class="formu-container">
      <div class="mb-1">
        <div style="text-align: right"><label :for="`name-${_uid}`">Nome:</label></div>
        <input v-model="formData.name" type="text" :id="`name-${_uid}`">
      </div>
      <div class="mb-1">
        <div style="text-align: right"><label :for="`email-${_uid}`">E-mail</label></div>
        <input v-model="formData.email" type="text" :id="`email-${_uid}`">
      </div>
      <div class="form-action">
        <custom-btn small @click.native="$emit('onSaveForm', formData)">Salvar</custom-btn>
      </div>
    </div>
  </main>
</template>

<script>
import Botao from "@/components/Botao"

export default {
  nome: 'CustomFormu',
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
    person: function() {
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
  color: $secondary-color;
  
  input {
    border-radius: 2rem;
    outline: none;
    border: 1px solid $secondary-color;
    padding: 4px;
    color: $secondary-color;
    
  }
  .formu-action {
    display: flex;
    justify-content: center;
    text-align: center;
  }
}
@media (max-width: 450px) {
  .formu-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    input {
      max-width: 80px;
    }
  }
}
</style>