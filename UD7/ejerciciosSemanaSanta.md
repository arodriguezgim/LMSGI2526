# 🎉 Ejercicios de Semana Santa – UD7

> **Objetivo:** Practicar y reforzar los conceptos de Parte 1 y Parte 2.
>
> **Instrucciones:** Completa estos ejercicios en tu tiempo libre. Las soluciones se darán después de vacaciones.
>
> **Consejo:** Prueba todo en la consola del navegador (F12).

---

# 📝 BLOQUE 1: Variables, tipos de datos y operadores (Parte 1)

---

## Ejercicio 1: Variables y tipos de datos

Declara las siguientes variables usando `let` y `const`:

```js
// 1. Una constante con tu nombre
___ nombreEstudiante = ___

// 2. Una variable con tu edad (que puede cambiar)
___ miEdad = ___

// 3. Una constante con el precio de un producto
___ precioProducto = ___

// 4. Una variable con un boolean indicando si es fin de semana
___ esFinDeSemana = ___

// 5. Una variable con null
___ valorVacio = ___

// 6. Modifica la edad después de declararla
miEdad = ___

// 7. Intenta modificar el nombre (¿debería funcionar?)
nombreEstudiante = "Otro nombre"  // ¿Error o no?
```

---

## Ejercicio 2: Operadores aritméticos

Calcula lo siguiente:

```js
// 1. Suma de 15 + 8
const suma = ___

// 2. Resta de 100 - 35
const resta = ___

// 3. Multiplicación de 7 * 8
const multiplicacion = ___

// 4. División de 50 / 4
const division = ___

// 5. Módulo de 17 % 5 (resto)
const modulo = ___

// 6. Potencia de 2 ** 3
const potencia = ___

// 7. Raíz cuadrada de 16 (usa Math.sqrt)
const raiz = ___

// 8. Número aleatorio entre 0 y 1
const aleatorio = ___

console.log(suma, resta, multiplicacion, division, modulo, potencia, raiz, aleatorio)
```

---

## Ejercicio 3: Operadores de comparación

Determina si estas comparaciones son true o false:

```js
// 1. ¿5 es mayor que 3?
console.log(5 > 3)  // true o false?

// 2. ¿10 es igual a "10"?
console.log(10 == "10")  // true o false? (==)

// 3. ¿10 es estrictamente igual a "10"?
console.log(10 === "10")  // true o false? (===)

// 4. ¿8 es diferente de 8?
console.log(8 != 8)  // true o false?

// 5. ¿20 es mayor o igual a 20?
console.log(20 >= 20)  // true o false?

// 6. ¿"Hola" es igual a "hola"?
console.log("Hola" === "hola")  // true o false?

// 7. ¿true es estrictamente igual a 1?
console.log(true === 1)  // true o false?

// 8. ¿null es igual a undefined?
console.log(null == undefined)  // true o false?
```

---

## Ejercicio 4: Operadores lógicos

Completa las condiciones:

```js
// 1. ¿5 > 3 Y 4 < 6?
console.log(___ && ___)

// 2. ¿5 > 10 O 4 < 6?
console.log(___ || ___)

// 3. ¿NO es verdad que 5 > 10?
console.log(!(___))

// 4. Crea una condición que sea true:
//    "La edad es mayor a 18 Y menor a 65"
const edad = 30
console.log(___ && ___)

// 5. Crea una condición que sea true:
//    "El nombre es 'Ana' O el nombre es 'Carlos'"
const nombre = "Ana"
console.log(___ || ___)

// 6. Crea una condición que sea true:
//    "NO es verdad que esté lloviendo"
const esLluvia = false
console.log(!(___))
```

---

## Ejercicio 5: Template strings

Completa con template strings:

```js
const nombre = "María"
const edad = 25
const ciudad = "Madrid"

// 1. "Hola María"
const saludo = ___

// 2. "María tiene 25 años"
const presentacion = ___

// 3. "María es de Madrid y tiene 25 años"
const presentacionCompleta = ___

// 4. Con operación dentro: "María tendrá 26 años el próximo año"
const proximoAnio = ___

// 5. Con condicional: "María es adulta" o "María es menor"
const estadoEdad = ___

console.log(saludo)
console.log(presentacion)
console.log(presentacionCompleta)
console.log(proximoAnio)
console.log(estadoEdad)
```

---

## Ejercicio 6: Destructuring básico

