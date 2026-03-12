// ...
// Me sirve para operar con arrays y con objetos, me permite expandirlos

const numeros = [1, 2, 3, 4, 'Cinco', true ]

const listaNumeros = [ ...numeros, 7, 8, ...numeros ]

listaNumeros[0] = 'Alberto'

console.log(listaNumeros.length)

const listaCopiada = [...listaNumeros]

/// Esto tambien se puede hacer con objetos

const persona = {
    nombre: "Alberto",
    edad: 40,
}

const personaCompleta = {
    ...persona,
    ciudad: "Teruel",
    codigoPostal: 44002,
    email: "alberto@gmail.es"
}

personaCompleta.email = "hola@dam.com"

console.log(personaCompleta)