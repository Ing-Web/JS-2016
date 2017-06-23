/*
* NODE JS
*
* Es la implementación de JavaScript en el servidor
* Aplicaciones isomórficas = Las apps que tienen JS en el backend y el frontend
*
* npm -> Node package manager
*
* npm install modulo -g           (instala globalmente el modulo)
* npm install modulo --save      (instala como dependencia del proyecto)
* npm install modulo --save-dev  (instala como dependencia de desarrollo)
*
* Aunque tu proyecto no sea con Node, Node te puede ayudar en la etapa de
* desarrollo.
*
* Para comenzar un proyecto
*
*   npm init
*   * Esto crea un archivo package.json con toda la información del
*   proyecto y sus dependencias.
*
* Para instalar un proyecto
*
*   npm install
*   * Lee el package.json e instala las dependencias necesarias
* */

// Ejemplo de conexion
var http = require('http');
var server = http.createServer(function(req,res){
  res.write('<h1>Hola mundo desde Node JS</h1>');
  res.end();
}).listen(3000,function(){
  console.log('Servidor corriendo en el puerto 3000');
});

/*
* Si quieres trabajar más rapido usa Express
* */
