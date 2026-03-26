# Ejercicios - 2ª Parte

## Ejercicio 1: Crear y acceder a arrays

**Objetivo:** Practicar la creación de arrays y acceso a elementos.

```js
// 1. Crea un array con 5 números
const numeros = ___

// 2. Accede al primer elemento
console.log(___)  // Debe mostrar el primer número

// 3. Accede al último elemento
console.log(___)  // Debe mostrar el último número

// 4. Modifica el segundo elemento a 99
___

// 5. Crea un array mixto con diferentes tipos
const mezcla = ___
```

**Solución esperada:**
<details>
<summary>Ver solución</summary>

```js
const numeros = [10, 20, 30, 40, 50]

console.log(numeros[0])  // 10

console.log(numeros[numeros.length - 1])  // 50

numeros[1] = 99

const mezcla = [42, "Hola", true, { nombre: "Ana" }, null]
```
</details>

---

## Ejercicio 2: Métodos push, pop, shift, unshift

**Objetivo:** Añadir y eliminar elementos de arrays.

```js
const carrito = [
  { producto: "Mouse", precio: 15 },
  { producto: "Teclado", precio: 45 }
]

// 1. Añade un monitor al final
___

// 2. Elimina el último elemento
___

// 3. Añade una webcam al principio
___

// 4. Elimina el primer elemento
___

// Muestra el array final
console.log(carrito)
```

**Solución esperada:**
<details>
<summary>Ver solución</summary>

```js
carrito.push({ producto: "Monitor", precio: 250 })

carrito.pop()

carrito.unshift({ producto: "Webcam", precio: 60 })

carrito.shift()

// Array resultante: [
//   { producto: "Teclado", precio: 45 },
//   { producto: "Mouse", precio: 15 }
// ]
```

**Nota:** Estos métodos **mutan** el array original.
</details>

---

## Ejercicio 3: forEach() básico

**Objetivo:** Recorrer arrays con forEach.

```js
const colores = ["rojo", "azul", "verde", "amarillo"]

// 1. Usa forEach para mostrar cada color
colores.forEach((color) => {
  ___
})

// 2. Usa forEach con índice para mostrar "Posición: color"
colores.forEach((color, indice) => {
  ___
})

// Salida esperada:
// Posición 0: rojo
// Posición 1: azul
// ... etc
```

**Solución esperada:**
<details>
<summary>Ver solución</summary>

```js
colores.forEach((color) => {
  console.log(color)
})

colores.forEach((color, indice) => {
  console.log(`Posición ${indice}: ${color}`)
})
```
</details>

---

## Ejercicio 4: map() - Transformar arrays

**Objetivo:** Usar map para crear nuevos arrays transformados.

```js
const numeros = [1, 2, 3, 4, 5]

// 1. Crea un array con los números multiplicados por 2
const dobles = ___

// 2. Crea un array con los números elevados al cuadrado
const cuadrados = ___

// 3. Crea un array de strings con formato "Número: X"
const textos = ___

console.log(dobles)    // [2, 4, 6, 8, 10]
console.log(cuadrados) // [1, 4, 9, 16, 25]
console.log(textos)    // ["Número: 1", "Número: 2", ...]
```

**Solución esperada:**
<details>
<summary>Ver solución</summary>

```js
const dobles = numeros.map((num) => num * 2)

const cuadrados = numeros.map((num) => num ** 2)

const textos = numeros.map((num) => `Número: ${num}`)
```

**Nota:** `map()` NO modifica el array original, crea uno nuevo.
</details>

---

## Ejercicio 5: map() con arrays de objetos

**Objetivo:** Transformar arrays de objetos.

```js
const personas = [
  { nombre: "Ana", edad: 28 },
  { nombre: "Carlos", edad: 35 },
  { nombre: "María", edad: 22 }
]

// 1. Extrae solo los nombres
const nombres = ___

// 2. Crea un array con los años de nacimiento (usa edad y resta de 2024)
const anoNacimiento = ___

// 3. Crea un array de objetos con nombre y esAdulto (edad >= 18)
const conEstado = ___

console.log(nombres)      // ["Ana", "Carlos", "María"]
console.log(anoNacimiento) // [1996, 1989, 2002]
console.log(conEstado)    // [{ nombre: "Ana", esAdulto: true }, ...]
```

**Solución esperada:**
<details>
<summary>Ver solución</summary>

```js
const nombres = personas.map((p) => p.nombre)

const anoNacimiento = personas.map((p) => 2024 - p.edad)

const conEstado = personas.map((p) => ({
  nombre: p.nombre,
  esAdulto: p.edad >= 18
}))
```

**Nota:** Cuando devolvemos un objeto con `map`, necesitamos paréntesis extra: `({ ... })`
</details>

---

## Ejercicio 6: filter() - Filtrar elementos

