
### 📂 `parte3.md` – Reactividad y eventos (1 hora)

````markdown
# 🧠 Módulo 3 – Reactividad y manejo de eventos

## 🎯 Objetivos del módulo
- Comprender el uso de `ref()` para crear variables reactivas
- Utilizar eventos (`@click`, `@input`, etc.)
- Crear funciones personalizadas
- Calcular valores derivados con `computed()`

---

## 🔁 Reactividad con `ref()`

`ref()` permite crear **variables reactivas** en Vue 3. Se importa desde `vue` y se accede a su valor con `.value`.

```vue
<script setup>
import { ref } from 'vue'

const contador = ref(0)
</script>

<template>
  <p>Contador: {{ contador }}</p>
  <button @click="contador++">Incrementar</button>
</template>
````

---

## 🧠 ¿Por qué `.value`?

Dentro de `<script setup>`, Vue permite usar variables reactivas directamente en el template sin `.value`.
Pero en JavaScript (fuera del template), sí es necesario:

```js
contador.value++  // dentro de funciones
```

---

## 🔘 Eventos con `@click`, `@input`, etc.

Vue permite escuchar eventos directamente en el template:

```vue
<template>
  <input @input="actualizarMensaje" />
  <p>{{ mensaje }}</p>
</template>

<script setup>
import { ref } from 'vue'

const mensaje = ref('')

function actualizarMensaje(e) {
  mensaje.value = e.target.value
}
</script>
```

---

## 🧮 Computed properties

`computed()` se usa para **valores derivados** de otras variables reactivas.

```vue
<template>
  <p>Nombre: {{ nombre }}</p>
  <p>En mayúsculas: {{ nombreMayus }}</p>
</template>

<script setup>
import { ref, computed } from 'vue'

const nombre = ref('Juan')

const nombreMayus = computed(() => {
  return nombre.value.toUpperCase()
})
</script>
```

---

## 📌 Ejemplo completo: contador con doble valor

```vue
<template>
  <p>Contador: {{ contador }}</p>
  <p>Doble: {{ dobleContador }}</p>
  <button @click="incrementar">+1</button>
</template>

<script setup>
import { ref, computed } from 'vue'

const contador = ref(0)

function incrementar() {
  contador.value++
}

const dobleContador = computed(() => contador.value * 2)
</script>
```

---

## 🛠 Actividades propuestas

1. Crea un botón que incremente un contador.
2. Crea un botón que lo reinicie a 0.
3. Muestra el valor triple del contador usando `computed`.
4. Crea un input que actualice un mensaje, y muestra también la cantidad de caracteres escritos.

---

En el siguiente módulo aprenderás a integrar Bootstrap en tus proyectos Vue para diseñar páginas atractivas con poco esfuerzo.

```

---

