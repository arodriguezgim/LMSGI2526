<script setup>
import BotonContador from './components/BotonContador.vue';
import BlogPost from './components/BlogPost.vue';
import { ref } from 'vue';


const posts = ref([
  { id:1, title: "Post 01", body:"Contenido del post 01"},
  { id:2, title: "Post 02", body:"Contenido del post 02"},
  { id:3, title: "Post 03", body:"Contenido del post 03"},
  { id:4, title: "Post 04"},
  { id:5, title: "Post 05", body:"Contenido del post 05"},
]);

const miFavorito = ref("")

const cambiarFavorito = ( titulo )=> {
  miFavorito.value = titulo;
}

</script>



<template>
  <div class="container">
      <h1>DAM 1 - 2026</h1>
      <BotonContador />
      <hr>
      <h2>Mi Post Favorito: {{ miFavorito }}</h2>
      <div class="container">
        <BlogPost 
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
          :body="post.body"
          :id="post.id"
          @cambiarTituloFavorito="cambiarFavorito"
          class="mb-2"
        />
      </div>
      


      

  </div>


</template>

<style scoped></style>
