// Simular una carga de 3 segundos
/*
function descargarDatos() {
    const inicio = Date.now()
    // Bloquear durante 3 segundos el programa
    while ( Date.now() - inicio < 3000 ){
        // Esperar...
    }
    console.log("Datos descargados")
}*/


console.log("Inicio")
setTimeout( ()=>{
    console.log("Después de 3 segundos")
}, 3000 )
console.log("Final")