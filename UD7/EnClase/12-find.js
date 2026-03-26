// filter devuelve TODOS los elementos que cumplen una condicion
// find devuelve SOLO EL PRIMER ELEMENTO que cumple la condicion
const usuarios = [
    {id:1, nombre: "Ana"},
    {id:2, nombre: "Iker"},
    {id:3, nombre: "David"}
]
//filter devuelve un array
const resultado1 = usuarios.filter( u => u.id === 2 )
console.log(resultado1[0].nombre)
// find me devuelve el objeto
const resultado2 = usuarios.find( u => u.id === 2)
console.log(resultado2.nombre)