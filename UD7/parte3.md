# 3ª Parte – Asincronía y DOM en JavaScript

---

# 1️⃣ ¿Qué es la asincronía?

## El problema fundamental

JavaScript es **monohilo** (single-threaded). Esto significa:

👉 Solo puede ejecutar **una instrucción a la vez**

Cuando algo tarda mucho tiempo, JavaScript se "congela":

```js
console.log("Descargando archivo...")
descargarArchivoGrande()  // Esto tarda 10 segundos
console.log("¡Listo!")    // El usuario ve esto después de 10 segundos
```

El problema: El navegador no responde mientras se descarga.

---

## La solución: Asincronía

La asincronía permite que JavaScript:

1. **Inicie** una tarea larga
2. **Continúe** ejecutando otras cosas
3. **Notifique** cuando la tarea termine

---

## 🔹 Ejemplo síncrono (el problema)

```js
console.log("Inicio")
console.log("Contenido")
console.log("Fin")
```

Salida inmediata:
```
Inicio
Contenido
Fin
```

---

## 🔹 Ejemplo asíncrono (la solución)

```js
console.log("Inicio")

setTimeout(() => {
  console.log("Esto tarda 2 segundos")
}, 2000)

console.log("Fin")
```

Salida:
```
Inicio
Fin
Esto tarda 2 segundos  // Aparece después de 2 segundos
```

⚠️ **Importante:** "Fin" se muestra antes de "Esto tarda 2 segundos"

---

## Casos reales de asincronía

* 🌐 Descargar datos de un servidor (API)
* 📁 Leer archivos del disco
* ⏱️ Esperas programadas
* 🖼️ Cargar imágenes

---

# 2️⃣ Promesas (Promises)

## ¿Qué es una promesa?

Una **promesa** es un objeto que representa un valor que **aún no existe, pero existirá en el futuro**.

Ejemplo de la vida real:
> Te prometo que mañana te traigo un libro. Ahora no lo tengo, pero en el futuro lo tendré.

---

## Estados de una promesa

Una promesa tiene exactamente 3 estados:

```
┌─────────────────┐
│   PENDIENTE     │  La promesa está en proceso
│                 │
│   (entonces)    │ Si se resuelve...
│        ↓        │
│   RESUELTA      │  Recibimos el valor
│                 │
│   (o bien)      │ Si falla...
│        ↓        │
│   RECHAZADA     │  Recibimos un error
└─────────────────┘
```

---

## 🔹 Crear una promesa

```js
const miPromesa = new Promise((resolve, reject) => {
  // Aquí entra el código asincrónico
  
  // Si todo va bien:
  resolve("¡Éxito! Aquí va el resultado")
  
  // Si hay error:
  reject("¡Error! Algo salió mal")
})
```

`resolve` y `reject` son funciones:

* **`resolve(valor)`** → La promesa se resuelve con un valor
* **`reject(error)`** → La promesa se rechaza con un error

---

## 🔹 Ejemplo real: Descargar datos

```js
const descargarDatos = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ nombre: "Ana", edad: 28 })
  }, 2000)
})

// Usar la promesa
descargarDatos
  .then((datos) => {
    console.log("Datos recibidos:", datos)
  })
  .catch((error) => {
    console.log("Error:", error)
  })
```

* **`.then()`** → Se ejecuta si la promesa se resuelve
* **`.catch()`** → Se ejecuta si la promesa se rechaza

---

# 3️⃣ async / await (LA FORMA MODERNA)

## El problema con promesas directas

Esto funciona... pero es incómodo de leer:

```js
descargarDatos
  .then(datos => {
    procesarDatos(datos)
      .then(resultado => {
        mostrarResultado(resultado)
          .then(fin => console.log("Listo"))
      })
  })
```

Esto se llama "callback hell" 😨

---

## La solución: async/await

`async/await` permite escribir código asincrónico **como si fuera sincrónico**.

---

## 🔹 Sintaxis básica

```js
// 1. Crear una función async
async function miFunction() {
  // 2. Usar await para esperar una promesa
  const resultado = await miPromesa
  
  // 3. Continuar como si fuera sincrónico
  console.log(resultado)
}

// 4. Ejecutar la función
miFunction()
```

---

## 🔹 Ejemplo paso a paso

```js
// Esto es una promesa
const esperar2Segundos = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Los 2 segundos pasaron")
  }, 2000)
})

// Función async que espera la promesa
const ejecutar = async () => {
  console.log("Inicio")
  
  // await pausa aquí 2 segundos
  const mensaje = await esperar2Segundos
  console.log(mensaje)
  
  console.log("Fin")
}

ejecutar()
```

Salida:
```
Inicio
Los 2 segundos pasaron
Fin
```

---

## 🔹 Diferencia clave: await solo funciona en async

❌ **Esto NO funciona:**
```js
const resultado = await miPromesa  // Error!
```

✅ **Esto SÍ funciona:**
```js
async function obtener() {
  const resultado = await miPromesa  // Correcto
}
```

---

## 🔹 Manejo de errores con try/catch

```js
async function descargarDatos() {
  try {
    // Código que podría fallar
    const datos = await fetch("https://api.ejemplo.com/datos")
    console.log("Éxito:", datos)
  } catch (error) {
    // Si algo falla
    console.log("Error:", error.message)
  }
}

descargarDatos()
```

* **`try`** → Intenta ejecutar el código
* **`catch`** → Si hay error, lo captura aquí

---

# 4️⃣ fetch – Consumir APIs desde JavaScript

## ¿Qué es una API?

Una API es un servidor web que nos da información.

Ejemplos:
* 🌍 OpenWeather → Datos del clima
* 👤 JSONPlaceholder → Datos de prueba
* 📸 Unsplash → Imágenes

