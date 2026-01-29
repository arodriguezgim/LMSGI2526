# UD6 - XML y JSON: Definición de esquemas y almacenamiento de información

## 1. Introducción a XML

XML (eXtensible Markup Language) es un lenguaje de marcado que permite estructurar, almacenar y transportar información de forma legible tanto para humanos como para máquinas. A diferencia de HTML, XML no tiene etiquetas predefinidas, sino que permite crear las propias según las necesidades.

### 1.1 Características principales de XML

XML se caracteriza por su flexibilidad y portabilidad. Es independiente de plataforma y lenguaje de programación, lo que lo hace ideal para el intercambio de datos entre sistemas heterogéneos. Su estructura jerárquica en árbol facilita la organización de información compleja, y al ser texto plano, resulta fácil de leer y editar.

### 1.2 Sintaxis básica de XML

Un documento XML bien formado debe cumplir ciertas reglas. Debe tener un único elemento raíz que contenga todos los demás elementos. Toda etiqueta de apertura debe tener su correspondiente etiqueta de cierre, y las etiquetas deben estar correctamente anidadas. Los nombres de las etiquetas son sensibles a mayúsculas y minúsculas, y los valores de los atributos deben ir siempre entre comillas.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<biblioteca>
    <libro id="001">
        <titulo>El Quijote</titulo>
        <autor>Miguel de Cervantes</autor>
        <año>1605</año>
        <genero>Novela</genero>
    </libro>
    <libro id="002">
        <titulo>Cien años de soledad</titulo>
        <autor>Gabriel García Márquez</autor>
        <año>1967</año>
        <genero>Realismo mágico</genero>
    </libro>
</biblioteca>
```

### 1.3 Elementos, atributos y comentarios

Los elementos XML se definen mediante etiquetas y pueden contener texto, otros elementos o estar vacíos. Los atributos proporcionan información adicional sobre los elementos y se colocan dentro de la etiqueta de apertura. Los comentarios en XML se escriben entre `<!--` y `-->` y son ignorados por los procesadores.

```xml
<!-- Esto es un comentario -->
<producto categoria="electrónica" stock="true">
    <nombre>Smartphone</nombre>
    <precio moneda="EUR">599.99</precio>
