const numeros = [ 3,4,6]
//forEach - solo itera, NO devuelve nada
const r1 = numeros.forEach( n => n * 2 )
console.log(r1)
// map - transforma y devuelve un nuevo array
const r2 = numeros.map( n => n*2 )
console.log(r2)