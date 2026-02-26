# Ejercicio 1: BIBLIOTECA - XML+DTD+XSD

## Enunciado

Queremos estructurar en distintos documentos XML la información de los diferentes libros que disponemos en una biblioteca, teniendo en cuenta los siguientes puntos:

- Cada documento XML corresponderá a un libro. Su elemento raíz será **libro**
- Un libro va a tener los siguientes atributos:
  - **isbn** que incluirá un código ISBN-10 formado por 10 dígitos, será obligatorio
  - **idioma** que incluirá el código del idioma (es, en, fr, de), obligatorio
  - **formato** que podrá tomar los valores "tapa_dura", "tapa_blanda" o "ebook", será opcional con valor por defecto "tapa_blanda"

- En un libro tendremos los siguientes elementos y en este orden:
  - **autores**: que contendrá todos los autores del libro (al menos habrá un autor como mínimo)
  - **editorial**: que contendrá el nombre de la editorial
  - **sinopsis**: que contendrá el resumen del libro
  - una serie de elementos llamados "**categoria**" que serán elementos vacíos con un atributo "nombre" que contendrá el nombre de la categoría del libro. Un libro puede no contener categorías, pero puede contener varias.

- Cada autor tendrá los elementos **nombre**, **apellidos** y **nacionalidad** (opcional). Además cada autor tendrá un atributo requerido "**id**" que tendrá un valor único en todo el documento (es decir, no habrá dos autores con el mismo "id"), y un atributo "**rol**" que puede tomar los valores "autor", "coautor" o "traductor", con un valor por defecto "autor".

## Apartados a realizar:

1. Elabora dos documentos XML (cada uno de ellos contendrá un libro) que cumplan la estructura anterior.

2. Genera un documento DTD que valide la estructura anterior (incluido los dos XML generados). Indicar los requisitos que no se pueden plasmar en el DTD.

3. Genera un documento XSD que valide la estructura anterior (incluido los dos XML generados). Indicar los requisitos que no se pueden plasmar en el XSD.

## Ampliación:

4. Queremos modificar la estructura anterior de forma que:
   a. Un autor además de incluir su nombre y apellidos, muestre de forma opcional uno de los siguientes elementos: **biografía**, **foto** o **web**.
   b. Un libro puede tener el elemento **precio** (opcional) que almacenará un número positivo con dos decimales. Tendrá un atributo opcional "**moneda**" que por defecto tomará el valor de "EUR".

5. Modifica ambos XML generados en el apartado 1 para implementar estas nuevas condiciones.

6. Modifica el DTD para incluir estas nuevas condiciones en la estructura.

7. Modifica el XSD para incluir estas nuevas condiciones en la estructura.

---

# Ejercicio 2: RECETAS - XML+DTD+XSD

## Enunciado

Queremos estructurar en distintos documentos XML las diferentes recetas de cocina que disponemos, teniendo en cuenta los siguientes puntos:

- Cada documento XML corresponderá a una receta. Su elemento raíz será **receta**
- Una receta va a tener los siguientes atributos:
  - **codigo** que incluirá un código formado por dos letras y tres números, será obligatorio
  - **nombre** que incluirá el nombre de la receta, obligatorio
  - **dificultad** que podrá tomar los valores "facil", "media" o "dificil", será opcional

- En una receta tendremos los siguientes elementos y en este orden:
  - **ingredientes**: que contendrá todos los ingredientes de la receta (al menos habrá un ingrediente como mínimo)
  - **elaboracion**: que contendrá los pasos para preparar la receta
  - **tiempo_preparacion**: que contendrá el tiempo en minutos (número entero)
  - una serie de elementos llamados "**etiqueta**" que serán elementos vacíos con un atributo "tipo" que contendrá el tipo de etiqueta de la receta (ejemplo: "vegana", "sin_gluten", "rapida"). Una receta puede no contener etiquetas, pero puede contener varias.

- Cada ingrediente tendrá los elementos **nombre**, **cantidad** (que será un número decimal positivo) y **unidad** (gramos, litros, unidades, etc.). Además cada ingrediente tendrá un atributo requerido "**id**" que tendrá un valor único en todo el documento (es decir, no habrá dos ingredientes con el mismo "id"), y un atributo "**tipo**" que puede tomar los valores "basico", "especiado" o "guarnicion", con un valor por defecto "basico".

