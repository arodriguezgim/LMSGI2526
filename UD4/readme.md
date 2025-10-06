# UD 4 - CSS
# Manual Avanzado de CSS

---

## Índice de Contenidos

1. Introducción a CSS
2. Selectores CSS
3. Colores y Unidades de Medida
4. Tipografía y Texto
5. Fondos y Bordes
6. Modelo de Cajas (Box Model)
7. Display y Visibilidad
8. Posicionamiento
9. Flexbox
10. CSS Grid
11. Transformaciones y Transiciones
12. Responsive Design y Media Queries
13. Pseudo-clases y Pseudo-elementos
14. Buenas Prácticas

---

## 1. Introducción a CSS

CSS (Cascading Style Sheets) es el lenguaje que se utiliza para dar estilo y presentación a documentos HTML.

### ¿Cómo aplicar CSS?

#### 1.1 CSS Inline (en línea)
```html
<p style="color: blue; font-size: 16px;">Texto azul</p>
```
❌ **No recomendado** - Mezcla contenido con presentación.

#### 1.2 CSS Interno (en el head)
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        p {
            color: blue;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <p>Texto azul</p>
</body>
</html>
```
⚠️ **Uso limitado** - Solo para páginas únicas.

#### 1.3 CSS Externo (archivo separado)
```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <p>Texto azul</p>
</body>
</html>
```

```css
/* estilos.css */
p {
    color: blue;
    font-size: 16px;
}
```
✅ **RECOMENDADO** - Separación de responsabilidades.

### Sintaxis básica de CSS

```css
selector {
    propiedad: valor;
    otra-propiedad: otro-valor;
}
```

---

## 2. Selectores CSS

Los selectores determinan qué elementos HTML serán estilizados.

### 2.1 Selectores básicos

```css
/* Selector de elemento */
p {
    color: red;
}

/* Selector de clase */
.destacado {
    background-color: yellow;
}

/* Selector de ID */
#cabecera {
    font-size: 24px;
}

/* Selector universal */
* {
    margin: 0;
    padding: 0;
}
```

### 2.2 Selectores de atributo

```css
/* Elementos con un atributo específico */
input[type="text"] {
    border: 1px solid gray;
}

/* Atributo que comienza con un valor */
a[href^="https"] {
    color: green;
}

/* Atributo que termina con un valor */
img[src$=".jpg"] {
    border: 2px solid black;
}

/* Atributo que contiene un valor */
a[href*="ejemplo"] {
    text-decoration: none;
}
```

### 2.3 Combinadores

```css
/* Descendiente (todos los p dentro de div) */
div p {
    color: blue;
}

/* Hijo directo (solo p hijos directos de div) */
div > p {
    color: red;
}

/* Hermano adyacente (p inmediatamente después de h2) */
h2 + p {
    font-weight: bold;
}

/* Hermanos generales (todos los p después de h2) */
h2 ~ p {
    margin-left: 20px;
}
```

### 2.4 Agrupación de selectores

```css
h1, h2, h3 {
    font-family: Arial, sans-serif;
    color: #333;
}
```

### 2.5 Especificidad

La especificidad determina qué regla se aplica cuando hay conflicto:

- **Inline styles**: 1000 puntos
- **ID**: 100 puntos
- **Clase, atributo, pseudo-clase**: 10 puntos
- **Elemento, pseudo-elemento**: 1 punto

```css
/* Especificidad: 1 */
p { color: blue; }

/* Especificidad: 10 */
.texto { color: red; }

/* Especificidad: 100 */
#principal { color: green; }

/* Especificidad: 111 */
#principal p.texto { color: purple; }
```

---

## 3. Colores y Unidades de Medida

### 3.1 Colores

```css
/* Nombres de colores */
color: red;

/* Hexadecimal */
color: #FF0000;
color: #F00; /* Forma corta */

/* RGB */
color: rgb(255, 0, 0);

/* RGBA (con transparencia) */
color: rgba(255, 0, 0, 0.5);

/* HSL (Tono, Saturación, Luminosidad) */
color: hsl(0, 100%, 50%);

/* HSLA (con transparencia) */
color: hsla(0, 100%, 50%, 0.5);
```

### 3.2 Unidades de medida

#### Unidades absolutas
```css
/* Píxeles (más común) */
font-size: 16px;

/* Puntos (impresión) */
font-size: 12pt;

/* Centímetros */
width: 10cm;
```

#### Unidades relativas
```css
/* Em (relativo al tamaño de fuente del padre) */
font-size: 1.5em;

/* Rem (relativo al tamaño de fuente raíz - html) */
font-size: 1.5rem;

/* Porcentaje */
width: 50%;

/* Viewport width (1vw = 1% del ancho del viewport) */
width: 50vw;

/* Viewport height */
height: 100vh;

/* Viewport minimum */
font-size: 5vmin;

/* Viewport maximum */
font-size: 5vmax;
```

**Ejemplo práctico:**
```css
html {
    font-size: 16px; /* Base */
}

body {
    font-size: 1rem; /* 16px */
}

h1 {
    font-size: 2rem; /* 32px */
}

