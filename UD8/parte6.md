
---

### 📂 `parte6.md` – Comunicación entre componentes (1,5 horas)

````markdown
# 🔄 Módulo 6 – Comunicación entre componentes

## 🎯 Objetivos del módulo
- Comprender cómo emitir eventos desde un componente hijo
- Usar `defineEmits()` para definir eventos personalizados
- Escuchar eventos en el componente padre
- Combinar props y emits para componentes reutilizables
- Aplicar la función `defineProps()` junto con `defineEmits()`

---

## 📣 ¿Qué es un `emit`?

Es la forma en que un **componente hijo le avisa algo al componente padre**.

Ejemplo: Un botón dentro del hijo se pulsa → el padre se entera y reacciona.

---

## 🧪 Ejemplo básico: hijo emite, padre escucha

### `MiBoton.vue` (componente hijo)

```vue
<template>
  <button class="btn btn-primary" @click="emitirEvento">Pulsar</button>
</template>

<script setup>
const emit = defineEmits(['pulsado'])

function emitirEvento() {
  emit('pulsado')
}
</script>
````

### `App.vue` (componente padre)

```vue
<template>
  <MiBoton @pulsado="manejarPulsacion" />
</template>

<script setup>
import MiBoton from './components/MiBoton.vue'

function manejarPulsacion() {
  alert('El botón fue pulsado')
}
</script>
```

---

## 🧩 Props + Emit = componente controlado

### `Contador.vue`

```vue
<template>
  <button class="btn btn-info" @click="emit('aumentar')">
    Añadir 1
  </button>
</template>

<script setup>
const emit = defineEmits(['aumentar'])
</script>
```

### `App.vue`

```vue
<template>
  <h2>Total: {{ total }}</h2>
  <Contador @aumentar="total++" />
</template>

<script setup>
import { ref } from 'vue'
import Contador from './components/Contador.vue'

const total = ref(0)
</script>
```

---

## ✅ Ejemplo avanzado con `props` y `emit`

### `FormularioNombre.vue`

```vue
<template>
  <input class="form-control" v-model="nombreLocal" @input="emit('actualizar', nombreLocal)" />
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['actualizar'])
const nombreLocal = ref('')
</script>
```

### `App.vue`

```vue
<template>
  <FormularioNombre @actualizar="nombre = $event" />
  <p>Nombre introducido: {{ nombre }}</p>
</template>

<script setup>
import { ref } from 'vue'
import FormularioNombre from './components/FormularioNombre.vue'

const nombre = ref('')
</script>
```

---

## 🧪 Validar props y eventos con objetos

```js
// En un componente hijo
const props = defineProps({
  texto: String,
  activo: Boolean
})

const emit = defineEmits({
  cambiar: (nuevoValor) => typeof nuevoValor === 'boolean'
})
```

---

## 🛠 Actividades propuestas

1. Crea un componente `ContadorBoton.vue` que emita `sumar` y `restar` según el botón pulsado.
2. En el padre, muestra el valor total que se modifica según lo recibido.
3. Crea un componente `CampoTexto.vue` que reciba un `label` por props y emita el texto escrito con `@input`.
4. Usa `defineEmits()` con validación de tipo para asegurar que solo se emite un número válido.

---

En el próximo módulo consolidaremos todo lo aprendido con una serie de **ejercicios prácticos completos**, combinando componentes, Bootstrap, props, emits, ref y computed.

```

---

