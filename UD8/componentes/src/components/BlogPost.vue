<script setup>
    // defineProps(['title', 'body', 'id', 'colorText'])
    // String, Number, Boolean, Array, Object, Date, Function, Symbol
    const props = defineProps({
        title: String,
        id: Number,
        body: {
            type: String,
            default: 'Sin descripción'
        }
    })

    const emit = defineEmits(["cambiarTituloFavorito"])

    
</script>
<template>

    <div class="card">
        <div class="card-body">
            <h4 class="card-title" >
                {{ title }}
            </h4>
            <p>
                {{ id }} - {{ body }}
            </p>
            <button 
                @click="emit('cambiarTituloFavorito', title )"
                class="btn btn-outline-primary">
                    Mi Favorito
            </button>

        </div>
    </div>
</template>