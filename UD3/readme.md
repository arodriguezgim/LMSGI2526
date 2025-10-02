## 0. Introducción

HTML (Lenguaje de Marcas de Hipertexto, del inglés HyperText Markup Language) es el componente más básico de la Web. Define el significado y la estructura del contenido web. Además de HTML, generalmente se utilizan otras tecnologías para describir la apariencia/presentación de una página web (CSS) o la funcionalidad/comportamiento (JavaScript).

"Hipertexto" hace referencia a los enlaces que conectan páginas web entre sí, ya sea dentro de un único sitio web o entre sitios web. Los enlaces son un aspecto fundamental de la Web. Al subir contenido a Internet y vincularlo a las páginas creadas por otras personas, te conviertes en un participante activo en la "World Wide Web" (Red Informática Mundial).

HTML utiliza "marcas" para etiquetar texto, imágenes y otro contenido para mostrarlo en un navegador Web. Las marcas HTML incluyen "elementos" especiales como `<head>`, `<title>`, `<body>`, `<header>`, `<footer>`, `<article>`, `<section>`, `<p>`, `<div>`, `<span>`, `<img>`, `<aside>`, `<audio>`, `<canvas>`, `<datalist>`, `<details>`, `<embed>`, `<nav>`, `<output>`, `<progress>`, `<video>`, `<ul>`, `<ol>`, `<li>` y muchos otros.

Un elemento HTML se distingue de otro texto en un documento mediante "etiquetas", que consisten en el nombre del elemento rodeado por `<` y `>`. El nombre de un elemento dentro de una etiqueta no distingue entre mayúsculas y minúsculas. Es decir, se puede escribir en mayúsculas, minúsculas o una mezcla. Por ejemplo, la etiqueta `<title>` se puede escribir como `<Title>`, `<TITLE>` o de cualquier otra forma.

<details class="card mb-2">
  <summary class="card-header question">¿Qué significa hipertexto?</summary>
  <div class="card-body" markdown="1">

Del mismo modo que un hipermercado es mejor que un mercado. El hipertexto es mejor que el texto. De manera simplificada es texto con enlaces que te llevan a otros documentos.

  </div>
</details>

<hr>

 ¿Es HTML case sensitive?

---

## 1. Estructura básica de un documento HTML

Todo documento HTML debe seguir esta estructura:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi primera página</title>
</head>
<body>
    <!-- Aquí va el contenido -->
</body>
</html>
```

---

## 2. Etiquetas de títulos

HTML proporciona 6 niveles de títulos, desde `<h1>` hasta `<h6>`:

```html
<h1>Título principal (H1)</h1>
<h2>Subtítulo (H2)</h2>
<h3>Título de nivel 3 (H3)</h3>
<h4>Título de nivel 4 (H4)</h4>
<h5>Título de nivel 5 (H5)</h5>
<h6>Título de nivel 6 (H6)</h6>
```

**Importante:** Solo debe haber un `<h1>` por página, ya que representa el título principal del documento.

---

## 3. Párrafos y saltos de línea

### Párrafos
```html
<p>Este es un párrafo de texto. Los párrafos se separan automáticamente 
con espacio vertical.</p>

<p>Este es otro párrafo diferente.</p>
```

### Saltos de línea
```html
<p>Primera línea<br>
Segunda línea en el mismo párrafo</p>
```

### Línea horizontal
```html
<hr>
```

---

## 4. Formato de texto

### Negrita y énfasis
```html
<strong>Texto importante (negrita semántica)</strong>
<b>Texto en negrita (solo visual)</b>

<em>Texto enfatizado (cursiva semántica)</em>
<i>Texto en cursiva (solo visual)</i>
```

### Otros formatos
```html
<u>Texto subrayado</u>
<s>Texto tachado</s>
<mark>Texto resaltado</mark>
<small>Texto pequeño</small>
<sub>Subíndice: H<sub>2</sub>O</sub>
<sup>Superíndice: X<sup>2</sup></sup>
<code>Código en línea: console.log()</code>
<pre>Texto preformateado
    que respeta    espacios
    y saltos de línea</pre>
```

---

## 5. Enlaces e imágenes

### Enlaces (hipervínculos)

Los enlaces se crean con la etiqueta `<a>` (anchor):

```html
<!-- Enlace básico -->
<a href="https://www.google.com">Ir a Google</a>

<!-- Enlace que abre en nueva pestaña -->
<a href="https://www.github.com" target="_blank">GitHub (nueva pestaña)</a>

<!-- Enlace a otra página del mismo sitio -->
<a href="contacto.html">Ir a Contacto</a>

<!-- Enlace a una sección de la misma página -->
<a href="#seccion2">Ir a la sección 2</a>

