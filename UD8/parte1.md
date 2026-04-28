
---

### 📂 `parte1.md` – Introducción a Vue 3 (1 hora)

````markdown
# 🧱 Módulo 1 – Introducción a Vue 3

## 🎯 Objetivos del módulo
- Comprender qué es Vue y para qué se utiliza
- Conocer la diferencia entre Options API y Composition API
- Instalar y configurar un proyecto con Vite
- Crear el primer "Hola Mundo" con Vue 3

---

## 📘 ¿Qué es Vue?

Vue es un **framework progresivo** de JavaScript que permite crear **interfaces de usuario interactivas**. Su principal ventaja es que es fácil de aprender y muy flexible, permitiendo su adopción gradual.

**Características:**
- Reactividad automática
- Sintaxis declarativa
- Componentes reutilizables
- Soporte completo para SPA (Single Page Application)
- Comunidad muy activa

---

## 🧪 Composition API vs Options API

| Característica        | Options API                  | Composition API                    |
|-----------------------|------------------------------|------------------------------------|
| Estilo clásico        | `data`, `methods`, `watch`   | `ref`, `reactive`, `computed`, etc |
| Organización del código | Separado por tipo            | Organizado por lógica funcional    |
| Reutilización         | Mixins                       | Composables                        |
| Recomendado en Vue 3  | ✅ Compatible                 | ✅ Recomendado                     |

> En este curso usaremos **Composition API** con `script setup`, que es la forma más moderna y clara de escribir componentes.

---

## ⚙️ Instalación rápida por CDN

Si no quieres instalar nada aún, puedes empezar con esta versión directa en HTML:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>
<body>
  <div id="app">{{ mensaje }}</div>

  <script>
    const { createApp, ref } = Vue

    createApp({
      setup() {
        const mensaje = ref('¡Hola Vue 3 desde CDN!')
        return { mensaje }
      }
    }).mount('#app')
  </script>
</body>
</html>
````

---

## 🖥️ Instalación de Vue 3 con Vite

La forma recomendada para desarrollo profesional es usar **Vite**.

### Paso 1: Crear el proyecto

```bash
npm create vite@latest mi-proyecto-vue -- --template vue
```

### Paso 2: Acceder al directorio

```bash
cd mi-proyecto-vue
```

### Paso 3: Instalar dependencias

```bash
npm install
```

### Paso 4: Ejecutar en desarrollo

```bash
npm run dev
```

---

## 📁 Estructura del proyecto con Vite

```plaintext
mi-proyecto-vue/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.vue
│   └── main.js
```

* `App.vue`: Componente raíz
* `main.js`: Punto de entrada donde se monta la app
* `components/`: Carpeta donde crearemos nuestros componentes

---

## 👋 Primer Hola Mundo en Vue

```vue
<!-- App.vue -->
<template>
  <h1>{{ mensaje }}</h1>
</template>

<script setup>
import { ref } from 'vue'

const mensaje = ref('¡Hola mundo desde Vue 3!')
</script>
```

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

> ✅ Ya tienes tu primer proyecto funcionando con Vue 3 usando Composition API.

---

## ✅ Actividad propuesta

1. Crea un nuevo proyecto con Vite.
2. Cambia el mensaje a "Bienvenido al curso de Vue 3".
3. Añade un párrafo adicional con tu nombre en el `template`.

---