## Apartados a realizar:

1. Elabora dos documentos XML (cada uno de ellos contendrá una receta) que cumplan la estructura anterior.

2. Genera un documento DTD que valide la estructura anterior (incluido los dos XML generados). Indicar los requisitos que no se pueden plasmar en el DTD.

3. Genera un documento XSD que valide la estructura anterior (incluido los dos XML generados). Indicar los requisitos que no se pueden plasmar en el XSD.

## Ampliación:

4. Queremos modificar la estructura anterior de forma que:
   a. Un ingrediente además de incluir su nombre, cantidad y unidad, muestre de forma opcional uno de los siguientes elementos: **sustituto**, **imagen** o **info_nutricional**.
   b. Una receta puede tener el elemento **calorias** (opcional) que almacenará un número entero positivo entre 50 y 2000. Tendrá un atributo opcional "**por**" que por defecto tomará el valor de "porcion".

5. Modifica ambos XML generados en el apartado 1 para implementar estas nuevas condiciones.

6. Modifica el DTD para incluir estas nuevas condiciones en la estructura.

7. Modifica el XSD para incluir estas nuevas condiciones en la estructura.

---

# Ejercicio 3: PELÍCULAS - XML+DTD+XSD

## Enunciado

Queremos estructurar en distintos documentos XML la información de las diferentes películas que disponemos en nuestra videoteca, teniendo en cuenta los siguientes puntos:

- Cada documento XML corresponderá a una película. Su elemento raíz será **pelicula**
- Una película va a tener los siguientes atributos:
  - **id** que incluirá un código formado por tres letras y cuatro números, será obligatorio
  - **titulo** que incluirá el título de la película, obligatorio
  - **clasificacion** que podrá tomar los valores "ATP", "PG-13", "R" o "NC-17", será opcional

- En una película tendremos los siguientes elementos y en este orden:
  - **actores**: que contendrá todos los actores de la película (al menos habrá un actor como mínimo)
  - **director**: que contendrá el nombre del director
  - **año**: que contendrá el año de estreno (número entero de 4 dígitos)
  - **duracion**: que contendrá la duración en minutos (número entero)
  - **sinopsis**: que contendrá el resumen de la película
  - una serie de elementos llamados "**genero**" que serán elementos vacíos con un atributo "nombre" que contendrá el género de la película. Una película puede no contener géneros, pero puede contener varios.

- Cada actor tendrá los elementos **nombre**, **apellido**, **edad** (opcional, número entre 1 y 120). Además cada actor tendrá un atributo requerido "**codigo**" que tendrá un valor único en todo el documento (es decir, no habrá dos actores con el mismo "codigo"), y un atributo "**rol**" que puede tomar los valores "protagonista", "secundario" o "extra", con un valor por defecto "protagonista".

## Apartados a realizar:

1. Elabora dos documentos XML (cada uno de ellos contendrá una película) que cumplan la estructura anterior.

2. Genera un documento DTD que valide la estructura anterior (incluido los dos XML generados). Indicar los requisitos que no se pueden plasmar en el DTD.

3. Genera un documento XSD que valide la estructura anterior (incluido los dos XML generados). Indicar los requisitos que no se pueden plasmar en el XSD.

## Ampliación:

4. Queremos modificar la estructura anterior de forma que:
   a. Un actor además de incluir su nombre, apellido y edad, muestre de forma opcional uno de los siguientes elementos: **biografia**, **foto_url** o **premios**.
   b. Una película puede tener el elemento **presupuesto** (opcional) que almacenará un número entero positivo (representando millones). Tendrá un atributo opcional "**moneda**" que por defecto tomará el valor de "USD".

5. Modifica ambos XML generados en el apartado 1 para implementar estas nuevas condiciones.

6. Modifica el DTD para incluir estas nuevas condiciones en la estructura.

7. Modifica el XSD para incluir estas nuevas condiciones en la estructura.

---

