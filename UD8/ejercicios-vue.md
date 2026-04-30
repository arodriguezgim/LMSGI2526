# Ejercicios Repaso de Vue

```js
const productos = [
  { id: 1,  nombre: 'Portátil',      precio: 999,  stock: 12,  categoria: 'Electrónica' },
  { id: 2,  nombre: 'Teclado',     precio: 49,   stock: 34,  categoria: 'Periféricos' },
  { id: 3,  nombre: 'Monitor',     precio: 320,  stock: 8,   categoria: 'Electrónica' },
  { id: 4,  nombre: 'Ratón',       precio: 25,   stock: 60,  categoria: 'Periféricos' },
  { id: 5,  nombre: 'Auriculares', precio: 89,   stock: 20,  categoria: 'Audio'       },
  { id: 6,  nombre: 'Webcam',      precio: 75,   stock: 15,  categoria: 'Periféricos' },
  { id: 7,  nombre: 'SSD 1TB',    precio: 110,  stock: 27,  categoria: 'Almacenamiento' },
  { id: 8,  nombre: 'Hub USB',    precio: 35,   stock: 45,  categoria: 'Periféricos' },
  { id: 9,  nombre: 'Altavoces',  precio: 130,  stock: 9,   categoria: 'Audio'       },
  { id: 10, nombre: 'Alfombrilla',precio: 18,   stock: 80,  categoria: 'Periféricos' },
]


const estudiantes = [
  { id: 1,  nombre: 'Dani Remón',    nota: 9.2,  aprobado: true,  curso: 'DAW' },
  { id: 2,  nombre: 'Luis Martín',   nota: 4.8,  aprobado: false, curso: 'DAM' },
  { id: 3,  nombre: 'Sara López',    nota: 7.5,  aprobado: true,  curso: 'ASIR' },
  { id: 4,  nombre: 'Carlos Pérez', nota: 6.0,  aprobado: true,  curso: 'DAW' },
  { id: 5,  nombre: 'Diego Quiles',   nota: 3.1,  aprobado: false, curso: 'DAM' },
  { id: 6,  nombre: 'Pedro Sanz',   nota: 8.8,  aprobado: true,  curso: 'ASIR' },
  { id: 7,  nombre: 'Elena Vega',   nota: 5.5,  aprobado: true,  curso: 'DAW' },
  { id: 8,  nombre: 'Hector Enguita',   nota: 2.9,  aprobado: false, curso: 'DAM' },
  { id: 9,  nombre: 'Hector Lozano', nota: 9.7,  aprobado: true,  curso: 'ASIR' },
  { id: 10, nombre: 'Tomás Gil',    nota: 7.0,  aprobado: true,  curso: 'DAW' },
]

```

## Ejercicio  v-for 1:
- Utilizando los dos arrays anteriores, crea un componente que recorra los objetos y los muestre en pantalla.

## Ejercicio  v-for v-if:

- Catálogo de productos con stock bajo: Muestra una lista con todos los productos. Junto a los que tengan un stock menor o igual a 10 unidades, añade el texto "¡Pocas unidades!". El resto se muestra con normalidad.
- Acta de notas del curso: Genera una tabla con todos los estudiantes. En la columna Resultado, muestra "Aprobado" si aprobado es true, o "Suspenso" si es false. Usa v-if y v-else para alternar entre las dos celdas.

## Ejercicio 1:

- Agrega un botón para disminuir el contador.
- Agrega un botón para resetear el contador.
- Pinta el contador en rojo cuando el valor sea menor a cero.
- Pinta el contador en verde cuando el valor sea mayor a cero.


## Ejercicio 2:

- Agrega un array y su respectivo método y botón add para almacenar los números favoritos del usuario.
- Pinta ese array utilizando v-for.
- Utiliza :disabled en el botón add, para que solo se pueda presionar si el array no contiene números repetidos. (utiliza una propiedad computada).

<b>:disabled</b> si es true el botón se bloquea:

```html
<button @click="add" :disabled="true">Add</button>

```