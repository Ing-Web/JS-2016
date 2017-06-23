/*
  El objeto Math permite trabajar con numeros.

*/

(function(){
  "use strict";
  console.log(Math.PI);
  console.log(Math.E);

  var numero = 3.4;

  // el método ceil redondea hacia arriba
  var resultado = Math.ceil(numero); 
  console.log(resultado);
  // el método floor redondea hacia abajo
  resultado = Math.floor(numero);
  console.log(resultado);
  // el método round() redondea segun el valor
  resultado = Math.round(numero);
  console.log(resultado);
  resultado = Math.round(3.5);
  console.log(resultado);
  // min() devuelve el minimo de un set de parametros
  // max() devuelve el maximo de un set de parametros
  // abs() devuelve al valor absoluto
  // sqrt() devuelve la raiz cuadrada
  // random() devuelve un numero aleatorio entre 0 y 1
  var min = 10;
  var max = 18;
  var aleatorio = Math.floor(Math.random() * (max-min)) + min;
  console.log(aleatorio);

  console.log(Math.min(2,3,4,5,6,99));
})();

//JSON JavaScript Object Notation
/*
  Es una notacion para estructurar información.
  Esta inspirada en JavaScript pero no es JavaScript.
  Se usa para compartir información.
  Existen bases de datos como MongoDB que utilizan JSON.

  Aunque esta basado en los objetos de JavaScript tiene
  dos diferencias fundamentales con estos:

  1. Todas las claves van entrecomilladas.
  2. No existen métodos, solo propiedades.
*/