<!-- Enlace de correo electrónico -->
<a href="mailto:info@ejemplo.com">Enviar email</a>

<!-- Enlace de teléfono -->
<a href="tel:+34123456789">Llamar por teléfono</a>
```

### Atributos importantes de los enlaces

- **`href`**: URL de destino (obligatorio)
- **`target="_blank"`**: Abre en nueva pestaña
- **`title`**: Texto que aparece al pasar el ratón
- **`download`**: Descarga el archivo en lugar de abrirlo

```html
<a href="documento.pdf" download title="Descargar PDF">
    Descargar documento
</a>
```

### Imágenes

Las imágenes se insertan con la etiqueta `<img>`:

```html
<!-- Imagen básica -->
<img src="imagen.jpg" alt="Descripción de la imagen">

<!-- Imagen con dimensiones -->
<img src="foto.png" alt="Mi foto" width="300" height="200">

<!-- Imagen desde URL externa -->
<img src="https://ejemplo.com/imagen.jpg" alt="Imagen externa">

<!-- Imagen responsive (se adapta al contenedor) -->
<img src="banner.jpg" alt="Banner" style="max-width: 100%; height: auto;">
```

### Atributos importantes de las imágenes

- **`src`**: Ruta de la imagen (obligatorio)
- **`alt`**: Texto alternativo (obligatorio para accesibilidad)
- **`width`** y **`height`**: Dimensiones en píxeles
- **`title`**: Texto al pasar el ratón

### Imagen como enlace

```html
<a href="galeria.html">
    <img src="miniatura.jpg" alt="Ver galería completa" width="150">
</a>
```

### Rutas relativas vs absolutas

```html
<!-- Ruta relativa: mismo directorio -->
<img src="logo.png" alt="Logo">

<!-- Ruta relativa: carpeta images -->
<img src="images/foto.jpg" alt="Foto">

<!-- Ruta relativa: directorio superior -->
<img src="../imagenes/banner.jpg" alt="Banner">

<!-- Ruta absoluta: desde la raíz del sitio -->
<img src="/assets/images/logo.png" alt="Logo">

<!-- URL completa externa -->
<img src="https://ejemplo.com/imagen.jpg" alt="Imagen">
```

### Figure y figcaption (HTML5)

Para imágenes con pie de foto:

```html
<figure>
    <img src="grafico.png" alt="Gráfico de ventas 2024" width="500">
    <figcaption>Figura 1: Evolución de ventas durante 2024</figcaption>
</figure>
```

---

## 6. Listas

### Lista desordenada (viñetas)
```html
<ul>
    <li>Primer elemento</li>
    <li>Segundo elemento</li>
    <li>Tercer elemento</li>
</ul>
```

### Lista ordenada (numerada)
```html
<ol>
    <li>Paso 1</li>
    <li>Paso 2</li>
    <li>Paso 3</li>
</ol>
```

### Lista de definiciones
```html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language - Lenguaje de marcado de hipertexto</dd>
    
    <dt>CSS</dt>
    <dd>Cascading Style Sheets - Hojas de estilo en cascada</dd>
</dl>
```

### Listas anidadas
```html
<ul>
    <li>Elemento 1
        <ul>
            <li>Subelemento 1.1</li>
            <li>Subelemento 1.2</li>
        </ul>
    </li>
    <li>Elemento 2</li>
</ul>
```

---

## 7. Tablas

### Tabla básica
```html
<table border="1">
    <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Edad</th>
    </tr>
    <tr>
        <td>Juan</td>
        <td>Pérez</td>
        <td>25</td>
    </tr>
    <tr>
        <td>María</td>
        <td>García</td>
        <td>30</td>
    </tr>
</table>
```

### Tabla con estructura semántica
```html
<table>
    <thead>
        <tr>
            <th>Asignatura</th>
            <th>Nota</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Programación</td>
            <td>8.5</td>
        </tr>
        <tr>
            <td>Bases de datos</td>
            <td>7.0</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Media</td>
            <td>7.75</td>
        </tr>
    </tfoot>
</table>
```

### Colspan (fusión horizontal)
```html
<table border="1">
    <tr>
        <th colspan="3">Datos del Alumno</th>
    </tr>
    <tr>
        <td>Nombre</td>
        <td>Apellido</td>
        <td>Edad</td>
    </tr>
    <tr>
        <td>Ana</td>
        <td>López</td>
        <td>22</td>
    </tr>
</table>
```

### Rowspan (fusión vertical)
```html
<table border="1">
    <tr>
        <th rowspan="2">Ciclo</th>
        <th>Curso</th>
        <th>Alumnos</th>
    </tr>
    <tr>
        <td>1º DAM</td>
        <td>30</td>
    </tr>
    <tr>
        <th rowspan="2">DAW</th>
        <td>1º DAW</td>
        <td>25</td>
    </tr>
    <tr>
        <td>2º DAW</td>
        <td>28</td>
    </tr>
