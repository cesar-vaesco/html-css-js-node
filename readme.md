# html-css-js-node

### Intro a node

```
Crear un archivo package.json: npm init -y

finalidad:
Puede agregar un package.json archivo a su paquete para que otros usuarios puedan administrarlo e instalarlo fácilmente. Los paquetes publicados en el registro deben contener un package.json archivo.

Un package.json archivo:

- enumera los paquetes de los que depende su proyecto
- especifica versiones de un paquete que su proyecto puede usar usando reglas de control de versiones semánticas
- hace que su construcción sea reproducible y, por lo tanto, más fácil de compartir con otros desarrolladores
```
<hr>
Dependencias usadas en la práctica:

<table>
  <tr>
    <td>Dependencia</td>
    <td width="250">Comando de instalación</td>
    <td>Descripción</td>
  </tr>

  <tr>
    <td>Express</td>
    <td >
        <li>npm i -S express</li>
        <li>npm i -S express@version_requerida</li>
    </td>
    <td>Express.js, o simplemente Express, es un marco de aplicación web de back-end para Node.js, lanzado como software gratuito y de código abierto bajo la licencia MIT. Está diseñado para crear aplicaciones web y API. Se le ha llamado el marco de servidor estándar de facto para Node.js.</td>
  </tr>

  <tr>
      <td>Vercel</td>
    <td >
        <li>npm i -g vercel</li>
    </td>
    <td>
        <li>Vercel es una plataforma en la nube para sitios estáticos y funciones sin servidor que se adapta perfectamente a un flujo de trabajo. Permite alojar sitios web y servicios web que se implementan instantáneamente, escalan automáticamente y no requieren supervisión, todo sin configuración.</li>
        <li>Iniciar proyecto con vercel, usar el comando: <strong> vercel init. Para el ejemplo se usara <i>custom build</i></strong></li>
        <li>Dirigirse a la carpeta <i>custom build</i> dentro del workspace para trabajar en el proyecto</li>
        <ul>
            <br>
            <strong>Pasos par vincular proyecto a Vercel:</strong>
            <li>Inicializar con comando <strong>vercel</strong> en el directorio donde se ha construido el proyecto</li>
            <li>set up and deploy - configurar e implementar: Y</li>
            <li>Which scope do you want to deploy to? - Elegir ámbito a implementar</li>
            <li>Link tp existing proyect? - Eligir si eseamos vincular a proyecto existente</li>
            <li>What´s your project´s name? - Elegir nombre del proyecto</li>
            <li>Is which directory is your code located? - Indicar la ruta donde se va a almacenar nuestro proyecto</li>
        </ul>
    </td>
  </tr>

  <tr>
    <td>Mongoose</td>
    <td>npm install mongoose</td>
    <td>Mongoose es una herramienta de modelado de objetos de MongoDB diseñada para funcionar en un entorno asincrónico. Mongoose admite promesas y devoluciones de llamada.</td>
  </tr>

   <tr>
    <td>body-parse</td>
    <td>npm install body-parser</td>
    <td><strong>Middleware</strong>de análisis del cuerpo de Node.js. Analiza los cuerpos de las solicitudes entrantes en un <strong>Middleware</strong> antes que sus controladores, disponible en la propiedad req.body.</td>
  </tr>

   <tr>
    <td>cors</td>
    <td>npm install cors</td>
    <td>CORS es un paquete node.js para proporcionar un <strong>Middleware</strong> Connect / Express que se puede usar para habilitar CORS con varias opciones.</td>
  </tr>


</table>
 <p><cite><strong>*** Middleware</strong> es software que se sitúa entre un sistema operativo y las aplicaciones que se ejecutan en él. Básicamente, funciona como una capa de traducción oculta para permitir la comunicación y la administración de datos en aplicaciones distribuidas..</cite></p>
 <hr>
<br>


### Pasos para conectar nuestra base de datos a Vercel

<ol>
    <li>Crear nuestro cluster en mongo</li>
    <li>Connect: en la nube de mongo crear la url de conección y copiarla
        <ul>* En caso de no recordar usuario y contraseña dirigirse a Database Access y crear o editar usuario y contraseña</ul>
    </li>
    <li>Editar la url de conexión agregando conraseña de usuario y el nombre que se le va a dar a la base da dato</li>
    <li>En Vercel, dirigirse a la carpeta donde esta almacenada nuestra app y buscar la pestaña de setings</li>
    <li>En settings editar las variables de entorno</li>
    <li>En variables de entorno agregar el nombre de las variables de entorno y la url que va servir para generar l conexión
        <ul>
            *** Asegurarse de que los ámbientes de producción, preview y development tengan asignada la variable
        </ul>
    </li>
</ol>






### **Ejercicio de web site realizado con flexbox responsive**

#### _Imagenes del web site_
<table>
  <tr>
    <td valign="top"><img  src="https://github.com/cesar-vaesco/html-css-js-node/blob/html-css-js/img/banner-flex.png " alt="banner" width="300" height="300"/></td>
    <td valign="top"><img  src="https://github.com/cesar-vaesco/html-css-js-node/blob/html-css-js/img/nosotros-flex.png" alt="seccion-nosotros" width="300" height="300"/>
    <td valign="top"><img  src="https://github.com/cesar-vaesco/html-css-js-node/blob/html-css-js/img/contacto-footer-flex.png" alt="seccion-footer" width="300" height="300"/>
  </tr>
</table>

[Tag y código de ejercicio website flexbox](https://github.com/cesar-vaesco/html-css-js-node/releases/tag/v1.0)

```
El ejercicio incluye optimización para que el website también muestre tamaño responsive

```
