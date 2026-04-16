fetch('https://pokeapi.co/api/v2/pokemon/') // Esto no va a traer los pokemones, lee las Apis
.then(   // Va a esperar una promesa. Le hemos de decir que obtendremos un json y se lo vamos a decir con forma de flecha
    res => res.json()
)
.then(
    data => {
        data.results.forEach(element => {
            console.log(element.name)
        });
    }
)
// async / await

const obtenerUsuarios = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        //console.log(data[4].name)
        data.forEach( usuario => {
            console.log(usuario.name)
        })
    } catch (error) {
        console.log(error)
    }
}

obtenerUsuarios()