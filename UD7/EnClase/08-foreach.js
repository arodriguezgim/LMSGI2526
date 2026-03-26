const alumnos = ["Hector", "Javi", "María", "Dylan"]
// forma antigua ( de SMR2 ) 
/*
for( let i = 0; i < alumnos.length; i++ ){
    console.log(alumnos[i])
}*/
// forma moderna
alumnos.forEach( (a) => {
    // Por cada elemento, ejecuta esta función
    console.log( a )
})
// forma moderna con índice
alumnos.forEach( ( alumno, indice) => {
    // Por cada elemento, ejecuta esta función
    console.log( `${indice +1 } - ${alumno}` )
})