```js
// 1. Desestructura un array
const numeros = [10, 20, 30]
const [primero, segundo] = ___

// 2. Desestructura y omite elementos
const colores = ["rojo", "azul", "verde"]
const [color1, , color3] = ___

// 3. Desestructura un objeto
const persona = { nombre: "Javier", edad: 28, ciudad: "Barcelona" }
const { nombre, edad } = ___

// 4. Desestructura renombrando
const libro = { titulo: "Don Quijote", autor: "Cervantes" }
const { titulo: nombreLibro, autor: escritor } = ___

// 5. Desestructura con spread operator
const primeros = [1, 2, 3]
const [a, b, ...resto] = ___

console.log(primero, segundo)
console.log(nombre, edad)
console.log(nombreLibro, escritor)
console.log(a, b, resto)
```

---

## Ejercicio 7: Spread operator

```js
// 1. Copia un array y agrega un elemento
const original = [1, 2, 3]
const copia = [___, ___]

// 2. Combina dos arrays
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const combinado = ___

// 3. Copia un objeto y modifica una propiedad
const persona = { nombre: "Ana", edad: 30 }
const personaActualizada = ___

// 4. Combina dos objetos
const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }
const combinadoObj = ___

// 5. Copia un array y agrega múltiples elementos
const base = [10, 20]
const conAgregar = ___

console.log(copia)
console.log(combinado)
console.log(personaActualizada)
console.log(combinadoObj)
console.log(conAgregar)
```

---

## Ejercicio 8: Arrow functions

Convierte a arrow functions:

```js
// 1. Función tradicional → arrow function
function sumar(a, b) {
  return a + b
}
const sumarArrow = ___

// 2. Función de una línea simplificada
const multiplicar = ___

// 3. Sin parámetros
function obtenerFecha() {
  return new Date()
}
const obtenerFechaArrow = ___

// 4. Un solo parámetro
const cuadrado = ___

// 5. Retornar un objeto
const crearUsuario = (nombre, edad) => ___

// Prueba
console.log(sumarArrow(5, 3))
console.log(multiplicar(4, 5))
console.log(cuadrado(7))
console.log(crearUsuario("Javi", 20))
```

---

# 📚 BLOQUE 2: Arrays y métodos funcionales (Parte 2)

---

## Ejercicio 9: Métodos básicos de arrays

```js
const frutas = ["manzana", "plátano"]

// 1. Añade "naranja" al final
___

// 2. Elimina el último elemento
___

// 3. Añade "fresa" al principio
___

// 4. Elimina el primero
___

// 5. Accede al último elemento (sin index fijo)
const ultima = ___

// 6. Obtén la longitud
const longitud = ___

// Muestra el array final
console.log(frutas)
```

---

## Ejercicio 10: forEach - Recorrer arrays

```js
const numeros = [5, 10, 15, 20]

// 1. Muestra cada número con forEach
numeros.forEach((_) => {
  ___
})

// 2. Muestra cada número con su índice
numeros.forEach((numero, indice) => {
  ___
})

// 3. Calcula la suma usando forEach
let suma = 0
numeros.forEach((_) => {
  ___
})
console.log("Suma:", suma)

// 4. forEach con array de objetos
const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Carlos", edad: 30 }
]
usuarios.forEach((_) => {
  ___
})
```

---

## Ejercicio 11: map() - Transformar arrays

```js
const numeros = [1, 2, 3, 4, 5]

// 1. Multiplica cada número por 3
const triplicados = ___

// 2. Convierte cada número a string
const strings = ___

// 3. Crea objetos con propiedades
const objetos = ___
// Resultado esperado: [
//   { valor: 1, doble: 2 },
//   { valor: 2, doble: 4 },
//   ...
// ]

// 4. map con array de objetos
const personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Carlos", edad: 30 }
]
const nombres = ___

// 5. map encadenado
const resultado = numeros
  .map(n => n * 2)
  .map(n => n + 1)
// ¿Qué valores contiene resultado?

console.log(triplicados)
console.log(strings)
console.log(objetos)
console.log(nombres)
console.log(resultado)
```

---

## Ejercicio 12: filter() - Seleccionar elementos

```js
const numeros = [5, 12, 8, 20, 3, 15, 9, 22]

// 1. Números mayores a 10
const mayores = ___

// 2. Números pares
const pares = ___

// 3. Números entre 5 y 15 (inclusive)
const rango = ___

// 4. filter con array de objetos
const alumnos = [
  { nombre: "Javi", nota: 8 },
  { nombre: "Alberto", nota: 4 },
  { nombre: "Quiles", nota: 9 },
  { nombre: "Hector", nota: 5 }
]
const aprobados = ___

// 5. Nombres de aprobados
const nombresAprobados = ___

console.log(mayores)
console.log(pares)
console.log(rango)
console.log(aprobados)
console.log(nombresAprobados)
```