p {
    font-size: 1em; /* Heredado del padre */
    margin-bottom: 1.5em; /* 1.5 veces el tamaño de fuente */
}
```

---

## 4. Tipografía y Texto

### 4.1 Fuentes

```css
/* Familia de fuente */
font-family: Arial, Helvetica, sans-serif;

/* Tamaño */
font-size: 16px;

/* Peso (grosor) */
font-weight: normal; /* 400 */
font-weight: bold; /* 700 */
font-weight: 100; /* Thin */
font-weight: 900; /* Black */

/* Estilo */
font-style: normal;
font-style: italic;
font-style: oblique;

/* Variante */
font-variant: small-caps;

/* Shorthand (atajo) */
font: italic bold 16px/1.5 Arial, sans-serif;
/*     estilo peso tamaño/altura fuente */
```

### 4.2 Propiedades de texto

```css
/* Color del texto */
color: #333;

/* Alineación */
text-align: left;
text-align: center;
text-align: right;
text-align: justify;

/* Decoración */
text-decoration: none;
text-decoration: underline;
text-decoration: line-through;
text-decoration: overline;

/* Transformación */
text-transform: uppercase;
text-transform: lowercase;
text-transform: capitalize;

/* Espaciado entre letras */
letter-spacing: 2px;

/* Espaciado entre palabras */
word-spacing: 5px;

/* Altura de línea */
line-height: 1.5;
line-height: 24px;

/* Indentación */
text-indent: 30px;

/* Sombra de texto */
text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
/*           x   y   blur color */
```

### 4.3 Google Fonts

```html
<!-- En el HTML -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
```

```css
/* En el CSS */
body {
    font-family: 'Roboto', sans-serif;
}
```

---

## 5. Fondos y Bordes

### 5.1 Fondos

```css
/* Color de fondo */
background-color: #f0f0f0;

/* Imagen de fondo */
background-image: url('imagen.jpg');

/* Repetición */
background-repeat: no-repeat;
background-repeat: repeat-x; /* Solo horizontal */
background-repeat: repeat-y; /* Solo vertical */

/* Posición */
background-position: center;
background-position: top right;
background-position: 50% 50%;
background-position: 10px 20px;

/* Tamaño */
background-size: cover; /* Cubre todo el contenedor */
background-size: contain; /* Se ajusta sin recortar */
background-size: 100% auto;

/* Fijo o con scroll */
background-attachment: fixed;
background-attachment: scroll;

/* Shorthand */
background: #333 url('bg.jpg') no-repeat center/cover;

/* Múltiples fondos */
background: 
    url('overlay.png') center/cover no-repeat,
    url('background.jpg') center/cover no-repeat,
    linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5));
