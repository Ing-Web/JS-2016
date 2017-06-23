//var i = 0;
//for(i; i < 10; i++){
//  console.log(i);
//}
//
//var semana = ['domingo', 'lunes', 'martes', 'miercoles'];
//for(var dia in semana){
//  var diaActual = semana[dia];
//  console.log(diaActual);
//}

//var button = document.getElementById('button');
//var contador = 0;
//button.addEventListener('click',function(){
//  var _this = this;
//  contador++;
//  (function(){
//    _this.textContent = 'Hiciste click ' + contador + ' veces';
//  })();
//});


var input = document.getElementById('input');
var parrafo = document.getElementById('parrafo');
input.addEventListener('keydown',function(){
  parrafo.textContent = this.value;
});


// Se pueden pasar más de un valor a la consola
console.log(input, parrafo);

// console.dir muestra toda la información del objeto
console.dir(input);


var familias = [
  ["Juancito", "Claudia", "Martin"],
  ["Aldo", "Carmen", "Vanesa"],
  ["Alejandro","Maria","Roberto" , "Gabriela"]
];

console.log(familias);
console.table(familias);


function Pais(nombre,capital,moneda){
  this.nombre = nombre;
  this.capital = capital;
  this.moneda = moneda;
}

var paises = {};
paises.colombia = new Pais("Colombia","Bogotá","Peso colombiano");
paises.argentina = new Pais("Argentina", "Buenos Aires", "Peso argentino");
paises.peru = new Pais("Peru", "Lima", "Nuevo sol");
paises.bolivia = new Pais("Bolivia", "La Paz", "Boliviano");

console.log(paises);
console.table(paises);

/*
* jQuery
* Se seleccionan elementos del DOM con $('')
* Se pasa como parámetro cualquier selector CSS válido.
* Esta seleccion devuelve un objeto jQuery y los métodos de jQuery
* devuelven un objeto jQuery lo que permite encadenar métodos fácilmente.
* */

var button = $('button').css({
  background: "red",
  "font-size": "20px",
  border: "none"
});


function l(value){
  return console.log(value);
}


function id(value){
  if(document.getElementById(value) !== null) {
    return document.getElementById(value);
  }
}

l(button);
var miParrafo = id('parrafo');
l(miParrafo);

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

/*
* Gulp
*
* Sistema de automatización de tareas.
*
*   npm install -g gulp          (1 sola vez)
*   npm install --save-dev gulp  (para cada proyecto)
*
*   crear un gulpfile.js       (en la raiz del proyecto)
*
* Métodos de GULP
*
*   .task('nombre',*['tareas previas'], function);
*   .src('path')
*   .dest('path')
*   .watch('path', ['tareas'])
*
*   Además
*     .pipe()  -> encadena un proceso (stream) con el siguiente
*
* Para cada tarea se usa un plugin (o modulo de node). Cada uno tiene su propia documentacion.
* */

console.log("Esto es una prueba");

//var i = 0;
//for(i; i < 10; i++){
//  console.log(i);
//}
//
//var semana = ['domingo', 'lunes', 'martes', 'miercoles'];
//for(var dia in semana){
//  var diaActual = semana[dia];
//  console.log(diaActual);
//}

//var button = document.getElementById('button');
//var contador = 0;
//button.addEventListener('click',function(){
//  var _this = this;
//  contador++;
//  (function(){
//    _this.textContent = 'Hiciste click ' + contador + ' veces';
//  })();
//});


var input = document.getElementById('input');
var parrafo = document.getElementById('parrafo');
input.addEventListener('keydown',function(){
  parrafo.textContent = this.value;
});


// Se pueden pasar más de un valor a la consola
console.log(input, parrafo);

// console.dir muestra toda la información del objeto
console.dir(input);


var familias = [
  ["Juancito", "Claudia", "Martin"],
  ["Aldo", "Carmen", "Vanesa"],
  ["Alejandro","Maria","Roberto" , "Gabriela"]
];

console.log(familias);
console.table(familias);


function Pais(nombre,capital,moneda){
  this.nombre = nombre;
  this.capital = capital;
  this.moneda = moneda;
}

var paises = {};
paises.colombia = new Pais("Colombia","Bogotá","Peso colombiano");
paises.argentina = new Pais("Argentina", "Buenos Aires", "Peso argentino");
paises.peru = new Pais("Peru", "Lima", "Nuevo sol");
paises.bolivia = new Pais("Bolivia", "La Paz", "Boliviano");