---

## Ejercicio 13: find() - Buscar un elemento

```js
const usuarios = [
  { id: 1, nombre: "Ana", ciudad: "Madrid" },
  { id: 2, nombre: "Carlos", ciudad: "Barcelona" },
  { id: 3, nombre: "María", ciudad: "Valencia" },
  { id: 4, nombre: "Luis", ciudad: "Madrid" }
]

// 1. Encuentra el usuario con id 2
const usuario2 = ___

// 2. Encuentra el usuario llamado "María"
const maria = ___

// 3. Encuentra el primer usuario de Madrid
const madrileño = ___

// 4. Encuentra un usuario que no existe
const noExiste = ___

// 5. Verifica si existe antes de acceder
if (___) {
  console.log(maria.nombre)
}

console.log(usuario2)
console.log(maria)
console.log(madrileño)
console.log(noExiste)
```

---

## Ejercicio 14: some() - Verificar condición

```js
const numeros = [2, 4, 6, 8, 10]

// 1. ¿Hay algún número impar?
const hayImpar = ___

// 2. ¿Hay algún número mayor a 15?
const hayMayor15 = ___

// 3. ¿Hay algún número menor a 0?
const hayNegativo = ___

// 4. some con array de objetos
const tareas = [
  { titulo: "Comprar pan", hecha: true },
  { titulo: "Estudiar", hecha: false },
  { titulo: "Ejercicio", hecha: true }
]

// 5. ¿Hay alguna tarea pendiente?
const hayPendientes = ___

// 6. ¿Hay alguna tarea completada?
const hayCompletadas = ___

console.log(hayImpar)
console.log(hayMayor15)
console.log(hayNegativo)
console.log(hayPendientes)
console.log(hayCompletadas)
```

---

## Ejercicio 15: Encadenamiento básico

```js
const productos = [
  { nombre: "Mouse", precio: 15, disponible: true },
  { nombre: "Teclado", precio: 45, disponible: false },
  { nombre: "Monitor", precio: 250, disponible: true },
  { nombre: "Webcam", precio: 60, disponible: true }
]

// 1. Nombres de productos disponibles
const disponibles = ___

// 2. Nombres de productos caros (> 40)
const caros = ___

// 3. Nombres de productos disponibles Y caros
const carosDisponibles = ___

// 4. Precios de productos disponibles
const preciosDisponibles = ___

console.log(disponibles)
console.log(caros)
console.log(carosDisponibles)
console.log(preciosDisponibles)
```

---

## Ejercicio 16: Combinación de métodos

```js
const estudiantes = [
  { nombre: "Javi", notas: [8, 7, 9] },
  { nombre: "Alberto", notas: [5, 6, 4] },
  { nombre: "Quiles", notas: [9, 9, 8] },
  { nombre: "Hector", notas: [6, 5, 7] }
]

// 1. Calcula el promedio de cada estudiante
// Pista: usa map y reduce dentro
const promedios = ___
// [8, 5, 8.67, 6]

// 2. Nombres de estudiantes con promedio >= 7
const buenos = ___

// 3. Promedio total de la clase
const promediaClase = ___

console.log(promedios)
console.log(buenos)
console.log(promediaClase)
```

---

## Ejercicio 17: Transformar estructura de datos

```js
// Tienes este array...
const datosPlanos = [
  { id: 1, tipo: "entrada", cantidad: 100 },
  { id: 2, tipo: "salida", cantidad: 30 },
  { id: 3, tipo: "entrada", cantidad: 50 },
  { id: 4, tipo: "salida", cantidad: 20 }
]

// 1. Crea dos arrays separados: entradas y salidas
const entradas = ___
const salidas = ___

// 2. Suma totales
const totalEntradas = ___
const totalSalidas = ___

// 3. Saldo final
const saldo = ___

// 4. Convierte a otro formato
const nuevoFormato = ___
// Resultado esperado: [
//   { tipo: "entrada", total: 150 },
//   { tipo: "salida", total: 50 }
// ]

console.log(entradas)
console.log(salidas)
console.log("Saldo:", saldo)
console.log(nuevoFormato)
```

---

## Ejercicio 18: Casos reales de tienda

