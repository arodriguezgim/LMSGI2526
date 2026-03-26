const numeros = [1 , 2, 3, 4, 5 , 6 , 7 , 8 ]
/*
const dobles = numeros.map( (numero) => {
    console.log(`Procesando: ${numero}`)
    return numero * 2
})*/
const dobles = numeros.map( n => n * 2 )

//console.log( numeros )
console.log( dobles )
// Necesito que todos valores del array numeros que sean divisibles por dos me los multipliques por 100
const problema = numeros.map( n => {
    if ( n % 2 === 0 ){
        return n*100
    }
    return n
})
console.log( problema )
// CASO REAL 
const usuariosDesdeServidor = [
    {id: 1, nombre: "Ana", edad: 17 },
    {id: 2, nombre: "Hector", edad: 19 },
    {id: 3, nombre: "Remon", edad: 20 },
]
// Necesitamos en la UI solo los nombres
const nombres = usuariosDesdeServidor.map( u => u.nombre )
console.log( nombres )
// Puedo crear objetos transformados
const usuariosFormateados =  usuariosDesdeServidor.map( u => ({
    label: u.nombre,
    valor: u.id,
    esAdulto: u.edad >= 18
}))

console.log( usuariosFormateados[2] )