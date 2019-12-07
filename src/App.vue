<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">pessoas Front</a>
      </div>
    </nav>

    <div class="container">

      <form>

          <label>Nome</label>
          <input type="text" placeholder="Nome">
          <label>Email</label>
          <input type="text" placeholder="Email">

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>NOME</th>
            <th>EMAIL</th>
          </tr>

        </thead>

        <tbody>

          <tr>

            <td>Juliana</td>
            <td>juliana@email.com</td>
            <td>
              <button class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>
import pessoas from './services/pessoas'

export default{
  mounted() {
    pessoas.listar().then(resposta=>{
      console.log(resposta)
    })
  }


}
</script>

<style>

</style>
