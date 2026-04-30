<script setup>

    const productos = [
    { id: 1,  nombre: 'Portátil',      precio: 999,  stock: 12,  categoria: 'Electrónica' },
    { id: 2,  nombre: 'Teclado',     precio: 49,   stock: 34,  categoria: 'Periféricos' },
    { id: 3,  nombre: 'Monitor',     precio: 320,  stock: 8,   categoria: 'Electrónica' },
    { id: 4,  nombre: 'Ratón',       precio: 25,   stock: 60,  categoria: 'Periféricos' },
    { id: 5,  nombre: 'Auriculares', precio: 89,   stock: 20,  categoria: 'Audio'       },
    { id: 6,  nombre: 'Webcam',      precio: 75,   stock: 15,  categoria: 'Periféricos' },
    { id: 7,  nombre: 'SSD 1TB',    precio: 110,  stock: 27,  categoria: 'Almacenamiento' },
    { id: 8,  nombre: 'Hub USB',    precio: 35,   stock: 45,  categoria: 'Periféricos' },
    { id: 9,  nombre: 'Altavoces',  precio: 130,  stock: 9,   categoria: 'Audio'       },
    { id: 10, nombre: 'Alfombrilla',precio: 18,   stock: 80,  categoria: 'Periféricos' },
    ]


    const estudiantes = [
    { id: 1,  nombre: 'Dani Remón',    nota: 9.2,  aprobado: true,  curso: 'DAW' },
    { id: 2,  nombre: 'Luis Martín',   nota: 4.8,  aprobado: false, curso: 'DAM' },
    { id: 3,  nombre: 'Sara López',    nota: 7.5,  aprobado: true,  curso: 'ASIR' },
    { id: 4,  nombre: 'Carlos Pérez', nota: 6.0,  aprobado: true,  curso: 'DAW' },
    { id: 5,  nombre: 'Diego Quiles',   nota: 3.1,  aprobado: false, curso: 'DAM' },
    { id: 6,  nombre: 'Pedro Sanz',   nota: 8.8,  aprobado: true,  curso: 'ASIR' },
    { id: 7,  nombre: 'Elena Vega',   nota: 5.5,  aprobado: true,  curso: 'DAW' },
    { id: 8,  nombre: 'Hector Enguita',   nota: 2.9,  aprobado: false, curso: 'DAM' },
    { id: 9,  nombre: 'Hector Lozano', nota: 9.7,  aprobado: true,  curso: 'ASIR' },
    { id: 10, nombre: 'Tomás Gil',    nota: 7.0,  aprobado: true,  curso: 'DAW' },
    ]

    const seMuestra = true

</script>

<template>
    <h1>Ejercicios de repaso</h1>
    <hr>
    <!--<h2>Productos</h2>
    <ul>
        <li 
            v-for="producto in productos"
            :key="producto.id">
            {{ producto.nombre }} - {{ producto.precio }}€
        </li>
    </ul>

    <hr>
    <h2>Estudiantes</h2>
        <li
            v-for="estudiante in estudiantes" 
            :key="estudiante.id">
            {{  estudiante.nombre }}
        </li>-->
    <hr>
    <h2>V-for con v-if: Productos con valor superior a 50</h2>
    <ul>
        <template 
            v-for="p in productos" 
            :key="p.id">
            <li v-if="p.precio > 50">
                {{  p.nombre }}
            </li>
        </template>
        
    </ul>
    <hr>
    <h2>Estudiantes aprobados</h2>
    <hr>
    <h1>Eventos</h1>
</template>

<style>
</style>