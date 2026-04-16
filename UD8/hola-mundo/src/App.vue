<script setup>
    const nombre = "Vue 3"
    const arrayFrutas = ["🍎", "🍌", "🍉", "🍓", "🍒"];
    const descargaFrutas = [
        {
            name: "Manzana",
            price: "1.00€",
            description: "Manzana Golden",
            stock: 0
        },
        {
            name: "Pera",
            price: "2.00€",
            description: "Pera Conferencia",
            stock: 10,
        },
        {
            name: "Naranja",
            price: "3.00€",
            description: "Naranjas de Valencia",
            stock: 20
        },
    ]
    const fruta = {
            name: "Fresa",
            price: "4.00€",
            description: "Freson de Palos"
        };
</script>
<template>
    <h1>Hola {{ nombre  }}</h1>
    <hr>
    <h3>Directiva v-for</h3>
    <p> Recorremos un Array </p>
    <ul>
        <li 
            v-for="(fruta, index) in arrayFrutas"
            :key="index">
            {{ index }} - {{ fruta }}
        </li>
    </ul>
    <hr>
    <p>Recorremos un Array de Objetos</p>
    <ul>
        <li v-for="fruta in descargaFrutas" :key="fruta.name">
            {{ fruta.name }} - {{ fruta.description }} -- {{ fruta.price }}
        </li>
    </ul>
    <hr>
    <p>Recorremos un objeto</p>
    <ul>
        <li v-for="(valor, propiedad) in fruta">
            {{  propiedad }} - {{ valor }} 
        </li>
    </ul>
    <hr>
    <p>Lista de productos con 10 o más unidades</p>
</template>