
# 1️⃣ Declaración de variables

## ❌ Antes (forma antigua)

```js
var nombre = "Alberto"
```

Problema:

* `var` no respeta el ámbito de bloque.
* Puede generar errores difíciles de detectar.

---

## ✅ Forma moderna

### 🔹 `let`

Se usa cuando el valor va a cambiar.

```js
let edad = 20
edad = 21
```

---

### 🔹 `const`

Se usa cuando el valor **no debe cambiar**.

```js
const nombre = "Carlos"
```

⚠️ Importante:

Con objetos y arrays, `const` impide reasignar la variable, pero no modificar su contenido.

```js
const persona = {
  nombre: "Ana"
}

persona.nombre = "Javier Sanz" // ✅ permitido
persona = {} // ❌ error
```

---

## 🧠 Regla práctica

> Usa siempre `const` por defecto.
> Usa `let` solo cuando necesites modificar el valor.

---

# 2️⃣ Arrow Functions (Funciones Flecha)

Una **arrow function** es una forma moderna y concisa de escribir funciones en JavaScript. Se define usando la sintaxis de flecha `=>`.

## ¿Qué es una función de flecha?

Es simplemente otra manera de crear funciones que:
* Es más compacta que la sintaxis tradicional
* Tiene una sintaxis más clara y legible
* Se usa mucho en código moderno (especialmente en Vue, React, etc.)
* **No crea su propio `this`** (esto es importante, lo veremos después)


---

## � Sintaxis básica

La estructura general es:

```
(parámetros) => { cuerpo de la función }
```

o más simplificada:

```
(parámetros) => valor_a_retornar
```

---

## �🔹 Función tradicional

```js
function saludar(nombre) {
  return "Hola " + nombre
}
```

---

## 🔹 Arrow function equivalente

```js
const saludar = (nombre) => {
  return "Hola " + nombre
}
```

**Explicación:**
* `const saludar` = guardamos la función en una variable
* `(nombre)` = parámetro de entrada
* `=>` = símbolo de flecha (define que es una arrow function)
* `{ return "Hola " + nombre }` = cuerpo de la función

---

## 🔹 Versión simplificada (una sola línea)

Si solo devuelve algo, se puede omitir `{}` y `return`:

```js
const saludar = (nombre) => "Hola " + nombre
```

⚠️ **Nota:** En la forma simplificada, se devuelve automáticamente el valor.

---

## 🔹 Con varios parámetros

```js
const sumar = (a, b) => a + b
```

```js
console.log(sumar(5, 3))  // 8
```

---

## 🔹 Sin parámetros

```js
const obtenerFecha = () => new Date()
```

Si no hay parámetros, usamos `()` vacías.

---

## 🔹 Un parámetro (sin paréntesis)

Si solo hay UN parámetro, puedes omitir los paréntesis:

```js
const multiplicar = x => x * 2
```

Es equivalente a:

```js
const multiplicar = (x) => x * 2
```

---

## 🔹 Múltiples líneas

Si necesitas más de una línea, debes usar `{}` y `return`:

```js
const calcular = (a, b) => {
  const suma = a + b
  const resultado = suma * 2
  return resultado
}
```

---

## Comparación visual

| Función Tradicional | Arrow Function | Arrow Simplificada |
|---|---|---|
| `function sum(a, b) { return a + b }` | `const sum = (a, b) => { return a + b }` | `const sum = (a, b) => a + b` |
|  | |  |

---

## 🎓 Diferencias importantes con funciones tradicionales

### 1️⃣ **No crean su propio `this`**

En funciones tradicionales:
```js
const objeto = {
  nombre: "Ana",
  saludar: function() {
    console.log(this.nombre)  // "Ana"
  }
}
```

En arrow functions heredan `this` del contexto exterior (esto es bueno en Vue).

### 2️⃣ **Más concisas**

Las arrow functions son más cortas y fáciles de leer.

### 3️⃣ **No se pueden usar como constructores**

```js
// ✅ Esto funciona
function Persona(nombre) {
  this.nombre = nombre
}

// ❌ Esto NO funciona
const Persona = (nombre) => {
  this.nombre = nombre
}
```

---

## 💡 Cuándo usar cada una

### ✅ Usa arrow functions cuando:

