(function(){
  "use strict";
  /*
    Math es un objeto del lenguaje JavaScript que permite trabajar con números.
  */

  console.log(Math.E);
  console.log(Math.PI);

  // .ceil() redondea un numero hacia arriba
  var numero = 3.2;
  console.log(Math.ceil(numero));
  // .floor() redondea hacia abajo
  console.log(Math.floor(numero));
  // .round() redondea segun el valor 
  console.log(Math.round(numero));
  numero = 3.5;
  console.log(Math.round(numero));
  // .max() y .min() que devuelven el mayor y menor valor de una lista de parámetros
  // sqrt() devuelve la raiz cuadrada
  console.log(Math.sqrt(49));
  // .random() genera un numero aleatorio entre 0 y 1
  console.log(Math.random());
  console.log(Math.floor(Math.random()*10));

  // Obtener un numero aleatorio dentro de un rango
  var max = 20;
  var min = 10;
  console.log(Math.floor(Math.random() * (max - min)) + min);

})();
