<template>
    <section>
        <nav class="inicio">
            <div class="titleContent">
                <p>{{ title }}</p>
            </div>
            <div class="titleBto">
                <button class="bto" @click="novo">+ Adicionar</button>
            </div>
        </nav>
        <Container/>
    </section>
</template>

<script>
import cont from '../components/cont.vue';
export default {
    components: {
        cont,
    },
    data() {
        return {
            title: 'pessoas',  
        }
    },
    methods: {
        novo() {
            alert('Proxima pagina!')
        }
    },
}
</script>

<style scoped lang="scss">
    .nav{
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        .titleContent {
            display: flex;
            flex: 1;
            justify-content: flex-start;
            color: #3cdb79;
            font-weight: 40;
            font-size: 2rem;
        }
        .titleBto {
            display: flex;
            flex: 1;
            justify-content: flex-end;
            .bto {
                background-color: #db3c51;
                color: #fff;
                padding: 10px 15px;
                border: none;
                border-radius: 25px;
                font-size: 1.5rem;
                outline: none;
            }
        }
        
    }
    @media (max-width:250px){
        .nav {
            width: 100%;
            .titleContent {
                text-align: center;
            }
        }
    }
</style>