```js
const carrito = [
  { producto: "Laptop", precio: 1200, cantidad: 1 },
  { producto: "Mouse", precio: 25, cantidad: 2 },
  { producto: "Teclado", precio: 80, cantidad: 1 },
  { producto: "Monitor", precio: 300, cantidad: 1 }
]

// 1. Obtén solo los nombres de productos
const productosEnCarrito = ___

// 2. Calcula el costo total de cada línea (precio * cantidad)
const costos = ___

// 3. Calcula el total del carrito
const totalCarrito = ___

// 4. Obtén productos que cuesten más de $100
const productosCaros = ___

// 5. Crea un resumen del carrito
const resumen = ___
// Resultado esperado:
// [
//   { producto: "Laptop", subtotal: 1200 },
//   { producto: "Mouse", subtotal: 50 },
//   ...
// ]

console.log(productosEnCarrito)
console.log(costos)
console.log("Total:", totalCarrito)
console.log(productosCaros)
console.log(resumen)
```

---

## Ejercicio 19: Filtrar y transformar simultaneamente

```js
const empleados = [
  { nombre: "Ana", departamento: "IT", salario: 3000 },
  { nombre: "Carlos", departamento: "HR", salario: 2500 },
  { nombre: "María", departamento: "IT", salario: 3500 },
  { nombre: "Luis", departamento: "IT", salario: 2800 },
  { nombre: "Sofia", departamento: "Finance", salario: 3200 }
]

// 1. Nombres de empleados del departamento IT
const itEmpleados = ___

// 2. Empleados con salario mayor a 3000
const binSalario = ___

// 3. Nombres de empleados IT con salario > 3000
const itBienPagados = ___

// 4. Crear reporte de IT
const reporteIT = ___
// Resultado esperado:
// [
//   { nombre: "Ana", salario: 3000 },
//   { nombre: "María", salario: 3500 },
//   { nombre: "Luis", salario: 2800 }
// ]

console.log(itEmpleados)
console.log(binSalario)
console.log(itBienPagados)
console.log(reporteIT)
```

---

## Ejercicio 20: Ordenar arrays

```js
const numeros = [5, 2, 9, 1, 8, 3]
const palabras = ["zebra", "apple", "manzana", "banana"]

// 1. Ordena números de menor a mayor
const ordenadosMenor = ___

// 2. Ordena números de mayor a menor
const ordenadosMayor = ___

// 3. Ordena palabras alfabéticamente
const palabrasOrdenadas = ___

// 4. Ordena array de objetos por edad
const personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Carlos", edad: 20 },
  { nombre: "María", edad: 30 }
]
const porEdad = ___

// 5. Ordena por precio (descendente)
const productos = [
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 80 },
  { nombre: "Monitor", precio: 250 }
]
const porPrecioDesc = ___

console.log(ordenadosMenor)
console.log(ordenadosMayor)
console.log(palabrasOrdenadas)
console.log(porEdad)
console.log(porPrecioDesc)
```

---

## Ejercicio 21: Desafío - Análisis de datos

```js
const ventas = [
  { mes: "Enero", producto: "Laptop", cantidad: 5, precio: 1200 },
  { mes: "Enero", producto: "Mouse", cantidad: 20, precio: 25 },
  { mes: "Febrero", producto: "Laptop", cantidad: 3, precio: 1200 },
  { mes: "Febrero", producto: "Teclado", cantidad: 10, precio: 80 },
  { mes: "Marzo", producto: "Monitor", cantidad: 8, precio: 300 },
  { mes: "Marzo", producto: "Laptop", cantidad: 4, precio: 1200 }
]

// 1. ¿Cuál es el producto más vendido?
const productoMasVendido = ___

// 2. ¿Cuántas laptops se vendieron en total?
const totalLaptops = ___

// 3. ¿Cuál es el ingreso total?
const ingresoTotal = ___

// 4. Ingreso por mes
const ingresosPorMes = ___

// 5. Productos vendidos en Febrero
const enFebrero = ___

console.log("Producto más vendido:", productoMasVendido)
console.log("Total laptops:", totalLaptops)
console.log("Ingreso total:", ingresoTotal)
console.log("Ingresos por mes:", ingresosPorMes)
console.log("Productos en Febrero:", enFebrero)
```

---

## Ejercicio 22: Desafío - Gestión de biblioteca