**Objetivo:** Usar filter para seleccionar elementos que cumplen condiciones.

```js
const numeros = [5, 12, 8, 20, 3, 15, 9]

// 1. Obtén solo los números mayores a 10
const mayoresA10 = ___

// 2. Obtén solo los números pares
const pares = ___

// 3. Obtén solo los números menores a 10
const menoresA10 = ___

console.log(mayoresA10)  // [12, 20, 15]
console.log(pares)       // [12, 8, 20]
console.log(menoresA10)  // [5, 8, 3, 9]
```

**Solución esperada:**
<details>
<summary>Ver solución</summary>

```js
const mayoresA10 = numeros.filter((num) => num > 10)

const pares = numeros.filter((num) => num % 2 === 0)

const menoresA10 = numeros.filter((num) => num < 10)
```
</details>

---

## Ejercicio 7: filter() con arrays de objetos

**Objetivo:** Filtrar objetos según condiciones.

```js
const alumnos = [
  { nombre: "Javi", nota: 8 },
  { nombre: "Alberto", nota: 5 },
  { nombre: "Quiles", nota: 9 },
  { nombre: "Hector", nota: 4 }
]

// 1. Obtén solo los aprobados (nota >= 5)
const aprobados = ___

// 2. Obtén solo los que tienen nota mayor a 7
const sobresalientes = ___

// 3. Obtén solo los que tienen nota menor a 5
const suspendidos = ___

console.log(aprobados)        // 3 alumnos
console.log(sobresalientes)   // Javi y Quiles
console.log(suspendidos)      // Solo Hector
```

**Solución esperada:**
<details>
<summary>Ver solución</summary>

```js
const aprobados = alumnos.filter((a) => a.nota >= 5)

const sobresalientes = alumnos.filter((a) => a.nota > 7)

const suspendidos = alumnos.filter((a) => a.nota < 5)
```
</details>

---

## Ejercicio 8: find() - Buscar un elemento

**Objetivo:** Usar find para localizar el primer elemento que cumple una condición.

```js
const usuarios = [
  { id: 1, nombre: "Ana", ciudad: "Madrid" },
  { id: 2, nombre: "Carlos", ciudad: "Barcelona" },
  { id: 3, nombre: "María", ciudad: "Valencia" }
]

// 1. Busca el usuario con id 2
const usuario2 = ___

// 2. Busca el usuario llamado "María"
const maria = ___

// 3. Busca un usuario de Barcelona
const barcelonés = ___

console.log(usuario2)    // { id: 2, nombre: "Carlos", ciudad: "Barcelona" }
console.log(maria)       // { id: 3, nombre: "María", ciudad: "Valencia" }
console.log(barcelonés)  // { id: 2, nombre: "Carlos", ciudad: "Barcelona" }
```

**Solución esperada:**
<details>
<summary>Ver solución</summary>

```js
const usuario2 = usuarios.find((u) => u.id === 2)

const maria = usuarios.find((u) => u.nombre === "María")

const barcelonés = usuarios.find((u) => u.ciudad === "Barcelona")
```

**Nota:** `find()` devuelve un objeto, no un array. Si no encuentra nada, devuelve `undefined`.
</details>

---

## Ejercicio 9: some() - Comprobar si existe

**Objetivo:** Usar some para verificar si al menos un elemento cumple una condición.

```js
const tareas = [
  { id: 1, titulo: "Comprar pan", completada: true },
  { id: 2, titulo: "Hacer ejercicio", completada: false },
  { id: 3, titulo: "Estudiar", completada: true }
]

// 1. ¿Hay alguna tarea completada?
const hayCompletadas = ___

// 2. ¿Hay alguna tarea no completada?
const hayPendientes = ___

// 3. ¿Hay alguna tarea con id > 5?
const hayIdMayor5 = ___

console.log(hayCompletadas)  // true
console.log(hayPendientes)   // true
console.log(hayIdMayor5)     // false
```

**Solución esperada:**
<details>
<summary>Ver solución</summary>

```js
const hayCompletadas = tareas.some((t) => t.completada === true)

const hayPendientes = tareas.some((t) => t.completada === false)

const hayIdMayor5 = tareas.some((t) => t.id > 5)
```

**Nota:** `some()` devuelve `true` o `false`, no un array.
</details>

---

## Ejercicio 10: Encadenamiento de métodos

**Objetivo:** Combinar múltiples métodos para transformaciones complejas.

```js
const productos = [
  { nombre: "Mouse", precio: 15, stock: true },
  { nombre: "Teclado", precio: 45, stock: true },
  { nombre: "Monitor", precio: 250, stock: false },
  { nombre: "Webcam", precio: 60, stock: true }
]

// 1. Obtén los nombres de productos con stock
const conStock = ___

// 2. Obtén nombres de productos caros (> 40) con stock
const carosConStock = ___

// 3. Obtén nombres de todos los productos ordenados por precio (caro primero)
// Hint: primero ordena con sort
const porPrecio = ___

console.log(conStock)         // ["Mouse", "Teclado", "Webcam"]
console.log(carosConStock)    // ["Teclado", "Webcam"]
```

