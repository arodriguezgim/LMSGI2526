# Ejercicios - 1ª Parte

## Ejercicio 1: Variables con `let` y `const`

**Objetivo:** Practicar la declaración correcta de variables.

```js
// Completa el siguiente código usando let y const según corresponda

// 1. Declarar el nombre de un usuario (no debe cambiar)
___ nombre = "Kylian"

// 2. Declarar una edad que puede cambiar
___ edad = 25
edad = 26  // ✅ Esto debe funcionar

// 3. Actualizar un objeto de usuario
___ usuario = { nombre: "María", ciudad: "Madrid" }
usuario.ciudad = "Barcelona"  // ✅ Esto debe funcionar
usuario = {}  // ❌ Esto NO debe funcionar
```

**Solución esperada:**
<details>
<summary>Ver solución</summary>

```js
const nombre = "Carlos"
let edad = 25
const usuario = { nombre: "María", ciudad: "Madrid" }
```

**Explicación:**
- `const nombre` = el nombre no cambia
- `let edad` = la edad puede cambiar
- `const usuario` = no reasignamos el objeto, solo modificamos sus propiedades
</details>

---

## Ejercicio 2: Arrow Functions básicas

**Objetivo:** Convertir funciones tradicionales a arrow functions.

Convierte estas funciones a arrow functions:

```js
// 1. Función tradicional
function multiplicar(a, b) {
  return a * b
}

// Convierte a arrow function:
const multiplicar = ___

// 2. Función que devuelve un objeto
function crearPersona(nombre, edad) {
  return {
    nombre: nombre,
    edad: edad
  }
}

// Convierte a arrow function (simplificada):
const crearPersona = ___

// 3. Función sin parámetros
function obtenerHora() {
  return new Date().getHours()
}

// Convierte a arrow function:
const obtenerHora = ___
```

**Solución esperada:**
<details>
<summary>Ver solución</summary>

```js
const multiplicar = (a, b) => a * b

const crearPersona = (nombre, edad) => ({ nombre, edad })

const obtenerHora = () => new Date().getHours()
```

**Nota:** En la segunda, usamos paréntesis extra `({ ... })` porque JavaScript necesita diferenciar entre un objeto y un bloque de código.
</details>

---

## Ejercicio 3: Interpolación de Strings

**Objetivo:** Usar interpolación para construir mensajes dinámicos.

```js
const producto = "Laptop"
const precio = 899
const descuento = 0.10

// Crea un mensaje usando template strings que diga:
// "El producto Laptop cuesta 899 euros"
const mensaje1 = ___

// Crea otro que calcule el precio final con descuento:
// "Laptop tenía un precio de 899, con 10% de descuento cuesta 809.1 euros"
const mensaje2 = ___

// Usa una arrow function para mostrar un saludo personalizado
const saludar = (nombre) => ___

console.log(saludar("Ana"))  // Debe mostrar: "Hola Ana, bienvenida a nuestro sistema"
```

**Solución esperada:**
<details>
<summary>Ver solución</summary>

```js
const mensaje1 = `El producto ${producto} cuesta ${precio} euros`

const mensaje2 = `${producto} tenía un precio de ${precio}, con ${descuento * 100}% de descuento cuesta ${precio * (1 - descuento)} euros`

const saludar = (nombre) => `Hola ${nombre}, bienvenida a nuestro sistema`
```
</details>

---

## Ejercicio 4: Destructuring con objetos

**Objetivo:** Extraer valores de objetos usando destructuring.

```js
const libro = {
  titulo: "El Quijote",
  autor: "Cervantes",
  año: 1605,
  paginas: 863
}

// Extrae solo titulo y autor
const { ___, ___ } = libro

// Extrae año y paginas, renombrando paginas como "total_paginas"
const { año, ___ } = libro

// Accede a los valores
console.log(titulo)  // "El Quijote"
console.log(autor)   // "Cervantes"
```

**Solución esperada:**
<details>
<summary>Ver solución</summary>

```js
const { titulo, autor } = libro

const { año, paginas: total_paginas } = libro

console.log(titulo)  // "El Quijote"
console.log(autor)   // "Cervantes"
```
</details>

---

## Ejercicio 5: Destructuring con arrays

**Objetivo:** Extraer valores de arrays usando destructuring.

```js
const numeros = [10, 20, 30, 40, 50]

// Extrae el primero y segundo elemento
const [___, ___] = numeros

// Extrae el primero, omite el segundo, y toma el tercero
const [primero, _, tercero] = numeros

// Extrae los dos primeros y el resto en un array
const [uno, dos, ...resto] = numeros

console.log(primero)  // 10
console.log(tercero)  // 30
console.log(resto)    // [30, 40, 50]
```

**Solución esperada:**
<details>
<summary>Ver solución</summary>

```js
const [primero, segundo] = numeros

const [primero, _, tercero] = numeros

const [uno, dos, ...resto] = numeros
```
</details>

---

## Ejercicio 6: Spread Operator

**Objetivo:** Expandir arrays y objetos.