</producto>
```

**Ejercicio 1:** Crea un documento XML que represente una tienda de música con al menos 3 discos. Cada disco debe tener título, artista, año de publicación, género y precio. Utiliza tanto elementos como atributos apropiadamente.

**Ejercicio 2:** Partiendo del XML anterior, añade un elemento para las canciones de cada disco, incluyendo el título y duración de al menos 3 canciones por disco.

## 2. DTD (Document Type Definition)

Los DTD permiten definir la estructura y las reglas que debe cumplir un documento XML. Establecen qué elementos pueden aparecer, en qué orden, cuántas veces y qué atributos pueden tener.

### 2.1 DTD interno vs externo

Un DTD puede declararse internamente dentro del propio documento XML o en un archivo externo separado. El DTD interno se incluye en la declaración DOCTYPE del documento, mientras que el externo se referencia mediante una URL o ruta de archivo.

```xml
<!-- DTD Interno -->
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE biblioteca [
<!ELEMENT biblioteca (libro+)>
<!ELEMENT libro (titulo, autor, año)>
<!ELEMENT titulo (#PCDATA)>
<!ELEMENT autor (#PCDATA)>
<!ELEMENT año (#PCDATA)>
<!ATTLIST libro id ID #REQUIRED>
]>
<biblioteca>
    <libro id="L001">
        <titulo>Don Juan Tenorio</titulo>
        <autor>José Zorrilla</autor>
        <año>1844</año>
    </libro>
</biblioteca>
```

```xml
<!-- DTD Externo -->
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE biblioteca SYSTEM "biblioteca.dtd">
<biblioteca>
    <!-- contenido -->
</biblioteca>
```

### 2.2 Declaración de elementos

Los elementos se declaran con la sintaxis `<!ELEMENT nombre contenido>`. El contenido puede ser PCDATA (texto), otros elementos, EMPTY (vacío), o ANY (cualquier contenido). Los modificadores indican cardinalidad: sin modificador (una vez), + (una o más veces), * (cero o más veces), ? (cero o una vez).

```dtd
<!ELEMENT biblioteca (libro+)>
<!ELEMENT libro (titulo, autor, año?, editorial*)>
<!ELEMENT titulo (#PCDATA)>
<!ELEMENT descripcion (#PCDATA | enfasis)*>
```

### 2.3 Declaración de atributos

Los atributos se declaran con `<!ATTLIST elemento atributo tipo requisito>`. Los tipos pueden ser CDATA (texto), ID (identificador único), IDREF (referencia a ID), entre otros. Los requisitos pueden ser REQUIRED (obligatorio), IMPLIED (opcional), o un valor fijo.

```dtd
<!ATTLIST libro 
    id ID #REQUIRED
    isbn CDATA #IMPLIED
    idioma (es|en|fr) "es"
    disponible (true|false) #REQUIRED>
```

**Ejercicio 3:** Crea un DTD completo para un sistema de gestión de empleados que incluya departamentos y empleados. Cada empleado debe tener nombre, apellidos, DNI (como atributo ID), fecha de nacimiento, departamento (IDREF), y opcionalmente un email y teléfono. Valida el XML con el DTD.

**Ejercicio 4:** Define un DTD para un menú de restaurante con categorías (entrantes, principales, postres) y platos. Cada plato debe tener nombre, descripción, precio y lista de alérgenos. Incluye atributos para indicar si el plato es vegetariano o vegano.

## 3. XML Schema (XSD)

XML Schema es un lenguaje más potente y expresivo que DTD para definir la estructura de documentos XML. Utiliza sintaxis XML, soporta espacios de nombres y tipos de datos, y permite validaciones más complejas.

### 3.1 Ventajas de XSD sobre DTD

XML Schema ofrece múltiples ventajas sobre DTD. Soporta tipos de datos nativos como string, integer, date o boolean, lo que permite validaciones más precisas. Permite definir tipos personalizados y establecer restricciones complejas sobre los valores. Al estar escrito en XML, puede procesarse con las mismas herramientas y soporta espacios de nombres para evitar conflictos.

### 3.2 Estructura básica de un XSD

Un esquema XSD comienza con el elemento raíz `<xs:schema>` que define el espacio de nombres. Los elementos y tipos se definen dentro de este elemento raíz. La sintaxis utiliza el prefijo `xs:` para los elementos del propio lenguaje de esquemas.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    
    <xs:element name="biblioteca">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="libro" maxOccurs="unbounded">
                    <xs:complexType>
                        <xs:sequence>
                            <xs:element name="titulo" type="xs:string"/>
                            <xs:element name="autor" type="xs:string"/>
                            <xs:element name="año" type="xs:integer"/>
                            <xs:element name="precio" type="xs:decimal"/>
                        </xs:sequence>
                        <xs:attribute name="isbn" type="xs:string" use="required"/>
                    </xs:complexType>
                </xs:element>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
    
</xs:schema>
```

### 3.3 Tipos simples y complejos

Los tipos simples contienen únicamente texto sin elementos hijos ni atributos. XML Schema proporciona tipos predefinidos como string, integer, boolean, date, entre otros. Los tipos complejos pueden contener elementos hijos, atributos o ambos. Se definen mediante `<xs:complexType>` y pueden especificar la secuencia y cardinalidad de sus elementos hijos.

```xml
<!-- Tipo simple con restricciones -->
<xs:simpleType name="codigoPostal">
    <xs:restriction base="xs:string">
        <xs:pattern value="[0-9]{5}"/>
    </xs:restriction>
</xs:simpleType>

<!-- Tipo complejo -->
<xs:complexType name="direccion">
    <xs:sequence>
        <xs:element name="calle" type="xs:string"/>
        <xs:element name="ciudad" type="xs:string"/>
        <xs:element name="cp" type="codigoPostal"/>
    </xs:sequence>
</xs:complexType>
```

### 3.4 Restricciones y facetas

XML Schema permite aplicar restricciones a los tipos de datos mediante facetas. Las facetas más comunes incluyen minLength, maxLength para la longitud de cadenas; minInclusive, maxInclusive para rangos numéricos; pattern para expresiones regulares; y enumeration para valores permitidos.

```xml
<xs:simpleType name="edad">
    <xs:restriction base="xs:integer">
        <xs:minInclusive value="0"/>
        <xs:maxInclusive value="120"/>
    </xs:restriction>
</xs:simpleType>

<xs:simpleType name="estadoPedido">
    <xs:restriction base="xs:string">
        <xs:enumeration value="pendiente"/>
        <xs:enumeration value="procesando"/>
        <xs:enumeration value="enviado"/>
        <xs:enumeration value="entregado"/>
    </xs:restriction>
</xs:simpleType>
```

**Ejercicio 5:** Crea un esquema XSD para una aplicación de gestión de cursos online. Debe incluir cursos con título, descripción, duración (en horas, entre 10 y 200), nivel (principiante, intermedio, avanzado), precio y fecha de inicio. Añade también estudiantes con nombre, email (validado con pattern), fecha de nacimiento y lista de cursos matriculados (usando IDREF).

**Ejercicio 6:** Desarrolla un XSD para un sistema de reservas de hotel. Incluye habitaciones con tipo (individual, doble, suite), precio por noche, y capacidad máxima. Las reservas deben tener fecha de entrada, fecha de salida (posterior a la entrada), número de huéspedes y estado (confirmada, pendiente, cancelada).

## 4. Introducción a JSON

JSON (JavaScript Object Notation) es un formato ligero de intercambio de datos basado en texto. Su sintaxis simple y su fácil integración con JavaScript lo han convertido en uno de los formatos más populares para APIs web y configuración de aplicaciones.

### 4.1 Características y ventajas de JSON

JSON destaca por su simplicidad y legibilidad. Es más compacto que XML, lo que reduce el tamaño de los archivos y el ancho de banda necesario. Su sintaxis está basada en la notación de objetos de JavaScript, lo que facilita su uso en aplicaciones web. Es independiente del lenguaje de programación y la mayoría de lenguajes modernos incluyen bibliotecas nativas para trabajar con JSON.

### 4.2 Sintaxis de JSON

JSON utiliza una sintaxis basada en pares clave-valor. Los objetos se delimitan con llaves, los arrays con corchetes, y los pares clave-valor se separan por dos puntos. Las claves siempre son cadenas entre comillas dobles. Los valores pueden ser strings, números, booleanos, null, objetos o arrays.

```json
{
    "biblioteca": {
        "nombre": "Biblioteca Municipal",
        "direccion": {
            "calle": "Calle Mayor 1",
            "ciudad": "Madrid",
            "cp": "28001"
        },
        "libros": [
            {
                "id": 1,
                "titulo": "El Quijote",
                "autor": "Miguel de Cervantes",
                "año": 1605,
                "disponible": true,
                "prestamos": null
            },
            {
                "id": 2,
                "titulo": "La Regenta",
                "autor": "Leopoldo Alas Clarín",
                "año": 1884,
                "disponible": false,
                "prestamos": 245
            }
        ]
    }
}
```

### 4.3 Tipos de datos en JSON

JSON soporta seis tipos de datos. Las cadenas de texto se escriben entre comillas dobles y pueden contener caracteres Unicode. Los números pueden ser enteros o decimales, positivos o negativos. Los booleanos se representan con true o false. El valor null representa la ausencia de valor. Los objetos son colecciones de pares clave-valor entre llaves. Los arrays son listas ordenadas de valores entre corchetes.

```json
{
    "texto": "Hola mundo",
    "entero": 42,
    "decimal": 3.14,
    "booleano": true,
    "nulo": null,
    "array": [1, 2, 3, "cuatro"],
    "objeto": {
        "propiedad": "valor"
    }
}
```

**Ejercicio 7:** Convierte el XML del Ejercicio 1 (tienda de música) a formato JSON. Asegúrate de representar correctamente los arrays y objetos anidados.

**Ejercicio 8:** Crea un documento JSON que represente el catálogo de una librería online con al menos 5 libros. Incluye información como título, autores (puede ser múltiple), ISBN, editorial, año de publicación, precio, stock disponible, categorías (array), y valoración media de usuarios.

## 5. JSON Schema

JSON Schema es un vocabulario que permite anotar y validar documentos JSON. Define la estructura esperada, los tipos de datos y las restricciones que debe cumplir un documento JSON válido.

### 5.1 Fundamentos de JSON Schema

JSON Schema se escribe en formato JSON y utiliza palabras clave específicas para definir la estructura. El campo $schema indica la versión del estándar utilizada, type especifica el tipo de dato esperado, y properties define las propiedades de un objeto. JSON Schema permite validar tanto la estructura como los valores de los datos.

```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Libro",
    "type": "object",
    "properties": {
        "titulo": {
            "type": "string",
            "minLength": 1
        },
        "autor": {
            "type": "string"
        },
        "año": {
            "type": "integer",
            "minimum": 1000,
            "maximum": 2026
        },
        "precio": {
            "type": "number",
            "minimum": 0
        },
        "disponible": {
            "type": "boolean"
        }
    },
    "required": ["titulo", "autor", "año"]
}
```

### 5.2 Validación de propiedades

JSON Schema permite definir restricciones detalladas sobre las propiedades. La palabra clave required especifica qué campos son obligatorios. Para strings se puede establecer minLength, maxLength y pattern (expresión regular). Para números están disponibles minimum, maximum, exclusiveMinimum y exclusiveMaximum. Los arrays pueden restringirse con minItems, maxItems y uniqueItems.

```json
{
    "type": "object",
    "properties": {
        "email": {
            "type": "string",
            "format": "email"
        },
        "edad": {
            "type": "integer",
            "minimum": 18,
            "maximum": 100
        },
        "telefono": {
            "type": "string",
            "pattern": "^[0-9]{9}$"
        },
        "tags": {
            "type": "array",
            "items": {
                "type": "string"
            },
            "minItems": 1,
            "uniqueItems": true
        }
    },
    "required": ["email", "edad"]
}
```

### 5.3 Esquemas complejos y referencias

JSON Schema soporta definiciones reutilizables mediante $defs y referencias con $ref. Esto permite crear esquemas modulares y evitar duplicación. También se pueden combinar esquemas usando allOf, anyOf y oneOf para validaciones complejas.

```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$defs": {
        "direccion": {
            "type": "object",
            "properties": {
                "calle": {"type": "string"},
                "ciudad": {"type": "string"},
                "cp": {
                    "type": "string",
                    "pattern": "^[0-9]{5}$"
                }
            },
            "required": ["calle", "ciudad", "cp"]
        }
    },
    "type": "object",
    "properties": {
        "nombre": {"type": "string"},
        "direccionFacturacion": {"$ref": "#/$defs/direccion"},
        "direccionEnvio": {"$ref": "#/$defs/direccion"}
    }
}
```

**Ejercicio 9:** Crea un JSON Schema completo para el JSON del Ejercicio 8 (catálogo de librería). Incluye todas las validaciones necesarias: tipos de datos, campos requeridos, rangos válidos para precio y stock, formato del ISBN, y asegúrate de que las categorías sea un array no vacío.

**Ejercicio 10:** Desarrolla un JSON Schema para un sistema de gestión de pedidos de un restaurante. Debe validar que cada pedido tenga un número de mesa (entero entre 1 y 50), fecha y hora, lista de platos (cada uno con nombre, cantidad positiva y precio), total (calculable sumando los platos), estado (pendiente, preparando, servido, pagado), y opcionalmente comentarios del cliente.

## 6. XML vs JSON: Comparativa y casos de uso

Tanto XML como JSON son formatos válidos para estructurar e intercambiar datos, pero cada uno tiene sus ventajas según el contexto de aplicación.

### 6.1 Ventajas y desventajas

XML ofrece mayor expresividad mediante atributos, espacios de nombres y esquemas potentes como XSD. Es ideal cuando se necesita validación estricta, soporte para metadatos complejos o procesamiento mediante tecnologías como XSLT. Sin embargo, su verbosidad lo hace más pesado y menos legible.

JSON destaca por su simplicidad y ligereza. Es más fácil de leer y escribir, ocupa menos espacio y se procesa más rápidamente. Su integración natural con JavaScript lo hace perfecto para aplicaciones web. No obstante, carece de comentarios nativos y sus capacidades de validación son menos maduras que las de XML.

### 6.2 Cuándo usar cada formato

XML es preferible en documentos complejos con metadatos extensos, sistemas empresariales que requieren validación estricta, configuraciones que necesitan comentarios y documentación, intercambio de datos con sistemas legacy, y cuando se requiere procesamiento con XSLT o XPath.

JSON es más adecuado para APIs REST y comunicación web, configuración de aplicaciones modernas, almacenamiento en bases de datos NoSQL, intercambio de datos en aplicaciones móviles, y situaciones donde el tamaño del archivo y la velocidad de procesamiento son críticos.

**Ejercicio 11:** Diseña un sistema de configuración para una aplicación. Crea tanto la versión XML con su DTD o XSD, como la versión JSON con su JSON Schema. La configuración debe incluir: parámetros de conexión a base de datos (host, puerto, usuario, contraseña), configuración de logs (nivel, archivo, rotación), y configuración de caché (activada, tamaño máximo, tiempo de expiración).

## 7. Almacenamiento y procesamiento

El almacenamiento y procesamiento eficiente de documentos XML y JSON es fundamental en el desarrollo de aplicaciones modernas.

### 7.1 Almacenamiento de XML y JSON

Los documentos XML y JSON pueden almacenarse como archivos de texto plano en el sistema de archivos, lo cual es simple y adecuado para configuraciones o pequeños volúmenes de datos. Las bases de datos relacionales como PostgreSQL y MySQL ofrecen tipos de datos específicos para XML y JSON, permitiendo consultas optimizadas. Las bases de datos NoSQL como MongoDB almacenan documentos JSON de forma nativa, ofreciendo escalabilidad y flexibilidad. Las bases de datos XML nativas como BaseX o eXist-db están especializadas en el almacenamiento y consulta eficiente de grandes colecciones XML.

### 7.2 Tecnologías de procesamiento

Para XML existen múltiples tecnologías de procesamiento. DOM carga todo el documento en memoria como estructura de árbol, facilitando la navegación pero consumiendo recursos. SAX procesa el documento secuencialmente mediante eventos, siendo eficiente en memoria pero más complejo. XPath permite seleccionar nodos mediante expresiones, mientras que XSLT transforma documentos XML en otros formatos.

Para JSON, prácticamente todos los lenguajes de programación incluyen bibliotecas para parsear y generar JSON. JSONPath es similar a XPath para consultar documentos JSON. Herramientas como jq permiten procesamiento en línea de comandos. JMESPath proporciona un lenguaje de consulta potente para estructuras JSON complejas.

**Ejercicio 12:** Investiga las bibliotecas de tu lenguaje de programación preferido (Python, Java, JavaScript, PHP, etc.) para trabajar con XML y JSON. Escribe un programa simple que lea un archivo XML de libros, lo convierta a JSON y lo guarde. Luego, lee el JSON y muestra en pantalla los títulos de todos los libros publicados después del año 2000.

**Ejercicio 13 (Proyecto final):** Desarrolla un sistema completo de gestión de videojuegos que incluya:

1. Un documento XML que almacene al menos 10 videojuegos con información como título, desarrolladora, año, plataformas (array), género, precio, y valoración.
2. Un DTD o XSD completo que valide el XML.
3. La conversión de ese XML a formato JSON.
4. Un JSON Schema que valide el documento JSON.
5. Documentación en Markdown explicando las decisiones de diseño, la estructura elegida y justificando cuándo usarías XML vs JSON en un sistema real de gestión de videojuegos.

