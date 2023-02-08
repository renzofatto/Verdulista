| Identificación
|-----------
| Fundamentos de Ingeniería de Software
17/06/2021

# Construcción

## Implementación de funciones principales (sin la necesidad de persistencia de datos)
Dentro de la implementación de las funciones principales del proyecto, las mismas las dividimos de la siguiente forma:
- cargarListaFrutas();
- cargarListaVerduras();

Las cuales se encargan de crear las listas de frutas y verduras, crear los elementos, a partir de los mismos crear y colocar los correspondientes botones 
tanto de suma como de resta, agregar el nombre del alimento y el valor predeterminado de la cantidad.

- cargarAlimentos();

La cual se encarga de cargar los alimentos tanto de frutas como de verduras a la lista de compras principal con sus respectivas cantidades siempre y cuando 
las mismas sean mayores a cero.

- cargarListaCompras();

Esta función se encarga de cargar a partir de la función *cargarAlimentos()* de crear y colocar la lista con sus elementos correspondientes en base a las listas
de frutas y verduras con las cantidades elegidas.

- cargarCantidadAlimentosCero();

La función se encarga únicamente de setear la cantidad  de las frutas y las verduras en 0.

- sumar(alimento);
- restar(alimento);

Estas funciones auxiliares se utilizan para sumar y restar las cantidades de los alimentos y los carga a la lista de compras, en caso de la resta llegar al 0 el alimento es eliminado. 

- aumentarCantidad();
- disminuirCantidad();

Son quienes se encargan de darle el valor a lo seleccionado, funcionan a partir del llamado *click* de los botones de suma y resta por elemento, además,
se encargan de avisar si el valor no es posible en caso de ser negativo.

- agregar(alimento);

La función se encarga de pushear el alimento ingresado en caso de que el alimento ingresado no se encuentre ya en la lista.

- agregar(fruta);
- agregar(alimento);

Similar a la función anterior, estas muestran una excepción en el caso de que el texto ingresado sea vacío.

- eliminarAlimento(pos);

La función elimina determinado alimento en función a la posición obtenida. 

- Set ...

Todas las funciones comenzadas con Set definen un valor a un determinado atributo. 

- Get ...

Todas las funciones comenzadas con Get obtienen un valor de un determinado atributo.

## Configuración de plataforma tecnológica para desarrollo y producción
1. Descargar Git:
- Ingresar a https://git-scm.com/downloads.
- Seleccionar sistema operativo correspondiente.
- Realizar la descarga.

2. Clonar repositorio: 
 - Abrir terminal.
 - Posicionarse en la ruta deseada.
 - Ejecutar comando: `git clone https://github.com/ORT-FIS-202103/entrega2-fattorini_garreta_wasersztein.git`

3. Descargar Node.js:
- Ingresar a https://nodejs.org/es/download/.
- Seleccionar sistema operativo correspondiente.
- Realizar la descarga.
- Ejecutar comando en terminal: `npm init`.


4. Descargar Material Design Web: 
- Ejecutar comando en terminal: `npm i material-components-web`
- Ejecutar comando en terminal: `npm install --save-dev webpack webpack-cli webpack-dev-server css-loader sass-loader sass extract-loader file-loader`

5. Una vez finalizada la descarga ingresar a la carpeta interfaz siguiendo la ruta en la que se encuentra la misma y ejecutar el comando `npm start`

6. Ingresar en el navegador a `http://localhost:8080/`

## Documentación del uso de librerías externas (package.json)
- EsLint: Herramienta de análisis de código estático para identificar patrones problemáticos encontrados en el código JavaScript. El mismo fue utilizado para "limpiar" el código javascript, la herramienta nos fue de gran utilidad teniendo en cuenta que el lenguaje utilizado contiene un tipado débil el cual permite al desarrollador cometer errores a la hora de tipear código. Mediante mensajes de errores de sintaxis, malas prácticas y sugerencias para mejorar la calidad del código, el mismo nos fue de gran utilidad.  
- Jest: Framework de testeo para JavaScript enfocado en la simpleza. Este nos fue de gran utilidad para no cometer errores en la parte del dominio, analizar casos bordes y evaluar el porcentaje de código utilizado y no utilizado en base a las pruebas realizadas. 
- Material Components Web: Sistema de diseño utilizado que nos fue de suma importancia para darle estilo al proyecto, definir un estilo y una tematización completamente personalizada por los integrantes del equipo dándole el enfoque deseado al proyecto. 

