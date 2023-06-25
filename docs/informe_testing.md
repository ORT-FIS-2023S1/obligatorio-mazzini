# Informe de testing 
Proyecto asignado: [https://github.com/ORT-FIS-2023S1/obligatorio-civetta.git]

## Test de sistema

El test del sistema se basó en una sesión de testing exploratorio que inició siendo prevista para durar 30 minutos, pero resultó imposible alcanzar este tiempo dadas las capacidades que provee el sistema y su interfaz. Esto se debe a la falta de funcionalidades y de señalización dentro de la misma.

Una vez terminada esta "sesión" empecé con la creación de particiones de equivalencia sobre los campos en los que podría actuar (ingreso de número de estudiante e ingreso de restricciones alimenticias nuevas); no fue considerado el campo de contraseña ya que la no cuenta con límites ni restricciones.

Para la realización de las particiones de equivalencia formé una tabla en excel en la que escribí los datos de valores de prueba válidos e inválidos para cada campo de ingreso de datos.
Basándome en estas particiones pude empezar con la creación de casos de prueba.

![Particiones de equivalencia](/docs/Im%C3%A1genes%20testing/particionesEquivalencia.PNG "Tabla de particiones") 

Los casos de prueba que escribí abarcan las dos funcionalidades principales desarrolladas en la aplicación, el ingreso de sesión y el ingreso de restricciones.

![Casos de prueba](/docs/Im%C3%A1genes%20testing/cp1.PNG "Tabla de casos") 
![Casos de prueba](/docs/Im%C3%A1genes%20testing/cp2.PNG.PNG "Tabla de casos") 

Luego de realizada la ejecución de los casos, en la misma tabla se puede ver el reporte de información recaudada.

## Reporte de issues

Durante las pruebas realizadas al sistema pude encontrar un bug grave relacionado al ingreso de restricciones alimentarias, y en base a este se me ocurrieron mejoras e implementaciones que fueron reportadas en la sección de issues del repositorio del compañero.
Para el reporte de bugs por fuera de la herramienta issues de Git Hub, realicé una tabla en la que se organiza el ingreso de datos del bug por columnas de información.

![Bug](/docs/Im%C3%A1genes%20testing/bug.PNG "Tabla de reporte de bugs") 

La escala de severidad que utilicé es del 1 al 3 siendo el 3 el punto de mayor severidad, algo que impacta de forma sumamente negativa en la usabilidad del sistema.
La escala de urgencia que utilicé es similar a la de severidad, del 1 al 3, siendo el 3 el punto de mayor urgencia, algo que debe ser arreglado urgentemente dado que impide el correcto funcionamiento a nivel sistema y a nivel extra sistema pudiendo generar un inconveniente de salud, en el caso del bug reportado.

## Informe de calidad del sistema

Por parte de la accesibilidad falta señalización que ayude al usuario a entender para que sirve cada cosa o al menos indicar que se puede hacer.
Por el lado de la usabilidady las funcionalidades, no se termina de entender la finalidad del sistema, ya que no se pueden agregar ni quitar gastos, no se pueden seleccionar items del menú ni seleccionar si va a ser consumido o no; en conclusión falta agregar funcionalidades básicas.
Por el lado de los defectos encontrados, es importante arreglar el bug reportado ya que podría generar un problema de salud si el sistema saliera a producción.

## Reflexión

Creo que es importante poder relizar diferentes instancias de testing, tanto para entender el funcionamiento de un sistema como para reportar mejoras, defectos etc.
En mi caso me hubiera gustado poder formar parte del desarrollo del sistema del compañero para así poder sugerir mejoras en el momento, probar funcionalidades y reportar defectos, para poder ver el cambio en tiempo real y sentir que fui de ayuda para obtener una aplicación mejor.
