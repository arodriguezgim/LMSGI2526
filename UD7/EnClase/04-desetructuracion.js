// Nos permite extrer los valores de objetos o de arrays facilmente
const persona = {
    nombre: "Dylan",
    edad: 20
}
/*
const name = persona.nombre
const age = persona.edad
*/
const { nombre, edad } = persona

console.log(nombre)
