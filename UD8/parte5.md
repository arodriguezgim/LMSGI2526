

### 📂 `parte5.md` – Componentes y `script setup` (1,5 horas)

````markdown
# 🧱 Módulo 5 – Componentes y Script Setup

## 🎯 Objetivos del módulo
- Comprender la estructura de un componente en Vue 3
- Diferenciar entre `<script>` clásico y `<script setup>`
- Crear y reutilizar componentes
- Entender cómo importar y registrar componentes
- Comenzar a usar `props`

---

## 🧩 ¿Qué es un componente?

Un componente es una **pieza reutilizable de interfaz**. Puede contener su propio HTML, CSS y JS.

Ejemplo: `Cabecera.vue`, `Boton.vue`, `TarjetaProducto.vue`, etc.

---

## 📁 Estructura de un componente

```vue
<!-- src/components/MiBoton.vue -->
<template>
  <button class="btn btn-primary">{{ texto }}</button>
</template>

<script setup>
defineProps(['texto'])
</script>
````

---

## 🆕 Introducción a `<script setup>`

Vue 3 permite usar `script setup`, una forma más moderna y sencilla de definir lógica en un componente.

**Ventajas:**

* Menos código
* Variables disponibles directamente en el template
* Ideal para Composition API

---

## 🔄 Importar y usar un componente

Supón que creamos `MiBoton.vue`. Para usarlo:

```vue
<!-- App.vue o cualquier otro componente -->
<template>
  <MiBoton texto="Haz clic aquí" />
</template>

<script setup>
import MiBoton from './components/MiBoton.vue'
</script>
```

---

## 📦 Pasar datos al componente con `props`

Las **props** permiten pasar datos desde un componente padre a uno hijo.

```vue
<!-- Componente padre -->
<MiSaludo nombre="Juan" />
```

```vue
<!-- MiSaludo.vue -->
<template>
  <p>Hola, {{ nombre }} 👋</p>
</template>

<script setup>
defineProps(['nombre'])
</script>
```

---

## 🔍 Alternativa: definir `props` con tipos

```vue
<script setup>
const props = defineProps({
  nombre: String,
  edad: Number
})
</script>
```

---

## 🔁 Props y `v-for`

Puedes usar `v-for` para renderizar componentes múltiples con distintas props.

```vue
<!-- Componente padre -->
<TarjetaProducto
  v-for="producto in productos"
  :key="producto.id"
  :nombre="producto.nombre"
  :precio="producto.precio"
/>
```

```vue
<!-- TarjetaProducto.vue -->
<template>
  <div class="card p-3">
    <h5>{{ nombre }}</h5>
    <p>{{ precio }} €</p>
  </div>
</template>

<script setup>
defineProps(['nombre', 'precio'])
</script>
```

---

## 🛠 Actividades propuestas

1. Crea un componente `TarjetaAlumno.vue` que reciba `nombre`, `curso`, y `email`.
2. Desde el padre, crea un array de alumnos y muéstralos con `v-for`.
3. Crea un componente `BotonContador.vue` con un botón que incremente un contador interno.
4. Usa `props` para que el color del botón sea configurable.

---

En el próximo módulo aprenderás a comunicar componentes de hijo a padre usando `emit`, `defineEmits`, y la función `defineProps` para validación más avanzada.

```

---

