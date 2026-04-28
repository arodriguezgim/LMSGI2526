# Ejercicios 15 - Mayo - 2025

## Ejercicio 1:

- Agrega un botón para disminuir el contador.
- Agrega un botón para resetear el contador.
- Pinta el contador en rojo cuando el valor sea menor a cero.
- Pinta el contador en verde cuando el valor sea mayor a cero.


## Ejercicio 2:

- Agrega un array y su respectivo método y botón add para almacenar los números favoritos del usuario.
- Pinta ese array utilizando v-for.
- Utiliza :disabled en el botón add, para que solo se pueda presionar si el array no contiene números repetidos. (utiliza una propiedad computada).

<b>:disabled</b> si es true el botón se bloquea:

```html
<button @click="add" :disabled="true">Add</button>

```