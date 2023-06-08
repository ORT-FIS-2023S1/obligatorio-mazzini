# Informe entrega 1
_____________________________________________________________________________________________________________________________________

## Repositorio Git

### Sincronización del trabajo y uso de ramas

El repositorio remoto fue dado por los docentes, nosotros lo clonamos en el medio local, en la computadora de cada uno usando el comando "git clone 'urlRepo'".  
   
Consideramos que es importante mantener los repositorios locales al día, mediante revisiones y actualizaciones diarias. Esto permite evitar conflictos, al saber en que archivos hubo modificaciones y en cuales se está trabajando, dado que elegimos seguir las bases del **SCM** *(Software Configuration Management)*, que plantea la base del trabajo en equipo, nos encontramos con el principio del **cambio continuo**, que establece que un proyecto está "vivo" porque hay cambios todos los días, y además se presentan **actualizaciones simultáneas** ya que somos varios desarrolladores trabajando sobre los mismos archivos, en este caso el archivo del informe.   
Por estas razones es que antes de iniciar el trabajo en cualquier sección del informe, realizamos un "git fetch" para estar al tanto de las actualizaciones en el repositorio remoto y luego un "git pull origin main" para traernos los cambios ya mergeados.  
  
### Comandos utilizados  
  
- Git clone "urlRepositorio": Este comando sirve para clonar un repositorio remoto en el medio local.
- Git checkout -b "nombreRama": Este comando sirve para crear una rama de trabajo nueva y automáticamente movernos a ella.
- Git add "nombreArchivo": Este commando sirve para pasar un archivo recientemente creado o modificado al estado de “STAGED”.
- Git commit -m "mensaje": Este comando sirve para pasar los cambios en estado de “STAGED” a “COMMITED” (confirmados); luego del -m se escribe una breve descripción de los cambios realizados.
- Git merge "ramaAMergear": Este comando sirve para fusionar los cambios recientemente o confirmados, de la rama que se solicita en el comando a la rama en la que se encuentra el usuario.
- Git push origin "ramaAPushear": Este comando sirve para enviar los cambios en estado de “COMMITED” del repositorio local al repositorio remoto.
- Git log: Este comando devuelve una salida en la consola con el historial de commits.
_____________________________________________________________________________________________________________________________________

##  Versionado

Una vez que nos hicimos con el repositorio remoto, acordamos el uso de ramas diferentes de main para cumplir con las buenas prácticas y tener un flujo de trabajo más ordenado.    
El uso de diferentes ramas se basó en dos ramas distintas de main llamadas *"workMateo"* y *"workGuillermo"*, con nombres nemotécnicos que refieren al trabajo de cada uno. De esta forma se nos hace más fácil manejarnos al momento de crear pull request en github y recordar el nombre de las ramas si se da el caso de cambiar de rama.  
La idea de esta modalidad de uso de ramas se mantendría únicamente durante el desarrollo de la documentación inicial, cambiando a una modalidad de **"feature branches"** para la etapa de desarrollo de la aplicación en sí.  
  
Elegimos usar la modalidad de "feature branches" para la etapa de desarrollo de la aplicación, dado que la consideramos más oportuna para ordenar el trabajo de las diferentes funcionalidades en ramas con sus respectivos nombres. En esta modalidad el formato a utilizar sería el siguiente: *feature/nombreFuncionalidad*.  
   
Luego de establecer el uso de las ramas, nos centramos en los **commits y merges**.  
Para los **commits**, lo primero que establecimos fue el formato de los mensajes. Consideramos que para este apartado es importante dejar en claro cada vez que se hace un commit, un mensaje corto pero claro sobre el contenido del commit, para así tener un historial limpio y ordenado. Esto nos permitiría, en caso de ser necesario hacer un *"roll-back"*, orientarnos en el repositorio y saber a cual commit quremos regresar.   
Otro punto de la realización de commits es el momento en que se hacen. Para esto decidimos que sería cuando cada uno termine de agregar algo de gran porte, se realiza un commit y un merge (en lo posible) para tener ambos repositorios actualizados.  
  
Por úlitmo, para realizar los **merges** decidimos que serían de dos formas:   
- Trabajando asincrónicamente: Cuando trabajemos sin estar reunidos presencial o remotamente, los merges se darán a través de la creación de pull requests en la herramienta github. De esta forma el compañero que no realiza los cambios, tiene la oportunidad de revisarlos, visualizar conflictos en caso de haberlos, sugerir cambios en caso de ser necesarios, o directamente fusionar los cambios con main si así lo prefiere.
- Trabajando sincrónicamente: Cuando trabajemos en una llamada de forma remota o bien de forma presencial, los merges se darán a través del uso del comando "git merge", ya que no sería necesario revisarlos en la plataforma porque sincrónicamente estamos al tanto de que hace cada uno.
_____________________________________________________________________________________________________________________________________

