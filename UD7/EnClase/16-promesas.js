//Crear una Promesa
const miPromesa = new Promise((resolve, reject) => {
    // Codigo asíncrono
    setTimeout( ()=> {
        const exito = false

        if (exito) {
            resolve("Exito!! Aquí estan los datos")
        } else {
            reject("Error: algo salió mal!")
        }
    }, 2000 )
})

// Usar esa promesa
console.log("Inicio")
miPromesa
    .then( resultado => {
        console.log(resultado) // Si se resuelve
    })
    .catch( error => {
        console.log( error ) // Si falla
    })