<template>
    <section class="cont">
        <div v-if="pessoas.length">
            <template>
                <modal v-if='estado'/>
            </template>
            <ul class="lista">
                <li class="" v-for="pessoa in pessoas" :key="pessoas.id">
                    <div class="list-item">
                        <p class="name">{{ pessoas.name }}</p>
                        <p class="email">{{ pessoas.email }}</p>
                    </div>
                    <div class="list-buttons">
                        <button ><i class="far fa-edit"></i></button>
                        <button ><i class="fas fa-trash-alt"></i></button>
                    </div>
                </li>
            </ul>
        </div>
        <div class="semPessoa" v-else="">
            <h2>Nenhuma pessoa</h2>
        </div>
    </section>
</template>

<script>

import lista from '../services/peoples.js';
import pessoas from '../services/pessoas.js';
import modal from '../components/Modal1.vue';
import Bus from '../eventBus.js';

export default {
    components: {
        modal,
    },
    data() {
        return {
            pessoa:[],
            stateModal: false,
        }
    },
    mounted() {
        peopleList.lista().then(response => {
            this.pessoa = response.data;
        })
    },
    methods: {
        del(){
            
        },
        edit(){
            alert('Edição feita');
        }
    },
    created() {
        Bus.$on('fechadoOuAberto', estado => {
            this.estado = !estado;
        });
    },
}

</script>

<style scoped lang="scss">
    .cont {
        width: 60%;
        border: 2px solid #db3c51;
        height: auto;
        min-height: 100px;
        margin: 0 auto;
        border-radius: 15px;

        .lista {
            list-style-type: none;
            padding: 25px;
            margin: 0;

            li {
                padding: 0 10px;
                display: flex;
                justify-content: center;

                .list-item{
                    width: 90%;
                    display: flex;
                    

                    p{
                        width: 50%;
                        
                    }
                    p.name {
                        text-transform: capitalize;
                        padding-left: 10px;
                    }

                    p.email{
                        text-align: end;
                        padding-right: 15px;
                        color: #969393;
                    }
                }
                .list-buttons {
                    width: 10%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: wrap;

                    button {
                        border: none;
                        background: transparent;
                        outline: none;
                        cursor: pointer;
                    }
                }
                .far, .fas {
                    color:#db3c51;
                    font-size: 18px;
                } 
            }
            
            li:nth-child(odd) {
                background: #fff;
            }
            li:nth-child(even) {
                background: #ddd;
            }
        }
        .noPeople {
            color: #888;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100px;
        }
    }
    @media (max-width: 450px){
    
        .container{
            width: 100%;

            .list-item {
                flex-wrap: wrap;

                p.name {
                    margin:5px;
                    padding-left: 0px!important;
                }
            }

        }
    }
</style>