</table>
```

### Combinando colspan y rowspan
```html
<table border="1">
    <tr>
        <th rowspan="2">Día</th>
        <th colspan="2">Horario</th>
    </tr>
    <tr>
        <th>Mañana</th>
        <th>Tarde</th>
    </tr>
    <tr>
        <td>Lunes</td>
        <td>Programación</td>
        <td>Bases de Datos</td>
    </tr>
</table>
```

---

## 8. La etiqueta `<div>` - Contenedor genérico

La etiqueta `<div>` es uno de los elementos más utilizados en HTML. Es un **contenedor genérico** que se usa para agrupar otros elementos y aplicarles estilos o comportamientos comunes.

### ¿Qué hace `<div>`?

Por sí mismo, `<div>` no hace nada visible. No tiene ningún estilo predefinido ni significado semántico. Es simplemente una "caja" invisible que agrupa contenido.

### ¿Para qué se usa?

```html
<!-- Agrupar elementos relacionados -->
<div>
    <h2>Título de la sección</h2>
    <p>Primer párrafo de contenido.</p>
    <p>Segundo párrafo de contenido.</p>
</div>

<!-- Crear secciones para aplicar estilos (con CSS) -->
<div style="background-color: lightblue; padding: 20px;">
    <h3>Caja con fondo azul</h3>
    <p>Este contenido está dentro de un div con estilo.</p>
</div>

<!-- Estructurar el layout de la página -->
<div class="contenedor">
    <div class="columna-izquierda">
        <p>Contenido izquierda</p>
    </div>
    <div class="columna-derecha">
        <p>Contenido derecha</p>
    </div>
</div>
```

### Ejemplo práctico: Tarjeta de producto

```html
<div style="border: 1px solid #ccc; padding: 15px; width: 300px;">
    <h3>Laptop HP</h3>
    <img src="laptop.jpg" alt="Laptop" width="100%">
    <p>Procesador Intel Core i5</p>
    <p><strong>Precio: 599€</strong></p>
    <button>Comprar</button>
</div>
```

### `<div>` vs etiquetas semánticas

Antes de HTML5, se usaba `<div>` para todo. Ahora es mejor usar etiquetas semánticas cuando sea posible:

```html
<!-- ❌ Menos recomendado -->
<div id="cabecera">
    <div id="menu">...</div>
</div>

<!-- ✅ Más recomendado -->
<header>
    <nav>...</nav>
</header>
```

**Regla práctica:** Usa `<div>` cuando necesites un contenedor pero ninguna etiqueta semántica sea apropiada.

### `<span>` - El hermano pequeño de `<div>`

Similar a `<div>`, pero `<span>` es **en línea** (no crea saltos de línea):

```html
<p>Este texto tiene una <span style="color: red;">palabra en rojo</span> dentro.</p>

<p>Temperatura: <span id="temp">25</span>°C</p>
```

**Diferencia clave:**
- `<div>`: Contenedor de bloque (crea nueva línea)
- `<span>`: Contenedor en línea (dentro del flujo del texto)

---

## 9. Etiquetas semánticas HTML5

HTML5 introduce etiquetas que dan significado al contenido:

### Estructura de página
```html
<header>
    <h1>Mi Sitio Web</h1>
    <nav>
        <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#sobre">Sobre nosotros</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
    </nav>
</header>

<main>
    <article>
        <h2>Título del artículo</h2>
        <p>Contenido del artículo...</p>
    </article>
    
    <section>
        <h2>Sección de contenido</h2>
        <p>Información relacionada...</p>
    </section>
    
    <aside>
        <h3>Barra lateral</h3>
        <p>Contenido complementario...</p>
    </aside>
</main>

<footer>
    <p>&copy; 2025 Mi Sitio Web. Todos los derechos reservados.</p>
</footer>
```

### Descripción de las etiquetas semánticas

- **`<header>`**: Encabezado de la página o de una sección
- **`<nav>`**: Menú de navegación
- **`<main>`**: Contenido principal del documento (solo uno por página)
- **`<article>`**: Contenido independiente y autocontenido
- **`<section>`**: Sección temática del documento
- **`<aside>`**: Contenido relacionado pero secundario (barras laterales)
- **`<footer>`**: Pie de página
- **`<figure>`** y **`<figcaption>`**: Para imágenes con pie de foto

```html
<figure>
    <img src="imagen.jpg" alt="Descripción">
    <figcaption>Pie de foto explicativo</figcaption>
