# Informe entrega 2

## Construcción
Para la construcción de la aplicación me basé en la investigación previa detallada en el primer informe.
Tomando ideas de los datos obtenidos a través de la elicitación, pude entender cuales eran los objetivos principales, y en conjunto con los requerimientos facilitados por las docentes, determiné objetivos de desarrollo claros en el tiempo previsto para la entrega.

Los requerimientos desarrollados son:
- **RF02: Selección de menú.** El usuario es capaz de seleccionar los menús de la ventana menú y añadirlos a su carrito.
- **RF04: Historial de pedidos.** El sistema cuenta con una ventana de historial de pedidos donde el usuario puede 
        encontrar las compras que realizó en el tiempo, con los menús, el costo total, un código y la fecha en que se realizó
        el pedido.
- **RF06: Visualización de ingredientes.** Este requerimiento se encuentra desarrollado dentro de la ventana de carrito, donde una vez
        seleccionado un menú, dentro de la columna descripción de la tabla carrito, hay una breve lista de ingredientes de dicho menú.

Para el desarrollo seguí la modalidad planteada en el primer informe respecto al uso de ramas basadas en "features". 
Las ramas utilizadas fueron las siguientes:
- **"feature/addingNavbar"**
- **"feature/tabs"**
- **"feature/installingDependencies"**
- **"feature/workinOnJs"**

A lo largo del proyecto surgieron necesidades como el cambio de colores primario y secundario, y otras varias, que fueron resueltas
mediante la instalación de dependencias. 

>Para la instalación y prueba de dependencias utilicé la rama *"feature/installingDependencies"*. 

Las dependencias utilizadas en el proyecto fueron:
- **Bootstrap:** Framework utilizado para el desarrollo front-end.
- **SASS:** Para realizar cambios en variables pre-definidas de bootstrap y traducirlo a css.
- **ESlint:** Lintter (analizador de código) utilizado para corregir la sintáxis del código en base a guías de estilo.
- **Babel:** Compilador de código que traduce formatos.
- **Jest:** Framework de testing unitario, para realizar pruebas unitarias en las clases.

>Las dependencias traen de la mano una lista de otras dependencias que son instaladas automáticamente para poder funcionar.

## Interfaz de usuario
El desarrollo de la interfaz de usuario fue realizado principalmente en la rama *"feature/tabs"*, donde me centré en el desarrollo de las diferentes ventanas de navegación.
Está presente el uso del framework Bootstrap, que facilita componentes visuales agradables tanto para la interfaz como para la facilidad de su implementación.

Las ventanas en el documento de html están divididas por secciones: 
- Home Page, en la cual hay dos secciones juntas:
  - Showcase: sector donde se encuentra la presentación de la página con una frase de introducción y una imágen de un plato con verduras.
  - Botones de navegación: sector donde se encuentran los tres botones principales para realizar la navegación hacia las otras ventanas desde 
    la home page. Estos botones fueron agregados utilizando el layout de columnas que provee bootstrap.
    Este atributo permite organizar la interfaz en columnas de diferentes tamaños, donde va a estar distribuido el contenido. La interfaz organizada en columnas de bootstrap también permite a través de parámetros, hacerla responsiva para los diferentes tamaños de pantalla, de manera que al llegar a un determinado tamaño en pixeles (breakpoint), se re-organiza el contenido, sin perder su forma original ni acumularse una cosa encima de otra.

- Menú: En la página del menú mi objetivo fue organizar las diferentes opciones en una especie de grilla, algo similar a lo que se puede
    encontrar en varios e-commerce. 
    Para el diseño busqué imágenes con un formato similar entre sí, una foto de una comida en formato png y con fondo transparete. 
    Luego utilicé dos de los componentes de bootstrap en forma simultánea, las columnas para organizar las opciones, y las opciones de menú 
    fueron creadas dentro de "cards" o tarjetas, que resulta ser un componente amigable para este tipo de elementos. Las tarjetas de bootstrap 
    tienen un formato de organización basado en header, body y footer, donde se puede elegir que poner en cada uno. En mi caso dentro del header coloqué las fotos de la comida y elegí un fondo amarillo intenso para llamar la atención y mantener el mismo formato en todas. Luego en el body trabajé con los nombres de los menús y sus precios. Finalmente en el footer agregué el botón de añadir al carrito.

