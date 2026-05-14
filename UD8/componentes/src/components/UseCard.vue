<script setup>
defineProps({
    nombre: {
        type: String,
        required: true
    },
    email: String,
    rol: {
        type: String,
        default: 'Usuario'
    }
})
</script>

<template>
    <div class="card bg-warning-subtle mb-3" >
        <div class="card-body">
            <h5 class="card-title">{{ nombre }}</h5>
            <p class="card-text">
                <strong>Email:</strong> {{ email }}
            </p>
            <p class="card-text">
                <span class="badge bg-primary">{{ rol }}</span>
            </p>
            <button class="btn btn-outline-success" @click="$emit('contactar', nombre)">
                Contactar
            </button>
        </div>
    </div>
</template>