---

## ¿Qué es fetch?

`fetch` es la función para **descargar datos desde un servidor**.

---

## 🔹 Estructura básica

```js
async function cargarDatos() {
  // 1. Descargar la respuesta
  const response = await fetch("https://mi-api.com/datos")
  
  // 2. Convertir a JSON
  const datos = await response.json()
  
  // 3. Usar los datos
  console.log(datos)
}

cargarDatos()
```

---

## 🔹 Ejemplo real: JSONPlaceholder

JSONPlaceholder es un servidor de prueba perfecto para aprender.

```js
async function cargarUsuarios() {
  try {
    // Descargar
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    
    // Convertir a JSON
    const usuarios = await response.json()
    
    // Mostrar primer usuario
    console.log(usuarios[0])
    // {
    //   id: 1,
    //   name: "Leanne Graham",
    //   email: "Sincere@april.biz",
    //   ...
    // }
  } catch (error) {
    console.log("Error al descargar:", error)
  }
}

cargarUsuarios()
```

---

## 🔹 Procesar múltiples datos

```js
async function mostrarNombresDeUsuarios() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const usuarios = await response.json()
    
    // Mostrar solo los nombres
    usuarios.forEach(usuario => {
      console.log(usuario.name)
    })
    
    // O mejor: extraer nombres con map
    const nombres = usuarios.map(u => u.name)
    console.log(nombres)
  } catch (error) {
    console.log("Error:", error)
  }
}

mostrarNombresDeUsuarios()
```

---

## 🔹 Enviar datos (POST)

A veces no queremos solo descargar, sino **enviar** información:

```js
async function crearUsuario() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: "Juan",
          email: "juan@ejemplo.com"
        })
      }
    )
    
    const nuevoUsuario = await response.json()
    console.log("Usuario creado:", nuevoUsuario)
  } catch (error) {
    console.log("Error:", error)
  }
}

crearUsuario()
```

---

# 5️⃣ Introducción al DOM (Document Object Model)

## ¿Qué es el DOM?

El **Document Object Model** es la representación en memoria del HTML.

Cuando abres una página web:

```
1. El navegador descarga el HTML
       ↓
2. Lo convierte en un árbol de objetos
       ↓
3. Crea el "DOM" (lo que ves en pantalla)
```

---

## 🔹 El DOM como árbol

Tu HTML:
```html
<html>
  <body>
    <h1 id="titulo">Hola</h1>
    <p class="texto">Un párrafo</p>
  </body>
</html>
```

Se convierte en árbol:
```
document
├── html
│   └── body
│       ├── h1#titulo
│       └── p.texto
```

---

## 🔹 Acceder a elementos

### Por ID (querySelector)

```html
<h1 id="titulo">Bienvenido</h1>
```

```js
const titulo = document.querySelector("#titulo")
console.log(titulo)  // <h1 id="titulo">Bienvenido</h1>
```

---

### Por clase

```html
<p class="texto">Un párrafo</p>
<p class="texto">Otro párrafo</p>
```

```js
const parrafos = document.querySelectorAll(".texto")
console.log(parrafos)  // NodeList [<p>, <p>]
```

---

### Por etiqueta

```html
<button>Botón 1</button>
<button>Botón 2</button>
```

```js
const botones = document.querySelectorAll("button")
console.log(botones)  // NodeList [<button>, <button>]
```

---

## 🔹 Modificar contenido

### Cambiar texto

```html
<h1 id="titulo">Antiguo título</h1>
```

```js
const titulo = document.querySelector("#titulo")
titulo.textContent = "Nuevo título"
```

Resultado:
```html
<h1 id="titulo">Nuevo título</h1>
```

---

### Cambiar HTML

```html
<div id="contenedor">Contenido antiguo</div>
```

```js
const contenedor = document.querySelector("#contenedor")
contenedor.innerHTML = "<p>Contenido nuevo</p>"
```

Resultado:
```html
<div id="contenedor"><p>Contenido nuevo</p></div>
```

⚠️ **Nota:** `innerHTML` ejecuta código HTML. `textContent` no.

---

## 🔹 Modificar estilos

```html
<h1 id="titulo">Título</h1>
```

```js
const titulo = document.querySelector("#titulo")

// Cambiar color
titulo.style.color = "red"

// Cambiar tamaño
titulo.style.fontSize = "30px"

// Cambiar fondo
titulo.style.backgroundColor = "yellow"
```

---

## 🔹 Agregar/Quitar clases

HTML + CSS:
```html
<style>
  .activo { background: green; }
</style>

<button id="boton">Presiona</button>
```

JavaScript:
```js
const boton = document.querySelector("#boton")

// Agregar clase
boton.classList.add("activo")

// Quitar clase
boton.classList.remove("activo")

// Alternar clase
boton.classList.toggle("activo")
```

---

## 🔹 Escuchar eventos (click, input, etc)

```html
<button id="miBoton">Presiona</button>
```

```js
const boton = document.querySelector("#miBoton")

boton.addEventListener("click", () => {
  console.log("¡Se presionó el botón!")
})
```

---

## 🔹 Ejemplo completo: Contador interactivo

HTML:
```html
<h1 id="contador">0</h1>
<button id="suma">+</button>
<button id="resta">-</button>
```

JavaScript:
```js
let numero = 0

const elementoContador = document.querySelector("#contador")
const botonSuma = document.querySelector("#suma")
const botonResta = document.querySelector("#resta")

botonSuma.addEventListener("click", () => {
  numero++
  elementoContador.textContent = numero
})

botonResta.addEventListener("click", () => {
  numero--
  elementoContador.textContent = numero
})
```

---