**Solución esperada:**
<details>
<summary>Ver solución</summary>

```js
const conStock = productos
  .filter(p => p.stock === true)
  .map(p => p.nombre)

const carosConStock = productos
  .filter(p => p.precio > 40)
  .filter(p => p.stock === true)
  .map(p => p.nombre)

// O en una sola línea:
const carosConStock = productos
  .filter(p => p.precio > 40 && p.stock === true)
  .map(p => p.nombre)

const porPrecio = productos
  .sort((a, b) => b.precio - a.precio)
  .map(p => p.nombre)
```

**Nota:** El encadenamiento es muy potente y se usa constantemente en Vue.
</details>

---

## Ejercicio 11: Combinación de métodos avanzada

**Objetivo:** Resolver un caso realista complejo.

```js
const ordenes = [
  { id: 1, cliente: "Ana", total: 150, estado: "entregada" },
  { id: 2, cliente: "Carlos", total: 80, estado: "pendiente" },
  { id: 3, cliente: "María", total: 320, estado: "entregada" },
  { id: 4, cliente: "Luis", total: 45, estado: "cancelada" },
  { id: 5, cliente: "Sofia", total: 200, estado: "entregada" }
]

// 1. Obtén el nombre de clientes con órdenes entregadas
const clientesEntregadas = ___

// 2. Obtén el total de dinero en órdenes entregadas (usa reduce)
const ingresoTotal = ___

// 3. ¿Hay alguna orden pendiente?
const hayPendientes = ___

// 4. Obtén las órdenes de valor mayor a 100, solo entregadas
const ordenesFuertes = ___

console.log(clientesEntregadas) // ["Ana", "María", "Sofia"]
console.log(ingresoTotal)       // 670
console.log(hayPendientes)      // true
```

**Solución esperada:**
<details>
<summary>Ver solución</summary>

```js
const clientesEntregadas = ordenes
  .filter(o => o.estado === "entregada")
  .map(o => o.cliente)

const ingresoTotal = ordenes
  .filter(o => o.estado === "entregada")
  .reduce((suma, o) => suma + o.total, 0)

const hayPendientes = ordenes.some(o => o.estado === "pendiente")

const ordenesFuertes = ordenes
  .filter(o => o.total > 100 && o.estado === "entregada")
```
</details>

---

## Ejercicio Desafío: Gestor de tienda

**Objetivo:** Resolver un caso realista completo.

```js
const productos = [
  { id: 1, nombre: "Laptop", categoria: "electrónica", precio: 1200, vendidos: 5 },
  { id: 2, nombre: "Mouse", categoria: "accesorios", precio: 25, vendidos: 120 },
  { id: 3, nombre: "Monitor", categoria: "electrónica", precio: 300, vendidos: 12 },
  { id: 4, nombre: "Teclado", categoria: "accesorios", precio: 80, vendidos: 45 },
  { id: 5, nombre: "Cable USB", categoria: "accesorios", precio: 5, vendidos: 300 }
]

// 1. Obtén los nombres de productos de la categoría "accesorios"
const accesorios = ___

// 2. Obtén productos que hayan vendido más de 50 unidades
const bestsellers = ___

// 3. Calcula el ingreso total (precio * vendidos)
const ingresoTotal = ___

// 4. Obtén el producto más vendido
const masCaro = ___

// 5. Crea un resumen: "Hay X productos, con ingreso total de $Y"
const resumen = () => {
  return `Hay ${___} productos, con ingreso total de $${___}`
}

console.log(accesorios)   // ["Mouse", "Teclado", "Cable USB"]
console.log(bestsellers)  // Productos vendidos > 50
console.log(ingresoTotal) // 77,625
console.log(masCaro)      // { id: 2, nombre: "Mouse", ... }
console.log(resumen())
```

**Solución esperada:**
<details>
<summary>Ver solución</summary>

```js
const accesorios = productos
  .filter(p => p.categoria === "accesorios")
  .map(p => p.nombre)

const bestsellers = productos
  .filter(p => p.vendidos > 50)
  .map(p => ({ nombre: p.nombre, vendidos: p.vendidos }))

const ingresoTotal = productos
  .reduce((suma, p) => suma + (p.precio * p.vendidos), 0)

const masCaro = productos.find(p => p.vendidos === Math.max(...productos.map(x => x.vendidos)))

const resumen = () => {
  return `Hay ${productos.length} productos, con ingreso total de $${ingresoTotal}`
}
```

**Nota:** Este es el tipo de operaciones que haremos constantemente en Vue cuando trabajes con datos.
</details>

---
