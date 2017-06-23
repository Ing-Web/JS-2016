/*
* TIMERS
*
* Existen dos métodos del objeto Window para controlar
* la ejecución del código según el tiempo:
*
*   setTimeOut(funcion,delay)
*     funcion -> una función que contiene el código que se ejecutará.
*     delay   -> el tiempo en ms que pasará para que se ejecute la función
*
*   setInterval(funcion,interval)
*     funcion -> una función que contiene el código que se ejecutará.
*     interval -> el tiempo que pasa para que la funcion se ejecute nuevamente
* */

//(function(){
//  'use strict';
//  setTimeout(function(){
//    console.log("Han pasado 5 segundos")
//  }, 5000);
//})();


//var contador = 0;


//var myInterval = setInterval(function(){
//  console.log("Me ejecuto cada segundo");
//  contador++;
//  console.log(contador);
//  if (contador == 5){
//    clearInterval(myInterval);
//  }
//  console.log("sigo aqui");
//},1000);


var reloj = document.getElementById('reloj');
var getHour = function(){
  var fecha = new Date();
  var horas = fecha.getHours();
  var minutos = fecha.getMinutes();
  var segundos = fecha.getSeconds();
  if(segundos < 10){
    segundos = '0' + segundos;
  }
  reloj.textContent = horas + ':' + minutos + ':' + segundos;
};
setInterval(getHour,1000);