# Interfaz de usuario
Sobre la interfaz de usuario nos enfocamos en cumplir con los objetivos propuestos en la primera entrega, buscábamos una interfaz clara, eficaz, eficiente,
disfrutable y entendible. Priorizamos la funcionalidad básica sin distraernos en funciones que para una primera versión no eran necesarias. Mantuvimos un estándar minimalista buscando que el usuario se esfuerce lo mínimo para disfrutar y aprovechar el sistema desarrollado 
con la implementación de tres secciones objetivas y claras que con los elementos justos y necesarios permitan llevar a cabo la implementación del sistema y logre
cumplir y satisfacer las necesidades objetivas del usuario a la hora de descargar el mismo.  
Se tuvo en cuenta varios criterios para los estilos de interacción de los usuarios y en la gestión de errores. Se mantuvo un registro simple y ordenado en cuanto a las restricciones y preferencias a la hora de registrar una fruta o verdura. La interacción es sencilla, cuenta únicamente con botones y con dos textfields.
Estos componentes están acompañados de iconos que se usan en el día a día como el símbolo de `+` y `-`y también una basura en el caso de descartar los elementos de la lista de compras. Toda acción se ve reflejada en la interfaz, tanto a la hora de agregar un alimento a su correspondiente sección como a la hora de aumentar y reducir sus cantidades. Los errores son explicados a través de alertas los cuales detallan el problema y no generar confusión. La legibilidad, es otro de los criterios que fueron tomados en cuenta, el manejar un lenguaje natural donde los usuarios y profesionales sean capaces de comprender los mensajes y las diferentes opciones del sistema, es fundamental para un sistema intuitivo y conformable. De esta manera, el aprendizaje de los usuarios será más eficaz y con un número menor de errores.
## Interfaz de usuario web / mobile (responsive)
En base a la aplicación de buenas prácticas de diseño logramos una interfaz adaptativa tanto para un usuario web como para distintos dispositivos con diferentes medidas en cuanto a tamaños de pantallas refiere, en estos, la interfaz se aprecia de forma clara sin casi distorsiones en la misma logrando una correcta visualización y el disfrute máximo a partir de la experiencia del usuario lograda. Al tener elementos simples y funcionales, a la hora de hacer el pasaje de web a mobile no se pierde ninguna funcionalidad y se obtiene la misma experiencia. 
## Página única con navegación entre secciones
Para obtener una única página utilizamos la herramienta *App bars: Top*, la cual proporcionaba contenido y acciones relacionadas con la página actual que en nuestro caso era la
única página principal. La barra superior fue implementada con la finalidad de realizar navegaciones a las distintas secciones de la página, tanto lista, como frutas y verduras.
Utilizamos una navegación lateral, la misma hace referencia a la capacidad de moverse entre distintas pantallas que cumplen con un mismo nivel de jerarquía. 
## Implementación: Material Design Web Components
- Button: Utilizados para agregar frutas y verduras a sus listas y modificar cantidades. 
- List: Utilizados en Lista de Compras, Lista de Frutas y Lista de Verduras. 
- Tab Scroller: Utilizado para poder navegar dentro de las distintas secciones. 
- Tab: Utilizado para organizar contenidos.
- Icon Button: Utilizado para indicar la función de los botones. 
- Top App Bar: Utilizado para mostrar las distintas secciones de la página en la parte superior de la pantalla.
- Floating Label: Utilizado para indicar lo requerido en el Label, (Fruta o Verdura).
- Notched Outline: Utilizado para modificar el bordeado del input. 
- TextField: Utilizado para permitir al usuario ingresar como texto el nombre de la Fruta o Verdura que desea agregar. 

## Aplicar un sistema de diseño y principios de usabilidad
El sistema de diseño aplicado, desarrollado en 2014 por la empresa Google, es denominado Material Design, el mismo tiene un enfoque flexible y consistente, 
que busca sintetizar los principios clásicos de buen diseño en conjunto a una nueva innovación y una avanzada tecnología. El mismo unifica el desarrollo dentro del sistema 
para integrar la experiencia de usuario a través de múltiples plataformas y dispositivos y, además, mantiene la capacidad de ser personalizable y extensible, aportando así 
una base flexible para la expresión de la marca e innovación dentro de la misma.
El sistema de diseño aporta determinados principios fundamentales que lo caracterizan y destacan, estos son:
- Material como metáfora del diseño.
- Grafico e intencional.
- Animaciones significativas.
- Flexible y adaptativo.
- Multi-plataforma.

Los principios de usabilidad fueron planificados con la intención de brindar una buena experiencia de uso al usuario, basándonos en determinados principios, como, por ejemplo:
- Visibilidad del estado del sistema.
- relación entre Sistema - Mundo real.
- Libertad y Control del Usuario.
- prevención de errores.
- Eficiencia de Uso. 
- Diseño estético y minimalista. 
- Ayuda al usuario a reconocer errores. 
## Cumplimiento de estándar de accesibilidad WCAG
En base al resumen no literal de las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1, extraído de la Web Accessibility Initiative, nos enfocamos en definir que el programa 
se mantenga Perceptible, Operable, Comprensible, Robusto.

Perceptible: Para obtener un proyecto perceptible, aprovechando el sistema de diseño Material Design, uno de los principales enfoques fue a través de los botones, los cuales cuentan con iconos que permiten percibir al usuario su uso de forma clara y sencilla, también, incluimos textos dentro de los labels para definir lo que el usuario debe realizar al utilizar los mismos.
Y en el caso de poner contenido sin textoincluimos `alt` para que en caso de que no cargue la imagen se sepa que era lo que iba en ese lugar.

Operable: Proyectamos el contenido para que el mismo sea de fácil utilización para los usuarios, que los mismos encuentren el contenido de forma sencilla y sin dificultades, con opciones sencillas y pasos simples para que los usuarios alcancen sus cometidos con la interacción mínima. Mas allá del uso habitual de la aplicación con mouse o de forma táctil también es operable a través del teclado. La aplicación es apta para todo público ya que no causa ninguna reacción física en el usuario


Comprensible: El trabajo parte de un principio minimalista, por lo que la legibilidad, comprensibilidad, predictibilidad y el apoyo a los usuarios para evitar y corregir errores consideramos que fueron tomados en cuenta en el correr de todo el proyecto, de esta forma íbamos a lograr una mejor experiencia de uso que fue considerado por los integrantes del equipo como algo fundamental. El texto de la página es legible y comprensible y también es posible traducir el mismo al idioma deseado. También ayuda al usuario a no cometer errores ya que los mismos son informados y bien descriptivos.
Ejemplos de traduccion de la pagina:

