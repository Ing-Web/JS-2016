/*
  FUNCIONES EN JAVASCRIPT

  Una funcion es un bloque de código que puede ser reutilizado.

  sintaxis

  function nombreDeLaFuncion(){
    codigo que se ejecuta
  }

  Las funciones una vez declaradas se almacenan en memoria pero debe ser invocadas para que se ejecute su código.
*/

// function saludar(){
//   console.log("Hola mundo");
// }

//console.log(saludar); // devuelve informacion de la funcion;

//console.log(saludar()); // ejecuta la funcion;

/*
Una funcion puede tener parámetros. Estos son valores con los que la funcion trabaja. Cuando se invoca a una funcion, estos parámetros deben recibir datos reales, los cuales son llamados argumentos.

  PARAMETROS: valores que usa la funcion en su declaracion.
  ARGUMENTOS: valores "reales" que recibe los parámetros cuando se invoca a la funcion.
*/

// function multiplicar(a,b){
//   console.log(a*b);
//   console.log(arguments[1]);
// }

// multiplicar(4,5);

/*
  Si se pasan más argumentos que los parámetros requeridos, los sobrantes se ignoran.
  
  Si se pasan menos argumentos que los parámetros requeridos, los faltantes son undefined.
*/


// function sumar(){
//   var suma = 0;
//   for(var i = 0; i < arguments.length; i++){
//     suma = suma + arguments[i];
//   }
//   return suma;
// }

// var miSuma = sumar(2,3,4,5);


/*
  TIPOS DE FUNCIONES

  * Por su nombre
    * Funciones nombradas
    * Funciones anonimas

  * Por su construccion
    * Funciones por declaracion (function declaration)
      function miFuncion(){//..}

      Las declaraciones en JavaScript "hacen algo"

    * Funciones por expresion (function expression)
      var miFuncion = function(){//..};

      Las expresiones en JavaScript "tienen un valor"
*/

// var titulo = document.getElementById('titulo');
// function miAlert(){
//     alert("hiciste click en el titulo");
// }
// titulo.addEventListener('click',miAlert);


/*
  Hoisting (elevacion)

  El interprete de JS eleva las variables al inicio de su scope sin importar si fueron declaradas más adelante (pero no eleva su definicion, o sea, su valor).

  También eleva las funciones por declaracion, pero no las funciones por expresion.
*/

// console.log(despedirse());

// var despedirse = function(){
//   console.log("Adiós mundo");
// };

// console.log("he continuado");


/*
  SCOPE
  Es el ámbito en el cual vive y es accesible una variable. Solo las funciones crean scopes en JavaScript. En otras palabras, las variables son accesibles solo dentro de la funcion en la que fueron declaradas.
*/

// function saludar(){
//   var nombre = "Alvaro";
//   console.log("Hola " + nombre);
//   return nombre;
// }

// var nombre = saludar();

// console.log(nombre);
// console.log("He continuado");

/*
  Si se declara una variable dentro de una funcion sin la palabra "var" esta se vuelve global (no recomendado).

  Una funcion accede a las variables de su scope pero tambien a las variables del scope superior (closure). Eso significa también que toda funcion puede acceder a las variables globales.
*/


// var nombre = "Jose";
// (function(){
//   nombre = "Goku";
//   return nombre;
// })();
// console.log(nombre);


// (function saludar(){
//   console.log("hola");
//   return;
//   console.log("adios");
// })();

// function saludar(){
//   var hablar = "hola";
//   console.log(hablar);
//   return;
//   hablar = "adios";
//   console.log(hablar);
// }

// saludar();

(function(nombre){
  console.log(nombre);
})("Jose");