- Carrito: La página de carrito contiene una tabla organizada por nombre de menú, una breve descripción de los ingredientes, el precio del menú 
    y al final de la tabla, el costo total de los menús seleccionados.

- Historial de pedidos: La ventana del historial contiene una tabla donde aparecen los pedidos realizados por el usuario en el tiemp,
    organizados por fecha, nombres de menús, un código, y un código.

Algo que unifica las diferentes ventanas y prevalece a lo largo del sistema, es la paleta de colores, en la cual, a través de la dependencia SASS anteriormente mencionada, pude modificar las variables de colores de bootstrap, re-asignando los colores primario al código del *Green 900*
y secundario al código de *Light Blue 800*, facilitando su aplicación a través de los tags *primary* y *secondary*, respectivamente.
Esta dependencia trabaja en un archivo de tipo sass o scss que modifica los atributos y variables pre-definidos de bootstrap, traduciendo estos
cambios a css, ya que en el documento html solo se puede linkear como stylesheet un archivo css, y no uno sass.

## Codificación
La codificación fue realizada en la branch *"feature/workingOnJs"*, donde realicé la implementación de las clases "Menu" y "Pedido", y la implementación de las funciones que conectan y dan funcionalidad a la página y sus secciones.

**Organización:** 
- Clases: Las clases cuentan con sus constructores y getters. En el momento de implementarlas me surgieron problemas de compatibilidad que
    impidieron su correcta importación para darles uso dentro del archivo de main.js, por lo que tuve que tomar la decisión de realizar la mayoría del desarrollo y funciones dentro del mismo archivo.
    - Menu: La clase Menu contiene constructor y getters.
    - Pedido: La clase Pedido contiene constructor y getters.

- Main.js: Debido al problema mencionado anteriormente, para no perder un formato, organicé el archivo en secciones de código marcadas por
    comentarios. Cada sección se enfoca en una sección diferernte de la página, una para la homepage, una para la barra de navegación, 
    una para el menú, una para el carrito y otra para el historial de pedidos.
    En este archivo realicé las conexiones entre las funcionalidades de toda la interfaz.

>El problema mencionado arriba fue finalmente solucionado después de finalizado el proyecto, por lo que no conté con el tiempo necesario 
para reestructurar el código.

**Estilo:** A través de la configuración de ESlint corregí la sintáxis en base a la Google Style Guide, respetando los formatos de indentación
    de 2 espacios, la máxima cantidad de caracteres por línea de 80, etcétera.
    Esta herramienta se hacía cargo de alertarme en caso de tener errores sintácticos a medida que escribía mi código.

## Test unitario
Para los tests unitarios usé el framework Jest definido en clase. Realizados los tests para cada función de las clases,
conseguí una cobertura del %100 de ambas clases.
Lamentablemente por el problema que me surgió al momento de la implementación de las clases, no tuve la oportunidad de crear tests para 
funciones diferentes de las de los getters.

![Code Coverage](/docs/Im%C3%A1genes%20informe%202/codeCoverage.png "Jest")

## Reflexión
Como reflexiópn puedo decir que hoy en día conozco la importancia de un desarrollo prolijo en todos sus aspectos. Gracias a las guías
de estilo es posible mantener un formato entendible a lo largo de todos los archivos, facilitando su modificación e interpretación
de ser necesario.
Por otro lado, al terminar el proyecto, doy cuenta de el conocimiento adquirido sobre todos los pasos necesarios para poder
utilizar dependencias diferentes y la gran ayuda que estas pueden brindar para el cumplimiento de objetivos.
Por mi parte siento que ha sido muy fructifero para aprender y entender el proceso de desarrollo completo de una aplicación y las
diferentes instancias que este conlleva.
