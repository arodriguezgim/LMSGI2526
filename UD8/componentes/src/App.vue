<script setup>
import BotonContador from './components/BotonContador.vue';
import BlogPost from './components/BlogPost.vue';
import UseCard from './components/UseCard.vue';
import { ref } from 'vue';
import PaginatePost from './components/PaginatePost.vue';
import LoadingSpinner from './components/LoadingSpinner.vue';


const posts = ref([]);

const miFavorito = ref("")

// Paginación
const postsXPagina = 10;
const inicio = ref(0);
const fin = ref(postsXPagina)
const tamanoPost = ref(posts.value.length)
// Loading
const loading = ref(true)

// Metodos para la paginacion
const next = () => {
  inicio.value = inicio.value + postsXPagina
  fin.value = fin.value + postsXPagina
}

const previous = () => {
  inicio.value = inicio.value - postsXPagina
  fin.value = fin.value - postsXPagina
}

const cambiarFavorito = (titulo) => {
  miFavorito.value = titulo;
}
const contacto = ref('Nadie');
const usuarios = ref([
  {
    nombre: 'Juan Pérez',
    email: 'juan@example.com',
    rol: 'Desarrollador'
  },
  {
    nombre: 'María García',
    email: 'maria@example.com',
    rol: 'Diseñadora'
  },
  {
    nombre: 'Carlos López',
    email: 'carlos@example.com'
  }
]);

const contactarUsuario = (nombre) => {
  contacto.value = nombre;
}

// Vamos a usar fetch para cargar datos de una API Pública
fetch('https://jsonplaceholder.typicode.com/posts')
    .then( response => response.json() )
    //.then( data => console.log( data ))
    .then( data => posts.value = data )
    .finally( 
      setTimeout( () =>{
        loading.value = false
      }, 2000)
      
    )

</script>



<template>
  <div class="container">
    <h1>DAM 1 - 2026</h1>
    <!--<BotonContador />-->

    <hr>
    <h2>Mi Post Favorito: {{ miFavorito }}</h2>

    <LoadingSpinner v-if="loading"/>

    <div class="container" v-else>

      <PaginatePost 
        class="mb-2"
        @next="next"
        @previous="previous"
        :inicio="inicio"
        :fin="fin"
        :tamanio="tamanoPost"
        />
      <BlogPost v-for="post in posts.slice(inicio,fin)" :key="post.id" :title="post.title" :body="post.body" :id="post.id"
        @cambiarTituloFavorito="cambiarFavorito" class="mb-2" />
    </div>
    <hr>
    <h2>Contactar con: {{ contacto }}</h2>
    <div class="row">
      <div class="col-md-4" v-for="usuario in usuarios" :key="usuario.email">
        <UseCard :nombre="usuario.nombre" :email="usuario.email" :rol="usuario.rol" @contactar="contactarUsuario" />
      </div>
    </div>

  </div>

  


</template>

<style scoped></style>
