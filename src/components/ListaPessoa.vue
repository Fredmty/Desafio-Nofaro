<template>
  <main>
    <ul class="lista-pessoa">
      <li v-for="(pessoa, index) in people" :key="index" @click="viewProfile(person.id)">
        <div :class="[index % 2 == 0 ? 'par' : 'impar', 'lista-pessa-item']">
          <div>{{pessoa.name}}</div>
          <div class="pessoa-email">{{pessoa.email}}</div>
          <div class="actions" @click.stop>
            <router-link :to="`edit/${pessoa.id}`" class="icon-container">
              <v-icon name="edit" scale="1" />
            </router-link>
            <div class="icon-container" @click="deletePerson(person.id)">
              <v-icon name="regular/trash-alt" scale="1"/>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  props: ['pessoa'],
  data:(() => {
    return {
      
    }
  }),
  methods: {
    vProfile(id) {
      this.$emit("onViewProfile", id)
    },
    delPerson(id) {
      this.$emit('onDeletePerson', id)
    },
    edPerson(id) {
      this.$emit('onEditPerson', id)
    }
  }
}
</script>

<style lang="scss" scoped>
.par {
  background-color:darkgray;
}
.impar {
  background-color: darkgray;
}
.lista-pessoa {
.people-list-item {
  padding: .25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  .pessoa-email {
    margin-left: auto;
    max-width: 180px;
    word-break: break-all;
    margin-right: 2rem;
    text-transform: lowercase;
    color: #9a9a9a;
  }
}
}
  @media (max-width: 400px) {
    .lista-pessoa {
      .lista-pessoa-item {
        padding: .25rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
        &:hover {
          cursor: pointer;
        }
        .pessoa-email {
          margin: 0;
          word-break: break-all;
          text-transform: lowercase;
          color: #9a9a9a;
        }
      }
    }
  }
</style>