```js
const numeros1 = [1, 2, 3]
const numeros2 = [4, 5, 6]

// Combina ambos arrays en uno nuevo
const todosCombinados = ___

// Copia numeros1 y agrega el número 7
const copiaConAgregar = ___

const persona = { nombre: "Luis", edad: 30 }

// Crea un nuevo objeto con los datos de persona + una ciudad
const personaCompleta = ___

// Actualiza el nombre de persona manteniendo otros datos
const personaActualizada = ___
```

**Solución esperada:**
<details>
<summary>Ver solución</summary>

```js
const todosCombinados = [...numeros1, ...numeros2]

const copiaConAgregar = [...numeros1, 7]

const personaCompleta = { ...persona, ciudad: "Madrid" }

const personaActualizada = { ...persona, nombre: "Carlos" }
```

**Nota:** El spread operator crea una COPIA, no modifica el original.
</details>

---

## Ejercicio 7: Combinación de conceptos

**Objetivo:** Usar múltiples conceptos juntos.

```js
// Dado este array de usuarios
const usuarios = [
  { id: 1, nombre: "Ana", activo: true },
  { id: 2, nombre: "Carlos", activo: false },
  { id: 3, nombre: "María", activo: true }
]

// 1. Usa destructuring en un forEach para acceder a nombre y activo
usuarios.forEach(({ nombre, activo }) => {
  console.log(`${nombre}: ${activo ? "activo" : "inactivo"}`)
})

// 2. Crea un nuevo usuario basado en otro con cambios
const usuarioBase = usuarios[0]
const usuarioNuevo = { ...usuarioBase, id: 4, nombre: "Pedro" }

// 3. Usa map y arrow function para extraer solo los nombres
const nombres = usuarios.map((___)  => ___)

// 4. Usa filter y arrow function para obtener solo usuarios activos
const usuariosActivos = usuarios.filter((___)  => ___)

console.log(nombres)          // ["Ana", "Carlos", "María"]
console.log(usuariosActivos)  // Array con Ana y María
```

**Solución esperada:**
<details>
<summary>Ver solución</summary>

```js
// 3. Extrae solo nombres
const nombres = usuarios.map((usuario) => usuario.nombre)

// 4. Filtra usuarios activos
const usuariosActivos = usuarios.filter((usuario) => usuario.activo)

// O más conciso:
const nombres = usuarios.map(({ nombre }) => nombre)
const usuariosActivos = usuarios.filter(({ activo }) => activo)
```
</details>

---

## Ejercicio 8: Módulos (export/import)

**Objetivo:** Practicar la modularización de código.

Crea dos archivos:

**Archivo: `utilidades.js`**

```js
// Exporta una función que valide si un email es válido
export const validarEmail = (email) => ___

// Exporta una función que convierta texto a mayúsculas
export const convertirMayusculas = (texto) => ___

// Exporta una función por defecto que salude
export default function saludarPersona(nombre) {
  return ___
}
```

**Archivo: `main.js`**

```js
// Importa las funciones específicas
import { ___, ___ } from "./utilidades.js"

// Importa la función por defecto
import ___ from "./utilidades.js"

// Usa las funciones
console.log(validarEmail("usuario@ejemplo.com"))
console.log(convertirMayusculas("hola mundo"))
console.log(saludarPersona("Ana"))
```

**Solución esperada:**
<details>
<summary>Ver solución</summary>

**utilidades.js:**
```js
export const validarEmail = (email) => email.includes("@")

export const convertirMayusculas = (texto) => texto.toUpperCase()

export default function saludarPersona(nombre) {
  return `Hola ${nombre}, ¡bienvenido!`
}
```

**main.js:**
```js
import { validarEmail, convertirMayusculas } from "./utilidades.js"
import saludarPersona from "./utilidades.js"
```
</details>

---

## Ejercicio Desafío: Mini proyecto

**Objetivo:** Combinar todos los conceptos en un pequeño proyecto.

Crea un script que simule un carrito de compras:

```js
// 1. Crea un array de productos
const productos = [
  { id: 1, nombre: "Mouse", precio: 15, cantidad: 2 },
  { id: 2, nombre: "Teclado", precio: 45, cantidad: 1 },
  { id: 3, nombre: "Monitor", precio: 250, cantidad: 1 }
]

// 2. Usa map para crear un array con el costo total de cada producto
// (precio * cantidad)
const costos = ___

// 3. Usa reduce para calcular el total del carrito
const totalCarrito = ___

// 4. Crea una función flecha que devuelva un resumen del carrito
const resumenCarrito = () => {
  return `
    Tu carrito tiene ${productos.length} tipos de artículos.
    Total a pagar: $${totalCarrito}
  `
}

// 5. Usa destructuring para extraer el nombre del primer producto
const { nombre: primerProducto } = ___

console.log(resumenCarrito())
console.log(`Primer producto: ${primerProducto}`)
```

**Solución esperada:**
<details>
<summary>Ver solución</summary>

```js
const costos = productos.map(({ precio, cantidad }) => precio * cantidad)

const totalCarrito = costos.reduce((suma, costo) => suma + costo, 0)

// O en una sola línea:
const totalCarrito = productos.reduce((sum, { precio, cantidad }) => sum + (precio * cantidad), 0)

const { nombre: primerProducto } = productos[0]
```

**Nota:** `reduce` es un método que suma/acumula valores en un array. El 0 es el valor inicial.
</details>

---
