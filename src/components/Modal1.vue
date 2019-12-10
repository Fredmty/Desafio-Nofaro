<template>
    <section class="backdrop">
        <div class="corpoMod">
            <div class="modalText">
                <p>Excluir esse perfil?</p>
            </div>
            <div class="Bto">
                <button>Sim!!</button>
                <button @click="FechaModal"> Não!!</button>
            </div>
        </div>
    </section>
</template>

<script>
import Bus from '../eventBus.js';

export default {
    props:{
        
    },
    data() {
        return {
          estado: false,
        }
    },
    methods: {
        Fecha() {
            this.estado = !estado;
            Bus.$emit('abertoOufechado', this.estado);
        },
        deleteProfile() {

        }
    },
}
</script>

<style scope lang="scss">
    .backdrop {
        box-sizing: border-box;
        position: fixed;
        width: 100vw;
        height: 100vh;
        top:0;
        left:0;
        background-color: #0006;

        .corpoMod{
            background-color: #fff;
            box-sizing: border-box;
            border-radius: 25px;
            width: 320px;
            height: 130px;
            transform: translate(-50%,-50%);
            position: absolute;
            top: 50%;
            left: 50%;
            padding: 20px;
            box-shadow: 0 0 5px #333;
            
            .modalText {
                text-align: center;
                color: #db3c51;
                font-weight: 500;
                font-size: 18px;

                p {
                    margin:0 auto 15px; 
                }
            }
            
            .Bto{
                display: flex;
                justify-content: center;

                button {
                    border-radius: 15px;
                    border: 1px solid blue;
                    background-color: #fff;
                    color: #db3c51;
                    margin: 0 10px;
                    font-size: 15px;
                    transition: .5s ease;
                    outline: none;
                    padding: 2px 10px;

                    &:hover {
                        background-color: green($color: #000000);
                        color: #fff;
                    }
                }
            } 
        }

    }
</style>