
### 📂 `parte2.md` – Fundamentos del Template (1 hora)

````markdown
# 🧩 Módulo 2 – Fundamentos del Template en Vue 3

## 🎯 Objetivos del módulo
- Conocer la sintaxis básica de los templates en Vue
- Entender cómo funcionan las expresiones, directivas y enlaces
- Aprender a usar `v-if`, `v-for`, `v-model`, `v-bind` y `v-on`

---

## 📘 Sintaxis de plantilla (`{{ }}`)

En Vue podemos insertar variables reactivas directamente en el HTML usando doble llave:

```vue
<template>
  <p>Hola, {{ nombre }}</p>
</template>

<script setup>
import { ref } from 'vue'
const nombre = ref('DAM')
</script>
````

---

## 🔗 Atributos dinámicos (`v-bind` o `:`)

Para enlazar atributos HTML a datos de Vue, usamos `v-bind` o simplemente `:`:

```vue
<template>
  <img :src="imagenUrl" alt="Foto" />
</template>

<script setup>
const imagenUrl = 'https://via.placeholder.com/150'
</script>
```

---

## 🧠 Expresiones JavaScript

Dentro de `{{ }}` puedes usar expresiones simples:

```vue
<template>
  <p>El doble de 4 es {{ 4 * 2 }}</p>
</template>
```

❌ No se pueden usar sentencias complejas (if, for, etc.)

---

## 🧾 Directiva `v-if`, `v-else`, `v-show`

### `v-if` / `v-else`

```vue
<template>
  <p v-if="esVisible">Está visible</p>
  <p v-else>No está visible</p>
</template>

<script setup>
const esVisible = true
</script>
```

### `v-show`

```vue
<template>
  <p v-show="esVisible">Visible sin eliminar del DOM</p>
</template>
```

---

## 🔁 Directiva `v-for`

Repite un bloque HTML por cada elemento de un array.

```vue
<template>
  <ul>
    <li v-for="(alumno, i) in alumnos" :key="i">
      {{ i + 1 }} - {{ alumno }}
    </li>
  </ul>
</template>

<script setup>
const alumnos = ['Ana', 'Luis', 'Pedro']
</script>
```

---

## 🔄 Enlace bidireccional con `v-model`

`v-model` enlaza un input con una variable reactiva.

```vue
<template>
  <input v-model="nombre" placeholder="Escribe tu nombre" />
  <p>Hola, {{ nombre }}</p>
</template>

<script setup>
import { ref } from 'vue'
const nombre = ref('')
</script>
```

---

## 🖱️ Manejo de eventos (`v-on` o `@`)

Captura eventos como `click`, `input`, `submit`, etc.

```vue
<template>
  <button @click="saludar">Haz clic</button>
</template>

<script setup>
function saludar() {
  alert('¡Hola desde Vue!')
}
</script>
```

---

## 🛠 Actividades propuestas

1. Crea una lista con `v-for` que muestre 5 lenguajes de programación.
2. Usa `v-if` para mostrar un mensaje si la lista está vacía.
3. Crea un formulario con `v-model` que permita escribir el nombre de un alumno y mostrarlo en tiempo real.
4. Usa un botón con `@click` para limpiar el campo de texto anterior.

---

En el próximo módulo veremos cómo manejar variables reactivas y eventos más complejos usando `ref`, `computed` y funciones.

```

---

