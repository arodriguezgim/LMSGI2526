
### 📂 `parte4.md` – Integrando Bootstrap en Vue 3 (1 hora)

````markdown
# 🎨 Módulo 4 – Integrar Bootstrap 5 en Vue 3

## 🎯 Objetivos del módulo
- Aprender a integrar Bootstrap 5 en un proyecto Vue
- Usar clases de Bootstrap para estructurar interfaces
- Aplicar estilos a botones, inputs, alertas y contenedores
- Crear un layout básico con `container`, `row` y `col`

---

## 🚀 ¿Qué es Bootstrap?

Bootstrap es un **framework CSS** que permite crear interfaces atractivas y responsivas fácilmente.

Incluye:
- Sistema de rejilla (grid)
- Estilos para inputs, botones, alertas, etc.
- Utilidades como márgenes, paddings, colores

---

## 📦 Incluir Bootstrap en Vue (con CDN)

### Paso 1: Editar `index.html`

Abre el archivo `index.html` en la raíz del proyecto y añade estas líneas en el `<head>`:

```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
````

> Con eso ya puedes usar las clases de Bootstrap directamente en tus componentes Vue.

---

## ✅ Ejemplo básico con Bootstrap

```vue
<template>
  <div class="container mt-5">
    <h1 class="text-primary">Formulario de contacto</h1>
    <input class="form-control mb-3" v-model="nombre" placeholder="Tu nombre" />
    <button class="btn btn-success" @click="saludar">Saludar</button>

    <div v-if="nombre" class="alert alert-info mt-3">
      ¡Hola {{ nombre }}!
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const nombre = ref('')

function saludar() {
  // no hace falta nada, solo mostrar el mensaje reactivo
}
</script>
```

---

## 🎛 Clases útiles de Bootstrap

| Clase           | Descripción                     |
| --------------- | ------------------------------- |
| `container`     | Contenedor central con márgenes |
| `row`, `col`    | Estructura de rejilla           |
| `btn`, `btn-*`  | Botones                         |
| `form-control`  | Inputs estilizados              |
| `mt-*`, `mb-*`  | Márgenes verticales             |
| `text-*`        | Colores del texto               |
| `alert alert-*` | Cuadros informativos            |

---

## 📐 Layout básico con Grid

```vue
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <p>Columna izquierda</p>
      </div>
      <div class="col-md-6">
        <p>Columna derecha</p>
      </div>
    </div>
  </div>
</template>
```

---

## 🛠 Actividades propuestas

1. Crea una página con un título centrado y un párrafo.
2. Añade un formulario de contacto con nombre, email y mensaje.
3. Usa `alert` para mostrar un mensaje de éxito al pulsar "Enviar".
4. Organiza los inputs en dos columnas con `row` y `col`.

---

En el próximo módulo comenzarás a trabajar con componentes: cómo crearlos, usarlos y pasarles datos con `props`.

```

---
