
# 2ª Parte – Arrays, Métodos Funcionales y Trabajo con Datos

# 1️⃣ Arrays en JavaScript

---

## 🔹 Crear un array

```js
const numeros = [10, 20, 30, 40]
```

Un array puede contener cualquier tipo:

```js
const mezcla = [10, "Hola", true, { nombre: "Ana" }]
```

---

## 🔹 Acceder a elementos

```js
console.log(numeros[0]) // 10
```

---

## 🔹 Modificar elementos

```js
numeros[1] = 25
```

---

## 🔹 Añadir y eliminar elementos

```js
numeros.push(50)      // añade al final
numeros.pop()         // elimina el último
numeros.unshift(5)    // añade al principio
numeros.shift()       // elimina el primero
```

⚠️ Estos métodos **mutan** el array original.

---

# 2️⃣ Recorrer arrays

---

## 🔹 Forma clásica (for)

```js
const numeros = [10, 20, 30]

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i])
}
```

Funciona… pero no es la forma moderna.

---

# 3️⃣ forEach()

Ejecuta una función por cada elemento.

```js
const numeros = [10, 20, 30]

numeros.forEach((numero) => {
  console.log(numero)
})
```

También podemos acceder al índice:

```js
numeros.forEach((numero, indice) => {
  console.log(indice, numero)
})
```

⚠️ `forEach` NO devuelve un nuevo array.

---

# 4️⃣ map() – MUY IMPORTANTE

Crea un nuevo array transformando el original.

---

## 🔹 Ejemplo básico

```js
const numeros = [1, 2, 3]

const dobles = numeros.map((numero) => numero * 2)

console.log(dobles)
// [2, 4, 6]
```

---

## 🔹 Diferencia clave

`map()`:

* No modifica el array original
* Devuelve uno nuevo

Esto es fundamental para trabajar con estado en Vue.

---

# 5️⃣ filter()

Devuelve un nuevo array con los elementos que cumplen una condición.

---

## 🔹 Ejemplo

```js
const numeros = [10, 15, 20, 25]

const mayoresDe18 = numeros.filter((numero) => numero > 18)

console.log(mayoresDe18)
// [20, 25]
```

---

# 6️⃣ find()

Devuelve el primer elemento que cumple la condición.

```js
const usuarios = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" }
]

const usuario = usuarios.find((u) => u.id === 2)

console.log(usuario)
// { id: 2, nombre: "Luis" }
```

⚠️ Devuelve un objeto, no un array.

---

# 7️⃣ some()

Devuelve `true` si al menos uno cumple la condición.

```js
const numeros = [5, 8, 12]

const hayMayoresDe10 = numeros.some(n => n > 10)

console.log(hayMayoresDe10)
// true
```

---

# 8️⃣ Arrays de objetos (MUY IMPORTANTE PARA VUE)

Esto es exactamente lo que usarán en componentes.

---

## 🔹 Ejemplo base

```js
const productos = [
  { id: 1, nombre: "Teclado", precio: 30 },
  { id: 2, nombre: "Ratón", precio: 20 },
  { id: 3, nombre: "Monitor", precio: 200 }
]
```

---

## 🔹 Mostrar nombres

```js
productos.forEach(p => console.log(p.nombre))
```

---

## 🔹 Obtener solo los nombres (map)

```js
const nombres = productos.map(p => p.nombre)
```

---

## 🔹 Filtrar productos caros

```js
const caros = productos.filter(p => p.precio > 50)
```

---

## 🔹 Buscar por ID

```js
const producto = productos.find(p => p.id === 2)
```

---

# 9️⃣ Encadenamiento de métodos

Podemos combinar métodos.

---

## 🔹 Ejemplo realista

```js
const productos = [
  { nombre: "Teclado", precio: 30 },
  { nombre: "Ratón", precio: 20 },
  { nombre: "Monitor", precio: 200 }
]

const resultado = productos
  .filter(p => p.precio > 25)
  .map(p => p.nombre)

console.log(resultado)
// ["Teclado", "Monitor"]
```

Esto se usa muchísimo en Vue.

---

# 🔟 Mutación vs Inmutabilidad

---

## 🔹 Mutar (modificar original)

```js
const numeros = [1, 2, 3]
numeros.push(4)
```

---

## 🔹 No mutar (crear nuevo array)

```js
const numeros = [1, 2, 3]
const nuevos = [...numeros, 4]
```

---

## 🧠 En Vue es recomendable no mutar directamente el estado complejo.

---

# Ejercicio para practicar en clase

## Gestión simple de alumnos

Dado:

```js
const alumnos = [
  { nombre: "Javi", nota: 8 },
  { nombre: "Alberto", nota: 5 },
  { nombre: "Quiles", nota: 9 },
  { nombre: "Hector", nota: 4 }
]
```

### Ejercicios:

1. Mostrar todos los nombres.
2. Crear un array solo con las notas.
3. Obtener los alumnos aprobados (nota >= 5).
4. Buscar al alumno llamado "Marta".
5. Obtener los nombres de los alumnos aprobados.

Solución final esperada (ejemplo):

```js
const aprobados = alumnos
  .filter(a => a.nota >= 5)
  .map(a => a.nombre)

console.log(aprobados)
```

---