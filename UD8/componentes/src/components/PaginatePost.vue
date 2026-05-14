<script setup>
    const emit = defineEmits(["next","previous"])
    defineProps(["inicio","fin","tamanio"])
</script>

<template>
    <div class="btn-group" role="group" aria-label="Basic example">
        <button 
            type="button" 
            class="btn btn-outline-primary" 
            @click="emit('previous')"
            :disabled="inicio === 0"
                >Anterior {{ inicio }}
        </button>
        <button 
            type="button" 
            class="btn btn-outline-primary" 
            @click="emit('next')"
            
            >Siguiente {{  fin }}</button>
    </div>
</template>