![Captura de Pantalla 2021-06-17 a la(s) 17 37 07](https://user-images.githubusercontent.com/80908769/122484658-6a9d8f00-cfab-11eb-9542-fae8b7bd0fab.png)
![Captura de Pantalla 2021-06-17 a la(s) 17 37 32](https://user-images.githubusercontent.com/80908769/122484661-6d987f80-cfab-11eb-9444-3d0262e8875e.png)
![Captura de Pantalla 2021-06-17 a la(s) 17 36 44](https://user-images.githubusercontent.com/80908769/122484662-6e311600-cfab-11eb-9d90-f2d5ccc839ab.png)


Robusto: El proyecto es altamente adaptable a distintos tipos de dispositivos con distintas medidas de pantallas tanto de largo como de ancho, el mismo no pierde responsividad y se mantiene compatible. 
## Seguir especificación de estilo
El estilo de nuestra página se centra en el material design (explicado en profundidad posteriormente en uno de los puntos). Toda la información sobre este estilo la obtuvimos de la página: `https://material.io/`.  
Dado que la aplicación actualmente se corre desde la web los componentes utilizados son los componentes web de material design. Uno de los pilares del material design es la fuente tipográfica: Roboto, la cual es utilizada en la interfaz de nuestro proyecto. Otro pilar fundamental es el hecho de hacer prevalecer los elementos uno de los otros como si fueran capas de papel que generan una sombra sobre otras creando profundidad y resaltando las jerarquías. Nosotros quisimos reflejar este estilo en los botones dándole ese pequeño sombreado para que al usarse en un dispositivo táctil parezca que el usuario realmente los está presionando y que no está presionando la pantalla del dispositivo. El color también ocupa un rol fundamental en el material design, de hecho, hay una herramienta: `https://material.io/resources/color/#!/?view.left=0&view.right=0` que nos muestra como tendrían que ser utilizados los colores definiendo un color primario y uno secundario. En nuestro caso utilizamos como color primario el: Light Green 800 y como secundario el Deep Orange 800. Al ingresar esos colores también nos da una paleta que podemos utilizar para mantenernos en esos tonos, pero crear contraste entre ellos. Un ejemplo lo podemos ver en la barra superior que posee 2 tipos de verdes distintos, uno es nuestro color primario y el otro es más claro (#85bb5c) y lo mismo utilizamos para nuestro color secundario, el botón de agregar fruta o verdura es nuestro color secundario mientras que los de aumentar cantidades es un o más claro (#ff7543)

# Codificación

A la hora de realizar el proyecto utilizamos diferentes lenguajes de programación, entre ellos javascript, css y html, intentando generar un código comprensible y sin repetición de código.
 Al cada desarollador tener una manera diferente de codificar, implementamos ciertos criterios para poder generar cierta estructura a la hora de la codificación
Comentario de código: A través de nuestro código fuimos implementando comentarios para indicar la función de cada uno de los elementos, al realizar esto nos pareció una manera por la se puede entender el código con mayor facilidad, para todo el equipo y uno mismo, asimismo uno al comentar que es lo que acaba de realizar reafirma su conocimiento.
Indentación: Nos pareció de suma importancia tener una buena indentación a lo largo del código para lograr que todos respeten las mismas reglas y lograr mantener una estructura organizada. Para ello usamos dos espacios a la hora de agregar una función o cambiar de nivel.
Nomenclatura de las variables y funciones: La nomenclatura también nos pareció un aspecto fundamental ya que es otra herramienta que nos facilita al momento de analizar y comprender el codito, las funciones que se definieron se escribieron con el estilado camelcase, este es un estilo de escritura en la cual la primera palabra se escribe en minúscula y al cambiar de palabra la primera letra pasa a mayúscula para lograr diferenciar con mayor facilidad.
Siempre intentando utilizar nombres descriptivos y que tengan relación a la función que este cumple.



## IDE Visual Studio Code: configuración común del equipo
Se realizo el proyecto íntegramente en Visual Studio Code, intentando generar un código , consistente, de fácil comprensión y sin redundancias. Dado que íbamos a pasar muchas horas frente a este IDE decidimos poner unas reglas en común para el equipo y configurarlo de igual forma para generar código de mayor calidad.  
Para ello la primera decisión que se tomo fue instalar la extensión "GitLens" que nos ayudó a la hora de visualizar quien había realizado cambios en el código y cuales fueron. Decidimos utilizar esta extensión por que nos pareció una forma simple de visualizar que cambio hacia el otro y poder ir directo a esa sección si es que había reportado un issue o dejaba un comentario en los commit. 
Luego instalamos la extensión "Rainbow Brackets" que realmente la utilizamos muy poco ya que los colores nos mareaban a la hora de leer código pero que nos resultó útil cuando estábamos creando las clases del dominio ya que nos diferenciaba los paréntesis rectos, curvos y corchetes en distintos colores asociándolos según su jerarquía con un color distinto. Esta extensión la íbamos habilitando y deshabilitando según las circunstancias.
La última extensión que instalamos fue "indent-rainbow" que al igual que la anterior la fuimos habilitando y deshabilitando por el mismo motivo. A diferencia de "Rainbow Brackets" esta extensión nos marcaba cada paso de las indentaciones con colores distintos. Nos fue muy útil cuando editábamos el `index.html` ya que nos era más fácil distinguir las jerarquías y donde nos estaba faltando cerrar algo.  
Luego de estas extensiones decidimos ponernos "reglas".
La primera fue dejar el tabulador por defecto y utilizarlo como herramienta de indentación. Pautamos que todos los `id` del `html` iban a llamarse: `id`+Nombre así en `scss` identificábamos rápidamente a que hacían referencia. Con respecto al código JavaScript perteneciente al dominio resolvimos que lo mejor era hacer una separación de 1 línea entre función y función. En cuanto al código JavaScript de la interfaz decidimos que todas las funciones referidas a las frutas irían sin separación de líneas y comentado, luego 1 línea en blanco y comenzarían las funciones referidas a las verduras que cumplirían la misma regla de las de fruta y así por cada argumento que nos pareciera relevante (alimentos y por ultimo "funciones auxiliares").  
Luego definimos "buenas prácticas" como:
- Indentación: para que quede clara la estructura del código.
- Nomenclatura de las variables y funciones: La nomenclatura del código es fundamental ya que permite entender a qué hacen referencia las variables y que hacen las funciones. Utilizamos el formato "Camell Case" que consiste en comenzar escribiendo en minúscula y utilizar las mayúsculas únicamente si es un nombre compuesto por varias palabras. Comenzando en minúscula y con mayúscula al comienzo de la siguiente y así la cantidad de veces necesarias. 
- Comentarios: optamos con comentar el código para facilitar el trabajo de entenderlo, no solo para los restantes desarrolladores, sino para uno mismo.

## Estándares de codificación Google (HTML, CSS, JavaScript)
Es mucho más fácil comprender una base de código grande cuando todo el código que contiene tiene un estilo coherente. Para ello utilizamos los estándares de codificación de Google.
Para HTML y CSS:  
- Utilizar solo minúsculas excepto en cadenas.
- Eliminar los espacios en blanco finales ya que pueden generar complicaciones.
- Utilizar UTF-8 `<meta charset="utf-8">`
- Utilizar comentarios segun sea necesario y cuando sea posible.
- Utilizar HTML5 `<!DOCTYPE html>`
- Respaldo de multimedia `alt = "Descripción de la imagen"``
- No utilizar referencias de entidad.
- Usar una nueva línea para cada bloque, lista o elemento de tabla, y aplicar una sangría a cada uno de esos elementos secundarios.
- Utilizar comillas dobles en el HTML.
- Utilizar ID y nombres de clase significativos o genéricos.
- Usar ID y nombres de clase que sean lo más cortos posible pero tan largos como sea necesario. 
- Evitar calificar ID y nombres de clases con selectores de tipo.
- Indentar todo el contenido del bloque.
- Utilizar ";" luego de cada declaración.
- Utilizar comillas simples en el CSS.

Para JavaScript:  
- Los nombres de los archivos deben estar todos en minúsculas y pueden incluir guiones bajos (_) o guiones (-), pero sin puntuación adicional. Siga la convención que usa su proyecto.
- Un bloque vacío o una construcción similar a un bloque se puede cerrar inmediatamente después de que se abre, sin caracteres, espacios o saltos de línea entre ellos
- Cada declaración va seguida de un salto de línea.
- Cada declaración debe terminar con un punto y coma.
- El código JavaScript tiene un límite de columna de 80 caracteres.
- Declare todas las variables locales con consto let. Utilice const de forma predeterminada, a menos que sea necesario reasignar una variable. La var palabra clave no debe ser utilizado.

## Buenas prácticas de OOP: separación de lógica e interfaz
Los 5 principios básicos de programación orientada a objetos se denominan principios SOLID:  
**Single responsability** (Responsabilidad simple): destinar cada clase a una finalidad sencilla y concreta. Esto también debe aplicarse para el caso de los métodos, en los que cada uno debería realizar una sola actividad.  
**Open/Closed** (Abierto/Cerrado): crear clases extensibles sin necesidad de entrar al código fuente a modificarlo. Es decir, el diseño debe ser abierto para extenderse, pero cerrado para modificarse.  
**Liskov substitutio** (Sustitución Liskov): crear todas las clases derivadas para que también puedan ser tratadas como la propia clase base.  
**Interface segregation** (Segregación de la interface): cuando se definen interfaces estos deben ser específicos a una finalidad concreta.  
**Dependency inversion** (Inversión de dependencias): uso de abstracciones para conseguir que una clase interactúe con otras clases sin que las conozca directamente. Es decir, las clases de nivel superior no deben conocer las clases de nivel inferior.

En cuanto a la separación de lógica e interfaz lo que hicimos es agrupar los ficheros del proyecto en paquetes. La clasificación de estos se hizo según la función que cumplen en el sistema: `dominio` e `interfaz`. Dentro del paquete `dominio` se crearon las diferentes clases, donde su nombre coincide con el nombre del fichero. En el paquete `interfaz` se crearon los archivos correspondientes a lo que le va a dar la visibilidad y estética al proyecto y funcionalidad a la aplicación. Dentro de esta se encuentra la carpeta `img` que es la que contiene el diseño del fondo y el logo de la aplicación. 

## Análisis estático de código: mostrar reducción de problemas
El análisis estático de código sirve para ahorrar en costes, anticipa posibles problemas antes de que se hagan realidad. A medida que va avanzando el ciclo de vida los problemas se acumulan o se arrastran provocando un mayor coste en resolverlo. 
Durante el desarrollo de la aplicación, se han ido aplicando diferentes herramientas de codificación y analizadores esta ́ticos de código.
Estas herramientas fueron: 
- ESLint: analiza estáticamente el código para encontrar problemas rápidamente. Muchos problemas que encuentra ESLint se pueden solucionar automáticamente. Las correcciones de ESLint tienen en cuenta la sintaxis. también se puede personalizar ESLint para que funcione exactamente como se necesita para el proyecto.
- Prettier: es un formateador de código. Aplica un estilo coherente al analizar el código y lo reescribe con sus propias reglas teniendo en cuenta la longitud máxima de línea, ajustando el código cuando es necesario.  

Debido a la utilización de las mismas, detectamos varios errores a mejorar, como que la identación del código no era la correcta, existían casos de declaración de variables que no se utilizaban o estaban mal declaradas, la importación total de librerías era innecesario ya que únicamente se utilizaba un atributo de la misma o librerías importadas que nunca se utilizaban.

# Test unitario

## Test unitarios en Jest
Jest es una librería abierta para pruebas en JavaScript desarrollada por Facebook. Si bien Jest se puede usar para probar cualquier librería de JavaScript, brilla cuando se trata de React y React Native.
Esto no es una sorpresa ya que React y Jest provienen de Facebook, y es uno de los principales usuarios de ambos. 
Es una solución completa y fácil de configurar para realizar test en JavaScript. Funciona independientemente para cualquier proyecto de React. Jest corre los tests en paralelo de forma distribuida en diversas instancias para maximizar el rendimiento. La salida de consola es almacenada en un buffer para mostrarse más tarde con los resultados de la prueba. Se reiniciará automáticamente los entornos aislados y el estado global para cada test. De esta forma nunca dos tests entraran en conflicto el uno con el otro.

Para instalarlo usamos únicamente el comando: 'npm install --save-dev jest' y en el archivo 'package.json' agregamos '"scripts": {"test": "jest"}'. Luego ya comenzamos a escribir las pruebas en un archivo 'nombre.test.js' el cual testea el archivo 'nombre.js' y simplemente ejecutando el comando 'npm test' en consola ya comenzó a correrse el test.

En nuestro proyecto al tener 5 clases distintas tuvimos que crear 5 "tests" distintos uno para cada clase.
'fruta.test.js': testea que todas las funciones del archivo 'fruta.js' estén funcionando y den los resultados esperados. Estas funciones son: 'setCantidad' que su función es asignar la cantidad de la fruta, 'setNombre' que su función es asignar el nombre de la fruta, 'getNombre' que su función es obtener el nombre de la fruta, 'getCantidad' que su función es obtener la cantidad de la fruta, 'aumentarCantidad' que aumenta la cantidad en 1 de la fruta y por ultimo 'disminuirCantidad' que disminuye en uno la cantidad de la fruta. 
'verdura.test.js': testea las funciones del archivo 'verdura.js' que tiene las mismas funciones que 'fruta.js' funcionen correctamente.
'lista-fruta.test.js: testea que todas las funciones del archivo 'lista-fruta.js' estén funcionando y den los resultados esperados. Estas funciones son: 'agregar' que su función es agregar una fruta a la lista y 'getFrutas' que su función es obtener la lista de frutas.
'lista-verdura.test.js': testea que todas las funciones del archivo 'lista-verdura.js' estén funcionando y sus funciones son las mismas que las de 'lista-fruta.js'
'lista-compras.test.js': testea que todas las funciones del archivo 'lista-compras.js' estén funcionando y a diferencia de las listas anteriores esta posee además la función de eliminar un alimento de la lista, 'eliminarAlimento'.

## 100% cobertura en clases de dominio
Una vez finalizados los test no podemos detenernos ahí ya que no tenemos conocimiento si estamos abarcando todas las líneas o funciones por lo que incluimos '--coverage' en el archivo 'package.json' en la sección de "scripts". Esta bandera que incluimos sirve para que Jest pueda recolectar información sobre el código del proyecto entero incluyendo archivos sin testear. 
A diferencia del test anterior, éste nos detalla en una tabla en forma de porcentajes la cantidad de código cubierto y por su puesto también que pruebas están correctas y cuales no lo están. A continuación, un ejemplo:


--------------------|---------|----------|---------|---------|-------------------
File                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------------------|---------|----------|---------|---------|-------------------
All files           |     100 |      100 |     100 |     100 |                   
 fruta.mjs          |     100 |      100 |     100 |     100 |                   
 lista-compras.mjs  |     100 |      100 |     100 |     100 |                   
 lista-frutas.mjs   |     100 |      100 |     100 |     100 |                   
 lista-verduras.mjs |     100 |      100 |     100 |     100 |                   
 verdura.mjs        |     100 |      100 |     100 |     100 |                   

  
  
Una vez que obtuvimos un 100% de cobertura en todas las clases del dominio y a su vez que estaban correctas, no nos detuvimos ahí ya que estos números son los mínimos que tenemos que alcanzar. Por eso creamos nuevas pruebas con distintas entradas para tratar de alcanzar la mayor cantidad de ingresos diversos y casos bordes que podrían romper nuestro programa.

# Test de sistema

## Realizar test de sistema en un entorno separado del desarrollo
Se realizaron distintas pruebas en entornos separados de los utilizados para el desarrollo, se utilizó, en primer lugar, una *virtual machine* desde un sistema operativo MacOS simulando un entorno Windows el cual testeo el sistema y el mismo respondió de forma perfecta al programa. también, fue utilizada una Laptop externa la cual no fue utilizada en el desarrollo del sistema e igualmente pudo funcionar de excelente manera tal como era esperado previo a realizar los análisis.  
## Generar casos de prueba aplicando técnica partición equivalente


Condición           | Clases Validas      | Clases Invalidas                    
--------------------|---------------------|-------------------------------------
Nombre Fruta        |Ingreso nombre fruta (1) |Texto Vacío (3)                         
||| Texto Repetido (4)                      
||| Texto con Mayus y Minus intercaladas (5)
||| Contenido distinto de [a-z] (6)        
Nombre Verdura      | Ingreso nombre verdura (2) |Texto Vacío (7)
|||Texto Repetido (8)
|||Texto con Mayus y Minus intercaladas (9)
|||Contenido distinto de [a-z] (10)

  

CP | Escenario | Nombre Fruta | Resultado Esperado | Clase
---|-----------|--------------|--------------------|-------
1.1.1  | E1 | Pera | Se agrego Pera a la lista! | 1
1.1.2  | E1 | Uva | Se agrego Uva a la lista! | 1
1.2  | E2 | "" | No se pudo agregar, el texto esta vacío. | 3
1.3  | E3 | Pera | No se pudo agregar. Pera ya se encuentra en la lista. | 4
1.4  | E4 | PeRa | No se pudo agregar. Formato de texto invalido. Se encontró una mayúscula luego de una minúscula| 5
1.5  | E5 | M4nz4n4 | No se pudo agregar. Formato de texto invalido. No utilizar números ni caracteres especiales. | 6
2.1.1  | E6 | Zanahoria | Se agrego Zanahoria a la lista! | 2
2.1.2  | E6 | Coliflor | Se agrego Coliflor a la lista! | 2
2.2  | E7 | "" | No se pudo agregar, el texto esta vacío. | 7
2.3  | E8 | Zanahoria | No se pudo agregar. Zanahoria ya se encuentra en la lista. | 8
2.4  | E9 | ZanAHOria | No se pudo agregar. Formato de texto invalido. Se encontró una mayúscula luego de una minúscula| 9
2.5  | E10 | Z4nah@r!a | No se pudo agregar. Formato de texto invalido. No utilizar números ni caracteres especiales. | 10

(No realizamos casos de prueba para los botones dado que las opciones son únicamente presionarlos o no presionarlos. Pero allí encontramos un caso borde que se genera cuando el botón es presionado provocando una cantidad negativa. Para ello se muestra una alerta advirtiendo el error).



## Detallar sesiones de prueba exploratoria

Misión | Familiarización con el funcionamiento de la pagina            
-------|------------------------------------------------------------
Inicio: | FECHA: 15 de junio                           
|| Duración: 30 minutos
Tester:               | Todos                                        
Estructura de división del tiempo:  |                                  
||1. Diseño y ejecución de pruebas: 70 %       
||2. Investigación y reporte de defectos: 30 % 
||3. Configuración de la sesión: 0 %
||1. Objetivo vs. Oportunidad: 100% / 0%
Archivos de datos:    |   N-A                                       
Notas de pruebas:    | Ingresamos al sitio http://localhost:8080/                 
|| Pruebas: 
|| Ingreso datos validos
|| Ingreso de fruta, se ingresa exitosamente.
|| Ingreso de verdura, se ingresa exitosamente.
|| Añadir cantidad frutas, se ingresa exitosamente.
|| Añadir cantidad verdura, se ingresa exitosamente.
|| Restar cantidad frutas, se ingresa exitosamente.
|| Restar cantidad verduras, se ingresa exitosamente.
|| Ingreso fruta repetida, recibo mensaje de error                                   
|| Ingreso verdura repetida, recibo mensaje de error                                   
|| Eliminar lista compras, se elimina exitosamente                                      
Defectos             |  N/A
Inconvenientes       | Sin inconvenientes               

Misión | Probar funcionamiento responsive de la pagina            
-------|------------------------------------------------------------
Inicio: | FECHA: 16 de junio                           
|| Duración: 20 minutos
Tester:               | Todos                                        
Estructura de división del tiempo:  |                                  
||1. Diseño y ejecución de pruebas: 80 %       
||2. Investigación y reporte de defectos: 20 % 
||3. Configuración de la sesión: 0 %
||1. Objetivo vs. Oportunidad: 100% / 0%
Archivos de datos:    |   N-A                                       
Notas de pruebas:    | Ingresamos al sitio responsinator.com para probar en los distintos dispositivos    
|| Ingresamos el link de nuestra página http://localhost:8080/
|| Cambiamos a HTTP para poder ver el sitio           
|| Pruebas: 
|| Probamos en iPhone expensive portrait con width: 375px
|| Pasa
|| Probamos en iPhone expensive en modo landscape con width: 734px
|| Pasa
|| Probamos en Android (Pixel 2) modo portrait con width: 412px
|| Pasa
|| Probamos en Android (Pixel 2) modo landscape con width: 684px
|| Pasa
|| Probamos en iPhone 6-8 modo portrait con width: 375px
|| Pasa
|| Probamos en iPhone 6-8 modo landscape con width: 667px
|| Pasa
|| Probamos en iPhone 6-8 Plump modo portrait con width: 414px
|| Pasa
|| Probamos en iPhone 6-8 Plump modo landscape con width: 736px 
|| Pasa                                   
|| Probamos en iPad modo portrait con width: 768px  
|| Pasa                                
|| Probamos en iPad modo landscape con width: 1024px 
|| Pasa                                    
Defectos             |  N/A
Inconvenientes       | Sin inconvenientes             

# Reporte de issues

## Reportar issues (bugs, improvements, missing features) en GitHub 
Nos pareció muy importante a la hora de realizar el proyecto el reporte de issues, creo que esta herramienta nos permitió mantener un orden a la hora de trabajar y así podernos mantener ordenados y organizados, sabiendo que es lo que hay que hacer sin inconvenientes, asimismo GitHub también provee herramientas extras como los labels y niveles de severidad que también nos fueron de gran ayuda.
Pensamos que el reporte de issues es una herramienta muy poderosa y que podemos seguir aprendiendo y utilizando a lo largo de nuestro proceso como desarrolladores.

## Aplicar buenas prácticas de reporte de issues
Al momento de reportar distintos tipos de Issues, mantuvimos determinado estándar basado en buenas prácticas para mantener un buen control y entendimiento de estos por parte de todos los participantes, entre las practicas utilizadas al reportar issues determinamos: 
- Buena utilización de labels, los cuales indicaban el tipo de problema acompañado de la prioridad del mismo.
- Títulos claros que logren describir el entendimiento del problema de forma precisa. 
- Descripciones explicativas que dejen claro el problema a solucionar o inspeccionar. 
- Dar de baja issues que fueron resueltos.
- Determinar cuando el issue es una idea a futuro la cual no precisa ser solucionada por el momento. 

## Definir labels para tipos de issue y niveles de severidad
Dentro de los labeles seleccionados al marcar un nuevo issue, mantuvimos como indispensable agregar la severidad de este, de esta forma los demás integrantes del equipo podrían identificar 
si el mismo debe ser atendido de forma inmediata, o, en caso contrario, poder abordar el problema desde otra perspectiva. 
En primer lugar, cuando un issue era urgente y se tiene que resolver lo antes posible, utilizamos un label de alta prioridad esto quiere decir que tiene que ser resuelto cuanto y nos tenemos que enfocar en este problema, nos pareció importante cerrar todos los issues de este tipo para asegurar el correcto funcionamiento y poder seguir trabajando de una manera organizada.
Luego asignamos prioridad media a los issue cuya importancia corresponde a su nombre, nos pareció importante también lograr cerrar estos issue ya que aunque no sean urgentes afectan el funcionamiento y son implementaciones que nos gustarían tener ahora y no a futuro.
En tanto a la Prioridad baja estos son los de menor relevancia y no presentan urgencia ni problemas si no se resuelven y sabíamos que no era necesario y que no íbamos a poder implementar todos para esta versión por lo cual dejamos algunos de estos issues como implementaciones a futuro.

## Dejar issues abiertos para correcciones o mejoras futuras
Como nos encontramos limitados debido al tiempo hay ciertas características que no logramos implementar, por esto dejamos varios issues abiertos con mejoras a futuro.
Asimismo, utilizamos tres niveles diferentes a la hora de definir los niveles de prioridad.

En primer lugar, cuando un issue era urgente y se tiene que resolver lo antes posible, utilizamos un label de alta prioridad esto quiere decir que tiene que ser resuelto cuanto antes y nos tenemos que enfocar en este problema, nos pareció importante cerrar todos los issues de este tipo para asegurar el correcto funcionamiento y poder seguir trabajando de una manera organizada.

Luego asignamos prioridad media a los issue cuya importancia corresponde a su nombre, nos pareció importante también lograr cerrar estos issue ya que aunque no sean urgentes afectan el funcionamiento y son implementaciones que nos gustarían tener ahora y no a futuro.

En tanto a la Prioridad baja estos son los de menor relevancia y no presentan urgencia ni problemas si no se resuelven y sabíamos que no era necesario y que no íbamos a poder implementar todos para esta versión por lo cual dejamos algunos de estos issues como implementaciones a futuro.

En cuanto a las implementaciones futuras, las mismas quedaron abiertas como issue en GitHub, entre ellas, está la opción de chequear la tipografía al ingresar un alimento para mantener un estándar dentro de las listas, también deseamos implementar en una futura versión imágenes correspondientes a los elementos ingresados para sumar de esta forma a la experiencia de uso del usuario. Otras futuras implementaciones fueron respecto a la posibilidad de eliminar alimentos desde sus respectivas listas o desde la lista de compras general, utilizable en caso de no querer utilizar el alimento ingresado o, en caso de la lista general, a través de un checkbox poder marcar el mismo como ya comprado o recogido. Por último, corregir la posibilidad de ingresar verduras en la lista de frutas y viceversa, de esta forma también se mejora tanto la experiencia como el orden mantenido en las listas. Estos aspectos nos resultaron de vital importancia ya que nos permitiría mejorar el proyecto logrado hasta la fecha y cumplir con todo lo pensado. 

## Realizar una evaluación global de la calidad
Realizando una evaluación global de la calidad del software, el mismo se considera muy satisfactorio. A pesar de la posible implementación de mejoras para una versión a futuro las cuales quedaron determinadas en issues previamente comentados, consideramos que la pagina cumple de manera perfecta en cuanto a funcionalidad refiere, a su vez, también consideramos que el sistema de diseño fue bien implementado, por lo que obtuvimos no solamente un programa funcional sino que además el mismo es agradable, minimalista, sencillo y practico, por lo que definimos también como muy satisfactoria la experiencia del usuario al utilizar Verdulista.

Haciendo mirada hacia la primera entrega, creemos haber cumplido con los objetivos y las metas deseadas en la misma, implementando todo lo deseado y de manera sólida. Asimismo, volvimos a tener contacto con las personas entrevistadas en la primera entrega para que también nos den un feedback de la versión del proyecto terminada, las mismas quedaron sumamente satisfechas y emocionadas por lo realizado, dándonos nuevamente un feedback positivo por el proyecto.

# Reflexión

## Detalle del trabajo individual

**Santiago:** En mi opinión, el proyecto fue una propuesta muy interesante, quiero destacar lo logrado con el equipo tanto a nivel de desarrollo como a nivel de grupo humano, en cuanto al desarrollo refiere, fue la primera vez que tuve que enfrentarme a un problema mas acercado a la realidad de un proyecto de ingeniería de software, creo que la idea del trabajo estuvo muy enfocada a lo real y que nos fue y va a ser de gran ayuda a lo largo de toda la carrera y fuera de ella en el ámbito profesional, tuvimos que meternos de pie a cabeza con un proyecto desde cero y logramos dejarlo tal como lo habíamos propuesto en un principio y refinado en una primer entrega, realmente el trabajo nos impulso a todos los integrantes a llegar a nuestros máximos potenciales y a tener que demostrar que realmente esto es lo que nos gusta hacer. En cuanto al proyecto terminado, me quede sumamente conforme con el resultado, realmente si tengo que definirlo o si me hubiesen mostrado el trabajo finalizado antes de empezarlo, diría que quede sumamente sorprendido con lo que fuimos capaces de lograr como equipo, todo esto no podría haber sido posible sin el máximo esfuerzo y compromiso de todos los integrantes. 

En cuanto a lo humano, como grupo siento haber funcionado a la perfección, supimos identificar en nosotros mismos fortalezas y debilidades, potenciar al máximo las virtudes de cada compañero y trabajar sumando nuestras capacidades para el bien común del proyecto, siento que todos trabajamos de forma sumamente correcta, a la par, sin dejar a ningún compañero ni atrás ni adelante, solucionando problemas los cuales por momentos dimos como insolucionables, logramos dentro del proyecto no solo lo propuesto académicamente sino también una experiencia de grupo llevada al extremo como no habíamos trabajado jamás. En el día de hoy me da hasta lastima haber llegado a la fecha de entrega y no poder seguir desarrollando el proyecto con ellos, pero como parte de lo académico espero poder volver a trabajar tanto con Tadeo, como con Renzo, y quien dice a futuro lo que quizás logremos.

**Renzo**: con respecto al proyecto me pareció muy complejo para el conocimiento que teníamos previo a encararlo. Esto no quiere decir que esté disconforme con el resultado sino lo contrario. Creo que el proyecto realizado tiene un nivel mucho mejor al que esperaba y de hecho yo lo usaría en mi vida diaria como también las personas que lo probaron. Está claro que todavía le falta mucho pero en cuanto al tiempo y recursos que nos brindaron me parece un óptimo proyecto. 
En cuanto a mis compañeros de equipo no tengo nada para decir distinto a lo vivido en la primera etapa del proyecto. El compromiso y la buena relación entre todos nosotros fue desde un principio hasta el ultimo dia excelente y definitivamente volvería a formar grupo con cualquiera de ellos. 
Me siento orgulloso del proyecto realizado y me gustaría verlo en las calles.

**Tadeo**: Siento que el proyecto fue un desafio muy interesante y aunque tuvo su dificultad tambien creo que me puedo llevar muchos aprendizajes, A lo largo del proyecto pienso que logre crecer como desarollador,y pude afinar mi relacion con mi equipo, siento que esto tambien fue un aspecto muy importante yaque sabia que tenia un equipo que me respaldaba y estaba dispuesto a ayudar si era necesario, aunque lamentablemente estuve inhabilitado unos días debido a ser covid positivo igualmente mis compañeros supieron entender y me mantuvieron actualizado y logramos trabajar igualmente adaptandonos a la situacion y buscando alternativas.
Pienso que aunque en otras materias tuvimos que desarollar en equipo, en este entrega tuvimos la oportunidad de aprender a trabajar grupalmente con git y tuvimos desafios nuevos, pero logramos organizarnos y supimos abordar exitosamente el obligatorio, me voy muy satisfecho con el trabajo realizado.
Tambien me gustaría decir que pudimos completar lo planteado y me voy contento conmigo y mi equipo de trabajo sabiendo que lo hicimos nosotros y que valió la pena el esfuerzo.
Finalmente Santiago y Renzo fueron grandes compañeros de trabajo y espero poder trabajar con ellos en un futuro tanto en el ámbito académico como en el laboral algún dia, me termino llevando dos amigos gracias al proyecto y además todo lo aprendido así que no puedo pedir mucho más y estar agradecido.


En lo particular, mas allá de que todos estuvimos involucrados en la mayoría de los puntos del proyecto, debido a la cantidad de investigaciones y aprendizajes desde cero que tuvimos que desarrollar por nuestros medios decidimos dividir generalidades del proyecto en partes iguales, cada uno de los integrantes se especializo en un foco del proyecto que luego se complemento con ayuda del resto de los integrantes. Santiago se enfocó sobre todo en la parte de estilos de la interfaz del usuario con especial énfasis en garantizar una buena experiencia de uso. Renzo se especializo y enfoco en el ámbito funcional del proyecto, logrando que el programa funcione tal como habíamos boceteado en la primera instancia del proyecto. Tadeo se enfocó en el estudio y aprendizaje del informe académico, además, fue el participante mas polivalente, apoyando y aportando tanto en el diseño visual como en lo funcional. 


## Técnicas aplicadas y aprendizajes
En cuanto a técnicas aplicadas y aprendizajes queremos destacar el uso de la herramienta git como los componentes de material design. Esas 2 herramientas para nosotros es lo más destacable del proyecto ya que html, javascript y css ya teníamos un poco de conocimiento.  
Hoy podemos decir que estamos listos para implementar Git y Github en nuestro camino estudiantil y en un futuro también vemos que nos ayudará en el trabajo.   
En cuanto a material design, la verdad es que no nos “amigamos” tanto, es verdad que estéticamente es muy visual y linda pero pensamos que tenemos que dedicarle más años de aprendizaje porque es una herramienta muy compleja con muchos componentes y con una infinidad de estilos y funcionalidades. 
Luego nos pareció que Jest es una herramienta muy útil que nos hubiera servido mucho en materias previas y que nos va a ser de mucha utilidad a la hora de testear código.
En cuanto a los estándares WCAG nos pareció algo muy complejo ya que tiene un enfoque hacia proyectos más avanzados en cuanto a versionado, tiempo y costo. Lo que sí pudimos obtener de este estándar es que nos abrió la cabeza a la hora de que hay un mundo de requisitos u "obligaciones" a tener en cuenta ya que cualquier persona puede utilizar nuestra página y puede generarle desde una mala experiencia hasta un daño físico. 
Lo último que queremos destacar son las pruebas ya que pensabamos que ibamos a llegar a este punto y "aprobar" todas las pruebas y casos posibles pero nos dimos cuenta que en las próximas versiones no solo habría que agregar cosas si no que corregir detalles como el ingreso de una fruta con caracteres y números que tendría que arrojar una excepción y no lo está haciendo. 
A parte de las técnicas y aprendizajes ya mencionados también podemos incluir el Visual Studio Code como un aprendizaje nuevo que nos encantó conocer y no queremos dejar de usarlo, también aprendimos que es Node.js, cómo generar código de buena calidad, trabajar en un proyecto con otras personas y todas las responsabilidades que eso conlleva y que el hecho de crear una aplicación o una página no es solamente sentarse y escribir código, sino que tiene un trabajo previo muy grande y un trabajo posterior casi que infinito ya que hay que constantemente adaptarlo a las nuevas tecnologías y corrigiendo errores que solamente los podemos identificar en la práctica.
