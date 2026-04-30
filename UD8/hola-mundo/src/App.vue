<script setup>
    import { computed, ref } from 'vue'

    // Métodos
    /*
    const manejarClick = ( mensaje ) => {
        console.log( mensaje )
    }
    const manejarClick2 = (  ) => {
        console.log( 'Click 2' )
    }*/

    const contador = ref( 0 )

    const incrementar = () => {
        contador.value++
    }
    const decrementar = () => {
        contador.value--
    }
    const resetear = () => {
        contador.value = 0
    }

    // Propiedades Computadas
    const claseContador = computed( ()=>{
        if ( contador.value === 0 ){
            return 'zero'
        }
        return contador.value > 0 ? 'verde' : 'rojo'
    })

    const arrayFavoritos = ref([])

    const addFavorito = () => {
        arrayFavoritos.value.push( contador.value )
    }
</script>

<template>
    <div class="container">
        <div class="text-center">
                <!--
                <button v-on:click="manejarClick('Mensaje como parámetro')">Click Aquí</button>
                <button @click="manejarClick2">Boton 2</button>-->
                <hr>
                <h1>Contador</h1>
                <h1 :class="claseContador">{{ contador }}</h1>
                <div class="btn-group">
                    <button @click="decrementar" class="btn btn-danger">Decrementar</button>
                    <button @click="resetear" class="btn btn-primary">Resetear</button>
                    <button @click="incrementar" class="btn btn-success">Aumentar</button>
                    <button @click="addFavorito" class="btn btn-info">Favorito</button>
                </div>
                <h3>Favoritos</h3>
                <ul>
                    <li v-for="favorito in arrayFavoritos">
                        {{ favorito }}
                    </li>
                </ul>
        </div>
    </div>
</template>

<style>
    .rojo {
        color: red;
    }
    .verde {
        color: green;
    }
    .zero {
        color: yellow;
    }
</style>