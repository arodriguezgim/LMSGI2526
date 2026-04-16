// 1. Función tradicional → arrow function
function sumar(a, b) {
  return a + b
}
const sumarArrow = (a, b) => a + b

// 2. Función de una línea simplificada
const multiplicar = (a, b) =>  a * b

// 3. Sin parámetros
function obtenerFecha() {
  return new Date()
}
const obtenerFechaArrow = () => new Date()

// 4. Un solo parámetro
const cuadrado = (lado) => lado * lado

// 5. Retornar un objeto
const crearUsuario = (nombre, edad) => ({ nombre, edad })


// Prueba
console.log(sumarArrow(5, 3))
console.log(multiplicar(4, 5))
console.log(cuadrado(7))
console.log(crearUsuario("Javi", 20))