```js
const libros = [
  { id: 1, titulo: "Don Quijote", autor: "Cervantes", año: 1605, paginas: 863, prestado: false },
  { id: 2, titulo: "1984", autor: "Orwell", año: 1949, paginas: 328, prestado: true },
  { id: 3, titulo: "Cien años", autor: "García Márquez", año: 1967, paginas: 417, prestado: false },
  { id: 4, titulo: "Orgullo y prejuicio", autor: "Austen", año: 1813, paginas: 432, prestado: true },
  { id: 5, titulo: "Crimen y castigo", autor: "Dostoievski", año: 1866, paginas: 723, prestado: false }
]

// 1. Títulos de libros disponibles
const disponibles = ___

// 2. Títulos de libros escritos antes de 1900
const antiguos = ___

// 3. ¿Hay algún libro prestado?
const hayPrestados = ___

// 4. Promedio de páginas
const promedioPaginas = ___

// 5. Libro más largo
const masLargo = ___

// 6. Obtén el libro con id 3
const libro3 = ___

// 7. Libros ordenados por año (más recientes primero)
const porAnio = ___

console.log("Disponibles:", disponibles)
console.log("Antiguos:", antiguos)
console.log("¿Hay prestados?:", hayPrestados)
console.log("Promedio páginas:", promedioPaginas)
console.log("Más largo:", masLargo)
console.log("Libro #3:", libro3)
console.log("Ordenados:", porAnio)
```

---

## Ejercicio 23: Desafío - Red social

```js
const posts = [
  { id: 1, autor: "Ana", contenido: "Hola mundo", likes: 5, comentarios: 2 },
  { id: 2, autor: "Carlos", contenido: "Adiós mundo", likes: 10, comentarios: 3 },
  { id: 3, autor: "María", contenido: "Buenas noches", likes: 8, comentarios: 1 },
  { id: 4, autor: "Ana", contenido: "Segundo post", likes: 15, comentarios: 5 },
  { id: 5, autor: "Luis", contenido: "Mi primer post", likes: 2, comentarios: 0 }
]

// 1. Todos los autores
const autores = ___

// 2. Posts con más de 5 likes
const populares = ___

// 3. Posts de Ana
const deAna = ___

// 4. Contenido de posts populares (likes > 7)
const contenidoPopular = ___

// 5. Post con más comentarios
const masComentado = ___

// 6. Promedio de likes
const promedioLikes = ___

// 7. ¿Hay algún post sin comentarios?
const hayPostsSinComentarios = ___

// 8. Usuarios ordenados por número de posts
const usuariosPorActividad = ___

console.log("Autores:", autores)
console.log("Populares:", populares)
console.log("De Ana:", deAna)
console.log("Contenido popular:", contenidoPopular)
console.log("Más comentado:", masComentado)
console.log("Promedio likes:", promedioLikes)
console.log("¿Hay sin comentarios?:", hayPostsSinComentarios)
console.log("Por actividad:", usuariosPorActividad)
```

---

## Ejercicio 24: Desafío integrador (FINAL)

```js
// Sistema de puntuación de videojuegos

const jugadores = [
  { id: 1, nombre: "Player1", puntuacion: 2500, nivel: 5, activo: true },
  { id: 2, nombre: "Player2", puntuacion: 3200, nivel: 7, activo: true },
  { id: 3, nombre: "Player3", puntuacion: 1800, nivel: 3, activo: false },
  { id: 4, nombre: "Player4", puntuacion: 4100, nivel: 9, activo: true },
  { id: 5, nombre: "Player5", puntuacion: 2900, nivel: 6, activo: true },
  { id: 6, nombre: "Player6", puntuacion: 900, nivel: 1, activo: false }
]

// 1. Nombre y puntuación de jugadores activos
const activos = ___

// 2. ¿Hay algún jugador con puntuación > 4000?
const haySuperestrella = ___

// 3. Promedio de puntuación de jugadores activos
const promedioPuntosActivos = ___

// 4. Jugador con mayor puntuación
const campeon = ___

// 5. Jugadores ordenados por puntuación (de mayor a menor)
const ranking = ___

// 6. Nombres de jugadores nivel 5 o superior
const jugadoresAvanzados = ___

// 7. Obtén un jugador específico por nombre
const buscarJugador = (nombre) => ___

// 8. Crea un reporte
const reporte = ___
// Resultado esperado: [
//   { nombre: "Player1", puntuacion: 2500, estado: "activo" },
//   { nombre: "Player2", puntuacion: 3200, estado: "activo" },
//   ...
// ]

console.log("Jugadores activos:", activos)
console.log("¿Hay superestrella?:", haySuperestrella)
console.log("Promedio activos:", promedioPuntosActivos)
console.log("Campeón:", campeon)
console.log("Ranking:", ranking)
console.log("Avanzados:", jugadoresAvanzados)
console.log("Player2 es:", buscarJugador("Player2"))
console.log("Reporte:", reporte)
```

---