</figure>
```

---

## 10. Formularios en HTML

Los formularios permiten recoger información del usuario.

### Estructura básica
```html
<form action="procesar.php" method="post">
    <!-- Campos del formulario -->
</form>
```

### Campos de texto
```html
<form>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" placeholder="Escribe tu nombre">
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="password">Contraseña:</label>
    <input type="password" id="password" name="password">
    
    <label for="comentarios">Comentarios:</label>
    <textarea id="comentarios" name="comentarios" rows="4" cols="50"></textarea>
</form>
```

### Botones de radio y checkboxes
```html
<form>
    <p>Selecciona tu género:</p>
    <input type="radio" id="masculino" name="genero" value="M">
    <label for="masculino">Masculino</label>
    
    <input type="radio" id="femenino" name="genero" value="F">
    <label for="femenino">Femenino</label>
    
    <p>Selecciona tus intereses:</p>
    <input type="checkbox" id="programacion" name="intereses" value="prog">
    <label for="programacion">Programación</label>
    
    <input type="checkbox" id="diseno" name="intereses" value="dis">
    <label for="diseno">Diseño</label>
    
    <input type="checkbox" id="redes" name="intereses" value="red">
    <label for="redes">Redes</label>
</form>
```

### Listas desplegables
```html
<form>
    <label for="curso">Selecciona tu curso:</label>
    <select id="curso" name="curso">
        <option value="">-- Selecciona --</option>
        <option value="1dam">1º DAM</option>
        <option value="2dam">2º DAM</option>
        <option value="1daw">1º DAW</option>
        <option value="2daw">2º DAW</option>
    </select>
</form>
```

### Otros tipos de input
```html
<form>
    <label for="fecha">Fecha de nacimiento:</label>
    <input type="date" id="fecha" name="fecha">
    
    <label for="hora">Hora:</label>
    <input type="time" id="hora" name="hora">
    
    <label for="numero">Edad:</label>
    <input type="number" id="numero" name="edad" min="18" max="100">
    
    <label for="rango">Valoración:</label>
    <input type="range" id="rango" name="valoracion" min="0" max="10">
    
    <label for="color">Color favorito:</label>
    <input type="color" id="color" name="color">
    
    <label for="archivo">Subir archivo:</label>
    <input type="file" id="archivo" name="archivo">
</form>
```

### Botones de envío
```html
<form>
    <input type="submit" value="Enviar formulario">
    <input type="reset" value="Limpiar">
    <button type="submit">Enviar con botón</button>
</form>
```

### Formulario completo de ejemplo
```html
<form action="registro.php" method="post">
    <fieldset>
        <legend>Datos personales</legend>
        
        <label for="nombre">Nombre completo:</label>
        <input type="text" id="nombre" name="nombre" required>
        
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" required>
        
        <label for="telefono">Teléfono:</label>
        <input type="tel" id="telefono" name="telefono" pattern="[0-9]{9}">
    </fieldset>
    
    <fieldset>
        <legend>Información académica</legend>
        
        <label for="ciclo">Ciclo formativo:</label>
        <select id="ciclo" name="ciclo" required>
            <option value="">-- Selecciona --</option>
            <option value="dam">DAM</option>
            <option value="daw">DAW</option>
            <option value="asir">ASIR</option>
        </select>
        
        <p>¿Has estudiado antes programación?</p>
        <input type="radio" id="si" name="experiencia" value="si">
        <label for="si">Sí</label>
        
        <input type="radio" id="no" name="experiencia" value="no">
        <label for="no">No</label>
    </fieldset>
    
    <input type="checkbox" id="terminos" name="terminos" required>
    <label for="terminos">Acepto los términos y condiciones</label>
    
    <br><br>
    <input type="submit" value="Registrarse">
    <input type="reset" value="Borrar datos">
</form>
```

---

## Atributos importantes en formularios

- **`required`**: Campo obligatorio
- **`placeholder`**: Texto de ayuda dentro del campo
- **`disabled`**: Deshabilita el campo
- **`readonly`**: Solo lectura (no se puede modificar)
- **`maxlength`**: Número máximo de caracteres
- **`pattern`**: Expresión regular para validar el formato
- **`autofocus`**: El campo recibe el foco al cargar la página
- **`autocomplete`**: Activa/desactiva el autocompletado

---

## Enlaces y recursos adicionales

- **MDN Web Docs**: [developer.mozilla.org](https://developer.mozilla.org/es/)
- **W3Schools**: [w3schools.com](https://www.w3schools.com/)
- **Validador HTML**: [validator.w3.org](https://validator.w3.org/)

---


## [Ejercicios para practicar](./ejercicioshtml.md) Ejercicios para practicar esta semana