* Necesites pasar como callback (en `.map()`, `.filter()`, etc.)
* Trabajes con Vue (funciones de composición, watchers, etc.)
* Necesites que `this` se refiera al contexto exterior
* Quieras código más compacto y legible

### ✅ Usa funciones tradicionales cuando:

* Necesites un constructor
* Necesites explícitamente `this` dentro del objeto
* Prefieras claridad en funciones complejas

---

## 🧠 ¿Por qué es importante en Vue?

En Vue se usan constantemente:

* Para métodos
* Para callbacks
* Para trabajar con arrays
* En composición API

**Ejemplo en Vue:**
```js
// Arrow function en un computed
const usuariosFiltrados = computed(() => 
  usuarios.value.filter(u => u.activo)
)

// Arrow function en watch
watch(() => usuario.value.nombre, (nuevoNombre) => {
  console.log("Cambió a:", nuevoNombre)
})
```

---

# 3️⃣ Template Strings (Plantillas de texto)

Permiten insertar variables dentro de cadenas de texto.

---

## ❌ Forma antigua

```js
const nombre = "Ana"
const mensaje = "Hola " + nombre + ", bienvenida"
```

---

## ✅ Forma moderna

```js
const nombre = "Ana"
const mensaje = `Hola ${nombre}, bienvenida`
```

---

## 🔹 Permiten expresiones

```js
const a = 5
const b = 3

const resultado = `La suma es ${a + b}`
```

---

## 🧠 Muy importante en Vue

Se usa mucho en:

* Renderizado dinámico
* Construcción de mensajes
* Interpolaciones

---

# 4️⃣ Destructuring (Desestructuración)

Permite extraer valores de objetos o arrays fácilmente.

---

## 🔹 En objetos

```js
const persona = {
  nombre: "Ana",
  edad: 25
}

const { nombre, edad } = persona

console.log(nombre) // Ana
```

Es equivalente a:

```js
const nombre = persona.nombre
const edad = persona.edad
```

---

## 🔹 Cambiar nombre de variable

```js
const { nombre: nombreUsuario } = persona
```

---

## 🔹 En arrays

```js
const numeros = [10, 20, 30]

const [primero, segundo] = numeros

console.log(primero) // 10
```

---

## 🧠 Muy usado en Vue

Especialmente en:

* Props
* Composables
* Respuestas de APIs

---

# 5️⃣ Spread Operator (`...`)

Permite expandir arrays u objetos.

---

## 🔹 En arrays

```js
const numeros1 = [1, 2, 3]
const numeros2 = [...numeros1, 4, 5]

console.log(numeros2)
// [1, 2, 3, 4, 5]
```

---

## 🔹 Copiar arrays

```js
const copia = [...numeros1]
```

---

## 🔹 En objetos

```js
const persona = { nombre: "Ana" }
const personaCompleta = { ...persona, edad: 25 }

console.log(personaCompleta)
// { nombre: "Ana", edad: 25 }
```

---

## 🧠 Importancia en Vue

Se usa muchísimo para:

* Actualizar estado
* Clonar objetos reactivos
* Trabajar con arrays inmutables

---

# 6️⃣ Módulos (import / export)

Permiten dividir el código en archivos.

---

## 🔹 Exportar

Archivo: `saludos.js`

```js
export const saludar = (nombre) => `Hola ${nombre}`
```

---

## 🔹 Importar

```js
import { saludar } from "./saludos.js"

console.log(saludar("Ana"))
```

---

## 🔹 Exportación por defecto

```js
export default function despedir() {
  return "Adiós"
}
```

Importación:

```js
import despedir from "./archivo.js"
```

---

## 🧠 Fundamental en Vue

Vue trabaja completamente basado en módulos.

Cada componente es un módulo.

---

# 🧩 Mini ejercicio para practicar en clase

Crear un pequeño script que:

1. Declare un objeto usuario.
2. Use destructuring.
3. Cree un mensaje con template string.
4. Use una arrow function para mostrarlo.

Ejemplo:

```js
const usuario = {
  nombre: "Lucía",
  edad: 22
}

const { nombre, edad } = usuario

const crearMensaje = () => `El usuario ${nombre} tiene ${edad} años`

console.log(crearMensaje())
```

---