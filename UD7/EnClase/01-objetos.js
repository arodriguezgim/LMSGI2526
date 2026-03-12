const persona = {
    nombre: "Ana",
    edad: 23,
    email: "ana@name.me",
}

const diasSemana = ['Lunes','Martes','Miercoles']

diasSemana.push('Jueves')

diasSemana[0] = 'Domingo'
diasSemana.pop()
console.log(diasSemana)

persona.nombre = "Javier Sanz"

console.log(persona)