## Elicitación

### Técnicas de elicitación

#### User Personas

Para esta técnica creamos cuatro user personas diferentes, los cuales consideramos que serían los perfiles principales que tendrán contacto directo con la aplicación. En estos perfiles incluímos Tutores, Administradores del sistema, Encargados de cocina y un usuario "Low-Tech".  
Con estos cuatro perfiles pudimos empezar a imaginarnos algunos requerimientos para diferentes perspectivas de uso de la aplicación.  
Los User Personas son los siguientes:  

![Encargados de cocina](/docs/Elicitaci%C3%B3n/User%20Personas/Emilio.PNG "Emilio")  
![Tutor](/docs/Elicitaci%C3%B3n/User%20Personas/Marcelo.PNG "Marcelo")  
![Administrador del sistema](/docs/Elicitaci%C3%B3n/User%20Personas/Romina.PNG "Romina")  
![Tutor/Low-Tech](/docs/Elicitaci%C3%B3n/User%20Personas/Selva.PNG "Selva")  

>Los archivos pueden ser encontrados dentro de la carpeta: "docs/Elicitación/User Personas".

Las herramientas utilizadas para el diseño y creación de los user personas fueron:
- Templates: *Venngage Infographics* (https://infograph.venngage.com/) 
- Avatares: *Avatar Maker* (https://avatarmaker.com/) 

#### Entrevistas
  
En esta técnica tuvimos la posibilidad de realizar varias entrevistas a diferentes tipos de usuarios, utilizando preguntas abiertas para permitirles dar ideas importantes desde su punto de vista, y cerradas para confirmar o desestimar ideas desde nuestro lado. Este tipo de acercamiento nos permitió obtener información clave para la etapa de análisis y especificación.  
  
Los entrevistados van desde gente que se preocupa por su alimentación en general y lleva dietas especiales, padres que envían a sus hijos a colegios con comedores que brindan la posibilidad de obtener un menú preparado en el comedor, padres cuyos hijos ya no cursan educación escolar ni liceal, pero que tienen noción sobre los comedores de las instituciones a las que asistieron sus hijos y se enfrentaron con sistemas antiguos para pedir menús. La participación de estos últimos nos permitió obtener una visión comparativa sobre situaciones pasadas con este tipo de servicios.  
  
Luego de leerlas varias veces pudimos concluir que:
- Hoy en día los tutores jóvenes no cuentan con el tiempo suficiente para preparar almuerzos para sus hijos.
- Muchos padres optan por comprar menús a sus hijos en las instituciones educativas.
- La aplicación debe ser fácil e intuitiva de usar, para poder ahorrarle tiempo a los usuarios .
- Los flujos y posibilidades deben ser claras para no confundir a los usuarios.
- Es interesante la posibilidad de pagar a través de la app asociando un sistema de pago, para facilitar el trámite.
- Consideran importante tener los ingredientes  valores nutricionales de los menús.
- Sería cómodo tener indicadores para los diferentes tipos de menús respecto a las dietas por intolerancias, ya que ahorraría el tiempo de buscar entre los ingredientes.

>La evidencia de las entrevistas puede ser encontrada en "docs/Elicitación/Entrevistas.md"

#### Ingeniería inversa  
  
Para esta técnica, uno de los entrevistados nos facilitó el acceso a una aplicación del instituto escolar al que atienden sus hijos, la cual cuenta con un apartado de menú semanal.  
Al indagar en la aplicación pudimos identificar atributos interesantes, entre ellos:  
- Cada dos semanas se actualiza una imagen que contiene el menú escolar de las próximas dos semanas. Este menú está dispuesto en forma de calendario, con las diferentes opciones de comida por día de la semana.
- No cuenta con la opción de elegir diferentes comidas, sino que es una opción única para cada día de la semana.
- Otra imagen cuenta con la información de:
  - Contenido del menú (NO ingredientes).
  - Precio del menú.
  - Instrucciones para pedir el menú.
  - Instrucciones de pago del menú.
- No cuenta con un sistema de pedido dentro de la aplicación, éstos se realizan a través del número de Whatsapp disponible en la imagen.
- No cuenta con un sistema de pago dentro de la aplicación, los pagos se realizan a través de transferencias bancarias.
- Existe la posibilidad de pagar menús por día o realizar un pago mensual.

Adjuntamos las capturas de pantalla de las cuales recabamos la información:  

![Menú semanal](/obligatorio-ferreira-mazzini/docs/Elicitaci%C3%B3n/Ingenier%C3%ADa%20Inversa/Imagen-1.png "Imagen 1")  
![Instrucciones](/obligatorio-ferreira-mazzini/docs/Elicitaci%C3%B3n/Ingenier%C3%ADa%20Inversa/Imagen-2.png "Imagen 2")  

>Los archivos pueden ser encontrados dentro de la carpeta: "docs/Elicitación/Ingeniería Inversa".

### Modelo

![Modelo](/obligatorio-ferreira-mazzini/docs/Elicitaci%C3%B3n/Modelo/Modelo.png "Modelo")  

>Los archivos pueden ser encontrados dentro de la carpeta: "docs/Elicitación/Modelo".

Las herramientas utilizadas para el diseño y creación del modelo:
- Modelo: *Lucidchart* (https://lucid.app/) 
_____________________________________________________________________________________________________________________________________

## Especificación

### Requerimientos funcionales
                                                                                          
  **Id:** RF01                                                                                  
  **Titulo:** Cantidad de menús                                                   
  **Actor/es:** Tutores                                                                         
  **Descripción:** Los tutores deben poder editar la cantidad de menús a comprar.  
  **Prioridad:** Media                                                                        
                                                                                          
  **Id:** RF02                                                                                
  **Titulo:** Selección de menú                                                 
  **Actor/es:** Tutores                                                                          
  **Descripción:** Los tutores deben poder seleccionar el menú entre las opciones.  
  **Prioridad:** Alta                                                                         
                                                                                          
  **Id:** RF03                                                                                  
  **Titulo:** Generación de factura                                                 
  **Actor/es:** Sistema                                                                       
  **Descripción:** Cuando se realiza una compra, el sistema debe generar una factura en el momento.  
  **Prioridad:** Alta                                                                        
                                                                                          
  **Id:** RF04                                                                                  
  **Titulo:** Historial de pedidos                                                   
  **Actor/es:** Sistema                                                                         
  **Descripción:** El sistema debe guardar cada pedido en un historial para cada cliente.      
  **Prioridad:** Media                                                                          
                                                                                          
  **Id:** RF05                                                                                  
  **Titulo:** Registro de tutores                                                   
  **Actor/es:** Administrador del sistema.                                                                       
  **Descripción:** Los administradores deben poder registrar nuevos usuarios en la aplicación.  
  **Prioridad:** Alta  
                                                                                          
  **Id:** RF06                                                                                 
  **Titulo:** Visualización de ingredientes                                                                               
  **Actor/es:** Tutores                                                                                 
  **Descripción:** Los tutores deben poder acceder a una lista con los ingredientes en cada menú.                                                                             
  **Prioridad:** Alta                                                                                
                                                                                          
  **Id:** RF07                                                                                 
  **Titulo:** Visualización de valores nutricionales                                                                                  
  **Actor/es:** Tutores                                                                                
  **Descripción:** Los tutores pueden acceder a una descripción de los valores nutricionales de cada menú.                                                                             
  **Prioridad:** Baja.                                                                              
                                                                                          
  **Id:** RF08                                                                                  
  **Titulo:** Edición de menú                                                                                  
  **Actor/es:** Encargado de cocina                                                                                
  **Descripción:** El encargado de la cocina debe poder editar los menús disponibles en la aplicación.                                                                             
  **Prioridad:** Alta.                                                                               
                                                                                          
  **Id:** RF09                                                                                  
  **Titulo:** Pago de pedidos                                                                                  
  **Actor/es:** Tutor                                                                                
  **Descripción:** Los tutores deben tener la posibilidad de pagar a través de la página.                                                                             
  **Prioridad:** Alta                                                                               
                                                                                          
  **Id:** RF10                                                                                  
  **Titulo:** Visualización de pedidos                                                                                  
  **Actor/es:** Encargado de cocina                                                                                 
  **Descripción:** El encargado de cocina debe poder visualizar la cantidad y datos de cada pedido.                                                                             
  **Prioridad:** Alta                                                                                 
____________________________________________________________________________________________________

### Requerimientos no funcionales  

**RNF01:** La aplicación será desarrollada en formato web.  
**RNF02:** La aplicación debe soportar Chrome, Mozzila y Microsoft Edge.  
**RNF03:** Opciones inclusivas para dietas intolerantes y especiales.  
**RNF04:** Los menús tienen imágenes de las comidas.
**RNF05:** Los menús aptos para ciertas dietas tienen símbolos identificadores.  
**RNF06:** Los menús tienen los precios.    
**RNF07:** Los datos de los usuarios deben estar protegidos.  
**RNF08:** Los colores de la página deben ser, el **primario**: *Green 900* y el **secundario**: *Light Blue 800*.  
**RNF09:** La **fuente** a utilizar debe ser *"Roboto"*.
____________________________________________________________________________________________________  

### Historias de usuario   

**ID:** #HU01    
**Título:** Registro de usuarios   
**Narrativa:** **Como** Administrador **quiero** poder registrar nuevos usuarios en el sistema **para** darles acceso a la aplicación.   
**Criterios de aceptación:**  
  - El usuario debe tener al menos un alumno a cargo en la institución.
  - La contraseña deberá contener al menos 10 carácteres con letras y al menos un número.
  - Solo el usuario Administrador tiene permisos para crear o eliminar otros usuarios.

**ID:** #HU02  
**Título:** Control de pedidos  
**Narrativa:** **Como** Tutor usuario **quiero** poder ver el historial de pedidos **para** variar la dieta de mi alumno a cargo.  
**Criterios de aceptación:**  
  - El sistema registra los pedidos con fecha, precio y descripción.  
  - Cada usuario tutor tiene acceso únicamente a su historial de pedidos.  

**ID:** #HU03  
**Título:** Editar el menú  
**Narrativa:** **Como** Encargado de cocina **quiero** poder modificar los menús **para** agregar, quitar o cambiar los menús.  
**Criterios de aceptación:**  
  - Los menús son modificables.
  - Solo el usuario de tipo Encargado de cocina puede modificar los menús.  

**ID:** #HU04  
**Título:** Pagar através de la app 
**Narrativa:** **Como** Usuario tutor **quiero** poder pagar el menú a través de la aplicación **para** no tener que llevar efectivo al colegio.
**Criterios de aceptación:**  
  - El sistema acepta el pago a través de tarjetas de crédito/débito.
  - El sistema genera una factura automáticamente luego de realizado el pago.    

**ID:** #HU05  
**Título:** Visualización de ingredientes  
**Narrativa:** **Como** Usuario tutor **quiero** poder ver los ingredientes de los menús **para** poder tener información de la composición de las comidas de mi hijo.  
**Criterios de aceptación:**  
  - Los menús cuentan con la lista de ingredientes.
  - Los menús cuentan con un sello en caso de pertenecer a una dieta particular.  
____________________________________________________________________________________________________   

### Casos de uso  

**ID:** #UC01  
**Título:** Inicio de sesión en la aplicación.  
**Actor:**  Usuario (Encargado, administrador o tutor).  
**Pre condición:** El usuario debe estar creado en el sistema.  
**Pos condición:** El usuario es redirigido correctamente a la pagina de inicio. 
**Curso normal:**  
1. Usuario ingresa sus datos de inicio de sesión.  
2. Usuario presiona el botón de ingreso.                         
3. Sistema verifica los datos.    
4. Usuario es redirigido correctamente a la página de inicio.    
**Cursos alternativos:**  
1. **Pre condición** El usuario no está creado en el sistema. **Paso 3** Al ingresar los datos de inicio de sesión el sistema muestra una advertencia de credenciales inválidas.
2. **Paso 1** El usuario ingresa un nombre de usuario o contraseña incorrectos. **Paso 3** El sistema muestra una advertencia de ingreso de credenciales erroneas.
____________________________________________________________________________________________________ 

**ID:** #UC02  
**Título:** Agregar un plato nuevo al menú.  
**Actor:**  Encargado de cocina.  
**Pre condición:** El encargado debe estar logueado con su cuenta.
**Pos condición:** Se agrega la comida al menú correctamente. 
**Curso normal:**  
1. Encargado realiza los pasos relatados en el ***#UC01***. 
2. Encargado presiona el botón de editar menú.                         
3. Encargado presiona la opción de agregar comida.    
4. Sistema muestra ventana de ingreso de datos para la nueva comida.                      
5. Encargado ingresa datos de nueva comida.
6. Encargado presiona botón de agregar a menú.
7. Sistema agrega la comida al menú y la muestra en el mismo.     
**Cursos alternativos:**  
1. **Paso 2** El encargado no tiene los permisos para editar el menú, por lo que no tiene diponible la opción de editar el menú.
2. **Paso 5** El encargado no rellena todos los datos de la comida. El sistema muestra una advertencia de datos incompletos.
____________________________________________________________________________________________________   

**ID:** #UC03    
**Título:** Crear nuevo usuario.  
**Actor:** Administrador del sistema.   
**Pre condición:**  El sistema tiene una lista de usuarios.    
**Pos condición:**  Se crea el nuevo usuario correctamente.    
**Curso normal:**         
1. Administrador realiza los pasos relatados en el ***#UC01***.    
2. Administrador presiona el botón de crear nuevo usuario.                          
3. Sistema muestra ventana de ingreso de datos para el nuevo usuario.  
4. Administrador ingresa los datos del nuevo usuario.
5. Administrador presiona el botón de crear nuevo usuario.                                           
6. Sistema crea el usuario y lo añade a la lista.  
**Cursos alternativos:**  
1. **Paso 2** El administrador no tiene los permisos para editar los usuarios, por lo que no tiene diponible la opción de crear un nuevo usuario.
2. **Paso 4** El administrador no rellena todos los datos del nuevo usuario. El sistema muestra una advertencia de datos incompletos.
3. **Paso 5** El administrador ingresa datos de identificación excluentes idénticos a los de un usuario ya ingresado en el sistema. El sistema muestra una advertencia de datos ya utilizados.
____________________________________________________________________________________________________   

**ID:** #UC04    
**Título:** Ver ingredientes de una comida.   
**Actor:** Tutor.  
**Pre condición:** Hay comidas disponibles.  
**Pos condición:** Los ingredientes se visualizan correctamente.  
**Curso normal:**   
1. Tutor realiza los pasos relatados en el ***#UC01***.  
2. Tutor presiona el botón de menú.                
3. Sistema redirige al usuario a la ventana de menú.      
4. Usuario presiona una comida.                         
5. Sistema muestra una ventana con la comida y sus datos, entre ellos los ingredientes.               
**Cursos alternativos:**    
1. **Paso 4** No hay comidas disponibles en el menú. El sistema muestra una advertencia de que el menú está vacío.  
____________________________________________________________________________________________________   

**ID:** #UC05  
**Título:** Agregar comida al carrito.  
**Actor:** Tutor.  
**Pre condición:** - 
**Pos condición:** Se agrega comida al carrito correctamente.  
**Curso normal:**    
1. Tutor realiza los pasos relatados en el ***#UC01***.       
2. Tutor realiza los pasos relatados en el ***#UC04***.                               
3. Tutor presiona el botón de agregar al carrito.
4. Sistema agrega la comida al carrito del tutor correctamente.   
**Cursos alternativos:**  
1. Mismo que en ***#UC04***.  
____________________________________________________________________________________________________ 

**ID:** #UC06     
**Título:** Pagar el menú.    
**Actor:** Tutor.    
**Pre condición:** Comida agregada en el carrito.    
**Pos condición:** Se realiza el pago correctamente.    
**Curso normal:**     
1. Tutor realiza los pasos relatados en el ***#UC01***.      
2. Tutor realiza los pasos relatados en el ***#UC04***.                       
3. Tutor realiza los pasos relatados en el ***#UC05***.  
4. Tutor vuelve a la página de inicio.        
5. Tutor presiona el botón de carrito.   
6. Sistema muestra los ítems añadidos al carrito en conjunto con su costo.  
7. Tutor presiona el botón de pagar.  
8. Sistema muestra ventana para ingreso de datos de pago.  
9. Tutor ingresa datos de pago.  
10. Tutor presiona botón de realizar compra.  
11. Sistema muestra mensaje de compra realizada con éxito.  
12. Sistema muestra realiza una factura y muestra los datos de ésta.                    
**Cursos alternativos:**  
1. **Paso 9** Tutor ingresa datos incorrectos (incluyen: tarjetas sin saldo) en ventana de pago. Sistema muestra advertencia de datos de pago inválidos ingresados.  
____________________________________________________________________________________________________   

**ID:** #UC07    
**Título:** Ver historial de pedidos.  
**Actor:** Tutor.  
**Pre condición:** -   
**Pos condición:** Visualización correcta del historial de pedidos.  
**Curso normal:**    
1. Tutor realiza los pasos relatados en el ***#UC01***.                                
2. Tutor presiona el botón de historial de pedidos.  
3. Sistema redirige al usuario a la ventana del historial.  
4. Sistema muestra los pedidos realizados por el usuario con la información de: id del pedido, fecha, costo y total.  
**Cursos alternativos:**    
1. El usuario no ha realizado ningún pedido todavía. El sistema muestra el historial vacío.   
____________________________________________________________________________________________________   

### Prototipado  

Para el prototipado realizamos prototipos de Interfaz de Ususario, de cómo se vería la página desde la perspectiva de un usuario tutor. Este tipo de usuario tiene acceso solamente a las funcionalidades de seleccionar menús, comprar menús y revisar el historial de compras. 

![Home](/obligatorio-ferreira-mazzini/docs/Especificaci%C3%B3n/UI/HomePage.PNG "Home Page")  

![Menú](/obligatorio-ferreira-mazzini/docs/Especificaci%C3%B3n/UI/Men%C3%BA.PNG "Menú Page")  

![Carrito](/obligatorio-ferreira-mazzini/docs/Especificaci%C3%B3n/UI/Carrito.PNG "Carrito Page")  

![Historial](/obligatorio-ferreira-mazzini/docs/Especificaci%C3%B3n/UI/Historial.PNG "Historial Page")  

>Los archivos pueden ser encontrados dentro de la carpeta: "docs/UI".

Las herramientas utilizadas para el diseño y creación de los prototipos fueron:
- Prototipos: *Figma* (https://www.figma.com/)
_____________________________________________________________________________________________________________________________________

## Validación y verificación

### Validación:

Los prototipos fueron mostrados y explicados a los entrevistados recibiendo el siguiente feedback:

- La interfaz es intuitiva al tener letras y botones grandes con letra y contrastes de color claros.
- Se podría agregar algo más de color para que no se sienta tan "fría".
- Las ideas comentadas en la entrevista realizada en la etapa de elicitación fueron tomadas en cuenta y eso se ve reflejado.

### Verificación:

Al realizar un exaustivo análisis de requerimientos planteandonos las preguntas correspondientes al checklist de requerimientos pudimos concluir la correctitud de tales.  

- Los requerimientos creados fueron principalmente sobre el pienso de funcionalidades imprescindibles, por lo que la mayoría de requerimientos funcionales son de prioridad "Alta", pero para tener una variación agregamos algunos de prioridad "Media" y "Baja". Este fue el sistema de priorización utilizado.
- Verificamos que todos tuvieran una única interpretación para evitar repeticiones y re-trabajo.
- Escribimos los requerimientos teniendo en cuenta que a futuro deberán ser probados, por lo que podrán ser verificados mediante el correspondiente testing que les sea aplicado.
- Todos los requerimientos cuentan con una estructura similar para asegurar la correctitud y consistencia. 
- Mencionando el punto anterior, todos los requerimientos, tanto funcionales como no funcionales, cuentan con una ID única para una adecuada trazabilidad.
_____________________________________________________________________________________________________________________________________

## Reflexión

### Reflexión Mateo Mazzini - 219372

Considero que la realización de esta etapa preliminar al desarrollo me ayudó a entender un poco más el proceso completo del desarrollo de software, dada la cantidad de actividades realizadas a lo largo de la creación del documento puedo concluir que el desarrollo de software va mucho más allá de saber programar y los aspectos de tipo técnico. Es imprescindible para la creación de un producto de este tipo poder evaluar todos los aspectos tratados en este informe con completitur y profundización.

Creo que se hizo un buen trabajo al aplicar la mayoría de conceptos vistos en clase. Muchos han sido mencionados a lo largo del informe y algunos están señalados con negrita incluso.

### Reflexión Guillermo Ferreira

Para mi, que es la primera vez que uso herramientas como Git o GitHub, a lo largo del proyecto logré darme cuenta de la importancia de las mismas, ya que nos permitieron trabajar a distancia y coordinar enfoques en distintos puntos para trabajar a la vez pero sin pisarnos entre nosotros.

También aprendí lo necesario en la organización y una buena comunicación, que nos permitió crear un flujo de trabajo ameno y fácil de coordinar entre nosotros.

Y sobre el desarrollo del obligatorio logré entender, a pesar de que no me gusta, que la documentación y un buen tiempo invertido en lo "teórico" es super útil y será un facilitador en el tiempo invertido para más adelante a la hora de trabajar desarrollando lo creado y planteado en esta instancia.