console.log(paises);
console.table(paises);

/*
* jQuery
* Se seleccionan elementos del DOM con $('')
* Se pasa como parámetro cualquier selector CSS válido.
* Esta seleccion devuelve un objeto jQuery y los métodos de jQuery
* devuelven un objeto jQuery lo que permite encadenar métodos fácilmente.
* */

var button = $('button').css({
  background: "red",
  "font-size": "20px",
  border: "none"
});


function l(value){
  return console.log(value);
}


function id(value){
  if(document.getElementById(value) !== null) {
    return document.getElementById(value);
  }
}

l(button);
var miParrafo = id('parrafo');
l(miParrafo);

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

/*
* Gulp
*
* Sistema de automatización de tareas.
*
*   npm install -g gulp          (1 sola vez)
*   npm install --save-dev gulp  (para cada proyecto)
*
*   crear un gulpfile.js       (en la raiz del proyecto)
*
* Métodos de GULP
*
*   .task('nombre',*['tareas previas'], function);
*   .src('path')
*   .dest('path')
*   .watch('path', ['tareas'])
*
*   Además
*     .pipe()  -> encadena un proceso (stream) con el siguiente
*
* Para cada tarea se usa un plugin (o modulo de node). Cada uno tiene su propia documentacion.
* */

console.log("Esto es una prueba");

//var i = 0;
//for(i; i < 10; i++){
//  console.log(i);
//}
//
//var semana = ['domingo', 'lunes', 'martes', 'miercoles'];
//for(var dia in semana){
//  var diaActual = semana[dia];
//  console.log(diaActual);
//}

//var button = document.getElementById('button');
//var contador = 0;
//button.addEventListener('click',function(){
//  var _this = this;
//  contador++;
//  (function(){
//    _this.textContent = 'Hiciste click ' + contador + ' veces';
//  })();
//});


var input = document.getElementById('input');
var parrafo = document.getElementById('parrafo');
input.addEventListener('keydown',function(){
  parrafo.textContent = this.value;
});


// Se pueden pasar más de un valor a la consola
console.log(input, parrafo);

// console.dir muestra toda la información del objeto
console.dir(input);


var familias = [
  ["Juancito", "Claudia", "Martin"],
  ["Aldo", "Carmen", "Vanesa"],
  ["Alejandro","Maria","Roberto" , "Gabriela"]
];

console.log(familias);
console.table(familias);


function Pais(nombre,capital,moneda){
  this.nombre = nombre;
  this.capital = capital;
  this.moneda = moneda;
}

var paises = {};
paises.colombia = new Pais("Colombia","Bogotá","Peso colombiano");
paises.argentina = new Pais("Argentina", "Buenos Aires", "Peso argentino");
paises.peru = new Pais("Peru", "Lima", "Nuevo sol");
paises.bolivia = new Pais("Bolivia", "La Paz", "Boliviano");

console.log(paises);
console.table(paises);

/*
* jQuery
* Se seleccionan elementos del DOM con $('')
* Se pasa como parámetro cualquier selector CSS válido.
* Esta seleccion devuelve un objeto jQuery y los métodos de jQuery
* devuelven un objeto jQuery lo que permite encadenar métodos fácilmente.
* */

var button = $('button').css({
  background: "red",
  "font-size": "20px",
  border: "none"
});


function l(value){
  return console.log(value);
}


function id(value){
  if(document.getElementById(value) !== null) {
    return document.getElementById(value);
  }
}

l(button);
var miParrafo = id('parrafo');
l(miParrafo);

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

/*
* Gulp
*
* Sistema de automatización de tareas.
*
*   npm install -g gulp          (1 sola vez)
*   npm install --save-dev gulp  (para cada proyecto)
*
*   crear un gulpfile.js       (en la raiz del proyecto)
*
* Métodos de GULP
*
*   .task('nombre',*['tareas previas'], function);
*   .src('path')
*   .dest('path')
*   .watch('path', ['tareas'])
*
*   Además
*     .pipe()  -> encadena un proceso (stream) con el siguiente
*
* Para cada tarea se usa un plugin (o modulo de node). Cada uno tiene su propia documentacion.
* */
