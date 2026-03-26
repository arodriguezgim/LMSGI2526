// Crear un array
const frutas = ["manzana","pera","melocoton"]

frutas[1] = "piña"

console.log(frutas)
// Nos devuelve el tamaño del array
console.log( frutas.length )
// Queremos sacar el ultimo valor
console.log( frutas[ frutas.length -1 ] ) // melocoton

const carrito = ["Raton", "Monitor"]
console.log( carrito )

// con pop eliminamos el último elemento
//carrito.pop()
//console.log( carrito )
// unshift añade al principio
//carrito.unshift("Webcam")
// push añade al final
carrito.push("Webcam")

console.log( carrito )

// shift quita el primer elemento
const lista2 = carrito.shift()
console.log(`lista2 es: ${carrito}` )