```

### 5.2 Gradientes

```css
/* Gradiente lineal */
background: linear-gradient(to right, red, blue);
background: linear-gradient(45deg, red, yellow, green);
background: linear-gradient(to bottom, #333 0%, #666 100%);

/* Gradiente radial */
background: radial-gradient(circle, red, blue);
background: radial-gradient(ellipse at center, red, blue);
```

### 5.3 Bordes

```css
/* Ancho, estilo y color */
border-width: 2px;
border-style: solid;
border-color: black;

/* Shorthand */
border: 2px solid black;

/* Bordes individuales */
border-top: 1px solid red;
border-right: 2px dashed blue;
border-bottom: 3px dotted green;
border-left: 4px double orange;

/* Estilos de borde */
border-style: solid;
border-style: dashed;
border-style: dotted;
border-style: double;
border-style: groove;
border-style: ridge;
border-style: inset;
border-style: outset;

/* Bordes redondeados */
border-radius: 10px;
border-radius: 50%; /* Círculo */
border-radius: 10px 20px 30px 40px; /* sup-izq, sup-der, inf-der, inf-izq */
border-radius: 10px 20px; /* superior-izq/inferior-der, superior-der/inferior-izq */

/* Esquinas individuales */
border-top-left-radius: 10px;
border-top-right-radius: 20px;
border-bottom-right-radius: 30px;
border-bottom-left-radius: 40px;
```

### 5.4 Sombras

```css
/* Sombra de caja */
box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
/*          x   y   blur spread color */

box-shadow: 0 4px 6px rgba(0,0,0,0.1);

/* Múltiples sombras */
box-shadow: 
    0 1px 3px rgba(0,0,0,0.12),
    0 1px 2px rgba(0,0,0,0.24);

/* Sombra interna */
box-shadow: inset 0 0 10px rgba(0,0,0,0.5);
```

---

## 6. Modelo de Cajas (Box Model)

Cada elemento HTML es una caja rectangular compuesta por:

```
┌─────────────────────────────────┐
│         MARGIN (exterior)       │
│  ┌───────────────────────────┐  │
│  │    BORDER (borde)         │  │
│  │  ┌─────────────────────┐  │  │
│  │  │  PADDING (relleno)  │  │  │
│  │  │  ┌───────────────┐  │  │  │
│  │  │  │   CONTENT     │  │  │  │
│  │  │  │  (contenido)  │  │  │  │
│  │  │  └───────────────┘  │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

### 6.1 Propiedades del modelo de cajas

```css
.caja {
    /* Contenido */
    width: 300px;
    height: 200px;
    
    /* Padding (espacio interior) */
    padding: 20px; /* Todos los lados */
    padding: 10px 20px; /* vertical horizontal */
    padding: 10px 20px 30px 40px; /* top right bottom left */
    
    /* Propiedades individuales */
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-left: 40px;
    
    /* Border */
    border: 2px solid black;
    
    /* Margin (espacio exterior) */
    margin: 20px;
    margin: 10px 20px;
    margin: 10px 20px 30px 40px;
    
    /* Propiedades individuales */
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 30px;
    margin-left: 40px;
    
    /* Centrar horizontalmente */
    margin: 0 auto;
}
```

### 6.2 Box-sizing

Por defecto, width y height solo afectan al contenido:

```css
/* Comportamiento por defecto */
.caja1 {
    width: 300px;
    padding: 20px;
    border: 5px solid black;
    /* Ancho total = 300 + 40 + 10 = 350px */
}

/* Border-box: incluye padding y border en el width */
.caja2 {
    box-sizing: border-box;
    width: 300px;
    padding: 20px;
    border: 5px solid black;
    /* Ancho total = 300px */
}

/* Aplicar a todos los elementos (recomendado) */
* {
    box-sizing: border-box;
}
```

### 6.3 Overflow

Controla qué pasa cuando el contenido es más grande que el contenedor:

```css
.contenedor {
    width: 200px;
    height: 100px;
    
    overflow: visible; /* Por defecto, se desborda */
    overflow: hidden; /* Oculta el contenido que se desborda */
    overflow: scroll; /* Siempre muestra scrollbars */
    overflow: auto; /* Scrollbars solo si es necesario */
    
    /* Control individual */
    overflow-x: auto;
    overflow-y: hidden;
}
```

---

## 7. Display y Visibilidad

### 7.1 Propiedad Display

```css
/* Display: block */
.block {
    display: block;
    /* - Ocupa todo el ancho disponible
       - Empieza en nueva línea
       - Acepta width y height
       - Ejemplos: div, p, h1-h6 */
}

/* Display: inline */
.inline {
    display: inline;
    /* - Solo ocupa el espacio de su contenido
       - No empieza en nueva línea
       - NO acepta width y height
       - NO acepta margin/padding verticales
       - Ejemplos: span, a, strong */
}

/* Display: inline-block */
.inline-block {
    display: inline-block;
    /* - Combina ambos comportamientos
       - No empieza en nueva línea
       - SÍ acepta width y height
       - SÍ acepta margin y padding */
    width: 200px;
    height: 100px;
    margin: 10px;
}

/* Display: none */
.oculto {
    display: none;
    /* Elimina el elemento del flujo (no ocupa espacio) */
}

/* Display: flex */
.flex-container {
    display: flex;
    /* Activa Flexbox (ver sección 9) */
}

/* Display: grid */
.grid-container {
    display: grid;
    /* Activa Grid (ver sección 10) */
}
```

### 7.2 Visibilidad

```css
/* Visibility */
.invisible {
    visibility: hidden;
    /* Oculta el elemento pero SIGUE ocupando espacio */
}

.visible {
    visibility: visible;
}

/* Opacity */
.transparente {
    opacity: 0; /* Invisible */
    /* Valores de 0 (transparente) a 1 (opaco) */
}

.semi-transparente {
    opacity: 0.5;
}
```

**Diferencias importantes:**
- `display: none` → No ocupa espacio
- `visibility: hidden` → Sí ocupa espacio
- `opacity: 0` → Sí ocupa espacio y puede interactuar

---

## 8. Posicionamiento

### 8.1 Tipos de posicionamiento

```css
/* Static (por defecto) */
.static {
    position: static;
    /* Flujo normal del documento
       No responde a top, right, bottom, left */
}

/* Relative */
.relative {
    position: relative;
    top: 20px;
    left: 30px;
    /* Se desplaza RELATIVO a su posición original
       El espacio original se mantiene reservado */
}

/* Absolute */
.absolute {
    position: absolute;
    top: 0;
    right: 0;
    /* Se posiciona RELATIVO al ancestro posicionado más cercano
       Sale del flujo normal (no reserva espacio)
       Si no hay ancestro posicionado, se posiciona respecto al body */
}

/* Fixed */
.fixed {
    position: fixed;
    bottom: 20px;
    right: 20px;
    /* Se posiciona RELATIVO al viewport
       Permanece fijo al hacer scroll
       Sale del flujo normal */
}

/* Sticky */
.sticky {
    position: sticky;
    top: 0;
    /* Híbrido entre relative y fixed
       Se comporta como relative hasta que alcanza el offset
       Entonces se comporta como fixed */
}
```

### 8.2 Propiedades de posicionamiento

```css
.posicionado {
    position: absolute;
    
    /* Coordenadas */
    top: 10px;
    right: 20px;
    bottom: 30px;
    left: 40px;
    
    /* Z-index (capas, mayor número = más arriba) */
    z-index: 10;
    
    /* Solo funciona en elementos posicionados (no static) */
}
```

### 8.3 Ejemplo práctico: Centrar absolutamente

```css
.centrado-absoluto {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* Centra perfectamente el elemento */
}
```

### 8.4 Ejemplo: Menú fijo

```css
.menu-fijo {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    z-index: 1000;
}

/* Compensar el espacio del menú fijo */
body {
    padding-top: 60px; /* Altura del menú */
}
```

---

## 9. Flexbox

Flexbox es un sistema de layout unidimensional (filas O columnas).

### 9.1 Conceptos básicos

```css
.flex-container {
    display: flex;
    /* Convierte el elemento en flex container
       Los hijos directos se convierten en flex items */
}
```

### 9.2 Propiedades del contenedor

```css
.flex-container {
    display: flex;
    
    /* Dirección principal */
    flex-direction: row; /* Por defecto (horizontal) */
    flex-direction: row-reverse;
    flex-direction: column; /* Vertical */
    flex-direction: column-reverse;
    
    /* Envolver items */
    flex-wrap: nowrap; /* Por defecto (una sola línea) */
    flex-wrap: wrap; /* Múltiples líneas si es necesario */
    flex-wrap: wrap-reverse;
    
    /* Shorthand para direction y wrap */
    flex-flow: row wrap;
    
    /* Alineación horizontal (eje principal) */
    justify-content: flex-start; /* Por defecto */
    justify-content: flex-end;
    justify-content: center;
    justify-content: space-between; /* Espacio entre items */
    justify-content: space-around; /* Espacio alrededor */
    justify-content: space-evenly; /* Espacio uniforme */
    
    /* Alineación vertical (eje transversal) */
    align-items: stretch; /* Por defecto */
    align-items: flex-start;
    align-items: flex-end;
    align-items: center;
    align-items: baseline;
    
    /* Alineación de múltiples líneas */
    align-content: stretch;
    align-content: flex-start;
    align-content: center;
    align-content: space-between;
    align-content: space-around;
    
    /* Espaciado entre items */
    gap: 20px; /* Espacio entre items */
    row-gap: 10px;
    column-gap: 20px;
}
```

### 9.3 Propiedades de los items

```css
.flex-item {
    /* Orden de aparición */
    order: 0; /* Por defecto, menor número aparece primero */
    
    /* Crecimiento (cuánto espacio extra toma) */
    flex-grow: 0; /* Por defecto (no crece) */
    flex-grow: 1; /* Crece proporcionalmente */
    
    /* Encogimiento (cuánto se reduce si falta espacio) */
    flex-shrink: 1; /* Por defecto (se encoge) */
    flex-shrink: 0; /* No se encoge */
    
    /* Tamaño base */
    flex-basis: auto; /* Por defecto */
    flex-basis: 200px;
    flex-basis: 30%;
    
    /* Shorthand (grow, shrink, basis) */
    flex: 0 1 auto; /* Valor por defecto */
    flex: 1; /* Equivale a: 1 1 0 */
    flex: 2; /* Toma el doble de espacio que flex: 1 */
    
    /* Alineación individual */
    align-self: auto; /* Hereda de align-items */
    align-self: flex-start;
    align-self: center;
    align-self: flex-end;
    align-self: stretch;
}
```

### 9.4 Ejemplos prácticos

#### Centrar perfectamente
```css
.centrar-todo {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
```

#### Layout de 3 columnas
```css
.columnas {
    display: flex;
    gap: 20px;
}

.columna {
    flex: 1; /* Todas ocupan el mismo espacio */
}

.columna-principal {
    flex: 2; /* Ocupa el doble de espacio */
}
```

#### Barra de navegación
```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}

.navbar-menu {
    display: flex;
    gap: 1rem;
    list-style: none;
}
```

#### Cards responsivas
```css
.cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    flex: 1 1 300px; /* Mínimo 300px, crecen para llenar espacio */
}
```

---

## 10. CSS Grid

Grid es un sistema de layout bidimensional (filas Y columnas simultáneamente).

### 10.1 Conceptos básicos

```css
.grid-container {
    display: grid;
    /* Convierte el elemento en grid container
       Los hijos directos se convierten en grid items */
}
```

### 10.2 Definir la cuadrícula

```css
.grid-container {
    display: grid;
    
    /* Columnas */
    grid-template-columns: 200px 200px 200px; /* 3 columnas fijas */
    grid-template-columns: 1fr 1fr 1fr; /* 3 columnas iguales (fr = fracción) */
    grid-template-columns: 1fr 2fr 1fr; /* 3 columnas, la del medio el doble */
    grid-template-columns: repeat(3, 1fr); /* 3 columnas iguales (atajo) */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive */
    
    /* Filas */
    grid-template-rows: 100px 200px; /* 2 filas con alturas específicas */
    grid-template-rows: repeat(3, 100px);
    grid-template-rows: auto; /* Altura automática según contenido */
    
    /* Espaciado */
    gap: 20px; /* Entre filas y columnas */
    row-gap: 10px;
    column-gap: 20px;
    
    /* Nombres de áreas (layout avanzado) */
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
}
```

### 10.3 Colocar items en la cuadrícula

```css
/* Por líneas de grid */
.item1 {
    grid-column-start: 1;
    grid-column-end: 3; /* Ocupa 2 columnas */
    
    /* Shorthand */
    grid-column: 1 / 3;
    grid-column: 1 / span 2; /* Alternativa: ocupa 2 columnas */
    
    grid-row: 1 / 3; /* Ocupa 2 filas */
}

/* Por áreas nombradas */
.header {
    grid-area: header;
}

.sidebar {
    grid-area: sidebar;
}

.main {
    grid-area: main;
}

.footer {
    grid-area: footer;
}
```

### 10.4 Alineación en Grid

```css
.grid-container {
    /* Alineación de TODO el grid dentro del contenedor */
    justify-content: start; /* Horizontal */
    justify-content: center;
    justify-content: end;
    justify-content: space-between;
    justify-content: space-around;
    justify-content: space-evenly;
    
    align-content: start; /* Vertical */
    align-content: center;
    align-content: end;
    align-content: space-between;
    
    /* Alineación de items dentro de sus celdas */
    justify-items: start; /* Horizontal */
    justify-items: center;
    justify-items: end;
    justify-items: stretch; /* Por defecto */
    
    align-items: start; /* Vertical */
    align-items: center;
    align-items: end;
    align-items: stretch;
    
    /* Shorthand */
    place-content: center; /* align-content y justify-content */
    place-items: center; /* align-items y justify-items */
}

/* Alineación individual de un item */
.grid-item {
    justify-self: center;
    align-self: center;
    place-self: center; /* Ambos */
}
```

### 10.5 Grid automático

```css
.grid-auto {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    
    /* Comportamiento de filas automáticas */
    grid-auto-rows: 150px;
    grid-auto-rows: minmax(100px, auto);
    
    /* Dirección de flujo automático */
    grid-auto-flow: row; /* Por defecto */
    grid-auto-flow: column;
    grid-auto-flow: dense; /* Llena huecos */
}
```

### 10.6 Ejemplos prácticos

#### Layout básico de página
```css
.page-layout {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
    min-height: 100vh;
    gap: 20px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

#### Galería responsive
```css
.galeria {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
}

.galeria-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

#### Dashboard con cards
```css
.dashboard {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.card-destacada {
    grid-column: span 2; /* Ocupa 2 columnas */
}
```

---

## 11. Transformaciones y Transiciones

### 11.1 Transformaciones 2D

```css
.transformaciones {
    /* Trasladar (mover) */
    transform: translate(50px, 100px); /* x, y */
    transform: translateX(50px);
    transform: translateY(100px);
    
    /* Escalar (cambiar tamaño) */
    transform: scale(1.5); /* 150% del tamaño */
    transform: scale(2, 0.5); /* ancho, alto */
    transform: scaleX(2);
    transform: scaleY(0.5);
    
    /* Rotar */
    transform: rotate(45deg);
    transform: rotate(-90deg);
    
    /* Sesgar (inclinar) */
    transform: skew(20deg, 10deg);
    transform: skewX(20deg);
    transform: skewY(10deg);
    
    /* Múltiples transformaciones */
    transform: translate(50px, 50px) rotate(45deg) scale(1.2);
    
    /* Punto de origen de la transformación */
    transform-origin: center center; /* Por defecto */
    transform-origin: top left;
    transform-origin: 50% 50%;
    transform-origin: 100px 200px;
}
```

### 11.2 Transformaciones 3D

```css
.transformaciones-3d {
    /* Perspectiva (en el contenedor padre) */
    perspective: 1000px;
    
    /* Trasladar en Z */
    transform: translateZ(100px);
    transform: translate3d(50px, 50px, 100px);
    
    /* Rotar en 3D */
    transform: rotateX(45deg);
    transform: rotateY(45deg);
    transform: rotateZ(45deg); /* Igual que rotate() */
    transform: rotate3d(1, 1, 0, 45deg);
    
    /* Estilo de transformación 3D */
    transform-style: preserve-3d; /* Mantiene 3D en hijos */
    transform-style: flat; /* Por defecto */
    
    /* Visibilidad de la cara trasera */
    backface-visibility: visible; /* Por defecto */
    backface-visibility: hidden; /* Útil para voltear cartas */
}
```

### 11.3 Transiciones

Las transiciones animan cambios de propiedades CSS.

```css
.boton {
    background-color: blue;
    padding: 10px 20px;
    
    /* Propiedad a animar, duración, función de tiempo, retraso */
    transition: background-color 0.3s ease 0s;
    
    /* Animar múltiples propiedades */
    transition: 
        background-color 0.3s ease,
        transform 0.2s ease;
    
    /* Animar todas las propiedades */
    transition: all 0.3s ease;
}

.boton:hover {
    background-color: darkblue;
    transform: scale(1.1);
}
```

#### Propiedades de transition

```css
.elemento {
    /* Propiedad específica */
    transition-property: opacity;
    transition-property: all; /* Todas las propiedades */
    
    /* Duración */
    transition-duration: 0.3s;
    transition-duration: 300ms;
    
    /* Función de tiempo (easing) */
    transition-timing-function: ease; /* Por defecto */
    transition-timing-function: linear;
    transition-timing-function: ease-in;
    transition-timing-function: ease-out;
    transition-timing-function: ease-in-out;
    transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    
    /* Retraso */
    transition-delay: 0s;
    transition-delay: 0.5s;
}
```

### 11.4 Animaciones

Las animaciones permiten control más complejo que las transiciones.

```css
/* Definir la animación */
@keyframes deslizar {
    0% {
        transform: translateX(0);
        opacity: 0;
    }
    
    50% {
        opacity: 1;
    }
    
    100% {
        transform: translateX(100px);
        opacity: 0;
    }
}

/* Alternativa con from/to */
@keyframes aparecer {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

/* Aplicar la animación */
.animado {
    animation-name: deslizar;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-iteration-count: infinite; /* O número específico */
    animation-direction: normal; /* normal, reverse, alternate, alternate-reverse */
    animation-fill-mode: forwards; /* none, forwards, backwards, both */
    animation-play-state: running; /* running, paused */
    
    /* Shorthand */
    animation: deslizar 2s ease-in-out 0s infinite alternate forwards;
}
```

### 11.5 Ejemplos prácticos

#### Botón con hover suave
```css
.boton-hover {
    background: #3498db;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.boton-hover:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.boton-hover:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}
```

#### Card con efecto flip
```css
.card-flip {
    width: 300px;
    height: 200px;
    perspective: 1000px;
}

.card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
}

.card-flip:hover .card-inner {
    transform: rotateY(180deg);
}

.card-front,
.card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.card-back {
    transform: rotateY(180deg);
}
```

#### Animación de carga (spinner)
```css
@keyframes girar {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    animation: girar 1s linear infinite;
}
```

#### Animación de pulso
```css
@keyframes pulso {
    0%, 100% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.1);
        opacity: 0.8;
    }
}

.pulso {
    animation: pulso 2s ease-in-out infinite;
}
```

---

## 12. Responsive Design y Media Queries

### 12.1 Viewport Meta Tag

```html
<!-- SIEMPRE incluir en el <head> -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 12.2 Media Queries básicas

```css
/* Móviles pequeños */
@media (max-width: 576px) {
    .contenedor {
        padding: 10px;
    }
}

/* Móviles grandes / tablets pequeñas */
@media (min-width: 577px) and (max-width: 768px) {
    .contenedor {
        padding: 15px;
    }
}

/* Tablets */
@media (min-width: 769px) and (max-width: 992px) {
    .contenedor {
        padding: 20px;
    }
}

/* Escritorio */
@media (min-width: 993px) {
    .contenedor {
        padding: 30px;
    }
}
```

### 12.3 Breakpoints comunes

```css
/* Mobile First (diseño desde móvil hacia arriba) */
/* Por defecto: móvil */
.columna {
    width: 100%;
}

/* Tablets en adelante */
@media (min-width: 768px) {
    .columna {
        width: 50%;
    }
}

/* Desktop en adelante */
@media (min-width: 1024px) {
    .columna {
        width: 33.33%;
    }
}

/* Desktop grande */
@media (min-width: 1440px) {
    .columna {
        width: 25%;
    }
}
```

### 12.4 Tipos de media queries

```css
/* Por tipo de dispositivo */
@media screen {
    /* Pantallas */
}

@media print {
    /* Impresión */
    .no-imprimir {
        display: none;
    }
}

/* Por orientación */
@media (orientation: portrait) {
    /* Vertical (móvil normal) */
}

@media (orientation: landscape) {
    /* Horizontal (móvil girado) */
}

/* Por resolución */
@media (min-resolution: 192dpi) {
    /* Pantallas retina */
}

/* Preferencias del usuario */
@media (prefers-color-scheme: dark) {
    /* Modo oscuro */
    body {
        background: #1a1a1a;
        color: #ffffff;
    }
}

@media (prefers-reduced-motion: reduce) {
    /* Usuario prefiere menos animaciones */
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

### 12.5 Técnicas responsive

#### Imágenes responsive
```css
img {
    max-width: 100%;
    height: auto;
    display: block;
}

/* Imágenes de fondo responsive */
.hero {
    background-image: url('hero-mobile.jpg');
    background-size: cover;
    background-position: center;
}

@media (min-width: 768px) {
    .hero {
        background-image: url('hero-tablet.jpg');
    }
}

@media (min-width: 1200px) {
    .hero {
        background-image: url('hero-desktop.jpg');
    }
}
```

#### Tipografía responsive
```css
/* Con media queries */
body {
    font-size: 14px;
}

@media (min-width: 768px) {
    body {
        font-size: 16px;
    }
}

/* Con clamp (más moderno) */
body {
    font-size: clamp(14px, 2vw, 18px);
    /* mínimo, preferido, máximo */
}

h1 {
    font-size: clamp(1.5rem, 5vw, 3rem);
}
```

#### Container queries (CSS moderno)
```css
.card-container {
    container-type: inline-size;
    container-name: card;
}

@container card (min-width: 400px) {
    .card {
        display: flex;
    }
}
```

### 12.6 Ejemplo completo: Layout responsive

```css
/* Mobile First */
.layout {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 15px;
}

.sidebar {
    order: 2; /* Sidebar después del main en móvil */
}

.main {
    order: 1;
}

/* Tablet */
@media (min-width: 768px) {
    .layout {
        padding: 30px;
    }
    
    .main {
        font-size: 18px;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .layout {
        flex-direction: row;
        max-width: 1200px;
        margin: 0 auto;
    }
    
    .sidebar {
        flex: 0 0 250px;
        order: 1; /* Sidebar a la izquierda */
    }
    
    .main {
        flex: 1;
        order: 2;
    }
}
```

---

## 13. Pseudo-clases y Pseudo-elementos

### 13.1 Pseudo-clases (estados y posición)

```css
/* Enlaces */
a:link { color: blue; } /* No visitado */
a:visited { color: purple; } /* Visitado */
a:hover { color: red; } /* Al pasar el ratón */
a:active { color: orange; } /* Al hacer clic */
a:focus { outline: 2px solid blue; } /* Al recibir foco (teclado) */

/* Formularios */
input:focus {
    border-color: blue;
    outline: none;
}

input:disabled {
    background: #f0f0f0;
    cursor: not-allowed;
}

input:checked {
    /* Checkbox o radio seleccionado */
}

input:valid {
    border-color: green;
}

input:invalid {
    border-color: red;
}

input:required {
    border-left: 3px solid red;
}

input:optional {
    border-left: 3px solid gray;
}

/* Posición */
li:first-child {
    /* Primer hijo */
    font-weight: bold;
}

li:last-child {
    /* Último hijo */
    border-bottom: none;
}

li:nth-child(2) {
    /* Segundo hijo */
}

li:nth-child(odd) {
    /* Hijos impares (1, 3, 5...) */
    background: #f0f0f0;
}

li:nth-child(even) {
    /* Hijos pares (2, 4, 6...) */
    background: white;
}

li:nth-child(3n) {
    /* Cada 3 elementos (3, 6, 9...) */
}

li:nth-child(3n+1) {
    /* 1, 4, 7, 10... */
}

p:first-of-type {
    /* Primer <p> entre sus hermanos */
}

p:last-of-type {
    /* Último <p> entre sus hermanos */
}

p:nth-of-type(2) {
    /* Segundo <p> entre sus hermanos */
}

p:only-child {
    /* Único hijo de su padre */
}

p:only-of-type {
    /* Único <p> entre sus hermanos */
}

div:empty {
    /* Div sin contenido */
    display: none;
}

/* Negación */
li:not(.especial) {
    /* Todos los <li> excepto los que tienen clase "especial" */
}

/* Target */
:target {
    /* Elemento objetivo del enlace ancla actual */
    background: yellow;
}
```

### 13.2 Pseudo-elementos (partes del elemento)

```css
/* ::before y ::after - Contenido generado */
.etiqueta::before {
    content: "★ ";
    color: gold;
}

.enlace-externo::after {
    content: " ↗";
    font-size: 0.8em;
}

/* Primera letra */
p::first-letter {
    font-size: 2em;
    font-weight: bold;
    float: left;
    margin-right: 5px;
}

/* Primera línea */
p::first-line {
    font-weight: bold;
    color: #333;
}

/* Selección de texto */
::selection {
    background: #3498db;
    color: white;
}

::-moz-selection {
    /* Para Firefox */
    background: #3498db;
    color: white;
}

/* Placeholder de inputs */
input::placeholder {
    color: #999;
    font-style: italic;
}
```

### 13.3 Ejemplos prácticos

#### Crear iconos con CSS
```css
.icono-check::before {
    content: "✓";
    display: inline-block;
    width: 20px;
    height: 20px;
    background: green;
    color: white;
    text-align: center;
    border-radius: 50%;
    margin-right: 5px;
}
```

#### Tooltip personalizado
```css
.tooltip {
    position: relative;
    cursor: help;
}

.tooltip::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: #333;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
}

.tooltip:hover::after {
    opacity: 1;
}
```

#### Lista estilizada
```css
ul.custom-list {
    list-style: none;
    padding-left: 0;
}

ul.custom-list li::before {
    content: "▸ ";
    color: #3498db;
    font-weight: bold;
    margin-right: 8px;
}
```

#### Clearfix (para floats)
```css
.clearfix::after {
    content: "";
    display: table;
    clear: both;
}
```

---

## 14. Buenas Prácticas

### 14.1 Organización del código

```css
/* 1. Reset o normalización */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* 2. Variables CSS (Custom Properties) */
:root {
    --color-primario: #3498db;
    --color-secundario: #2ecc71;
    --fuente-principal: 'Roboto', sans-serif;
    --espaciado: 1rem;
}

/* 3. Estilos generales */
body {
    font-family: var(--fuente-principal);
    line-height: 1.6;
    color: #333;
}

/* 4. Layout principal */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--espaciado);
}

/* 5. Componentes */
.btn {
    background: var(--color-primario);
    /* ... */
}

/* 6. Utilidades */
.text-center { text-align: center; }
.mt-1 { margin-top: 0.5rem; }

/* 7. Media queries al final */
@media (max-width: 768px) {
    /* ... */
}
```

### 14.2 Nomenclatura BEM

```css
/* Block (Bloque) */
.card { }

/* Element (Elemento) */
.card__title { }
.card__content { }
.card__button { }

/* Modifier (Modificador) */
.card--destacada { }
.card__button--primary { }
.card__button--disabled { }
```

Ejemplo HTML:
```html
<div class="card card--destacada">
    <h2 class="card__title">Título</h2>
    <p class="card__content">Contenido</p>
    <button class="card__button card__button--primary">Acción</button>
</div>
```

### 14.3 Variables CSS (Custom Properties)

```css
:root {
    /* Colores */
    --color-primario: #3498db;
    --color-secundario: #2ecc71;
    --color-error: #e74c3c;
    --color-texto: #333;
    --color-fondo: #f8f9fa;
    
    /* Tipografía */
    --fuente-titulos: 'Montserrat', sans-serif;
    --fuente-texto: 'Open Sans', sans-serif;
    --texto-base: 16px;
    
    /* Espaciado */
    --espaciado-xs: 0.25rem;
    --espaciado-sm: 0.5rem;
    --espaciado-md: 1rem;
    --espaciado-lg: 2rem;
    --espaciado-xl: 4rem;
    
    /* Bordes */
    --radio-borde: 4px;
    --radio-borde-lg: 8px;
    
    /* Sombras */
    --sombra-sm: 0 1px 3px rgba(0,0,0,0.12);
    --sombra-md: 0 4px 6px rgba(0,0,0,0.15);
    --sombra-lg: 0 10px 20px rgba(0,0,0,0.20);
    
    /* Transiciones */
    --transicion-rapida: 0.15s ease;
    --transicion-normal: 0.3s ease;
}

/* Uso */
.boton {
    background: var(--color-primario);
    padding: var(--espaciado-sm) var(--espaciado-md);
    border-radius: var(--radio-borde);
    box-shadow: var(--sombra-sm);
    transition: all var(--transicion-normal);
}

/* Variables con fallback */
.elemento {
    color: var(--color-personalizado, #000); /* Si no existe, usa #000 */
}

/* Tema oscuro */
@media (prefers-color-scheme: dark) {
    :root {
        --color-texto: #f8f9fa;
        --color-fondo: #1a1a1a;
    }
}
```

### 14.4 Performance y optimización

```css
/* 1. Evitar selectores complejos */
/* ❌ Malo */
div > ul > li > a:hover { }

/* ✅ Bueno */
.menu-link:hover { }

/* 2. Usar will-change para animaciones pesadas */
.elemento-animado {
    will-change: transform, opacity;
}

/* 3. Preferir transform y opacity para animaciones */
/* ✅ Bueno (GPU accelerated) */
.mover {
    transform: translateX(100px);
}

/* ❌ Malo (más lento) */
.mover {
    left: 100px;
}

/* 4. Minimizar repaint y reflow */
/* Cambiar múltiples propiedades a la vez */
.elemento {
    transform: translateX(10px) scale(1.1) rotate(5deg);
}

/* 5. Usar contain para optimizar */
.card {
    contain: layout style paint;
}
```

### 14.5 Accesibilidad

```css
/* 1. Mantener contraste adecuado */
.texto {
    color: #333; /* ✅ Buen contraste con fondo blanco */
}

/* 2. No eliminar outline en :focus sin alternativa */
/* ❌ Malo */
button:focus {
    outline: none;
}

/* ✅ Bueno */
button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.5);
}

/* 3. Ocultar visualmente pero mantener para lectores de pantalla */
.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

/* 4. Respetar preferencias de usuario */
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}

/* 5. Tamaño mínimo de áreas clicables */
button,
a {
    min-height: 44px; /* Recomendación WCAG */
    min-width: 44px;
}
```

### 14.6 Reset CSS básico

```css
/* Reset simple pero efectivo */
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    line-height: 1.6;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

img,
picture,
video,
canvas,
svg {
    display: block;
    max-width: 100%;
}

input,
button,
textarea,
select {
    font: inherit;
}

button {
    cursor: pointer;
}

a {
    color: inherit;
    text-decoration: none;
}

ul {
    list-style: none;
}
```

---

## Recursos adicionales

### Herramientas útiles

- **MDN Web Docs**: [developer.mozilla.org/es/docs/Web/CSS](https://developer.mozilla.org/es/docs/Web/CSS)
- **Can I Use**: [caniuse.com](https://caniuse.com) - Compatibilidad de navegadores
- **CSS-Tricks**: [css-tricks.com](https://css-tricks.com) - Tutoriales y guías
- **Flexbox Froggy**: [flexboxfroggy.com](https://flexboxfroggy.com) - Aprender Flexbox jugando
- **Grid Garden**: [cssgridgarden.com](https://cssgridgarden.com) - Aprender Grid jugando
- **CSS Validation**: [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator)

### Frameworks CSS populares

- **Bootstrap**: Framework completo con componentes
- **Tailwind CSS**: Utility-first CSS framework
- **Bulma**: Framework modular basado en Flexbox

---

## Ejercicios recomendados

1. **Básico**: Crear una tarjeta de perfil con imagen, nombre y descripción
2. **Intermedio**: Layout de blog con header, sidebar y main content usando Flexbox
3. **Intermedio**: Galería de imágenes responsive con Grid
4. **Avanzado**: Página completa responsive con navegación, hero, secciones y footer
5. **Avanzado**: Dashboard con gráficos y cards usando Grid y Flexbox

---

