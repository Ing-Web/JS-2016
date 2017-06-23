"use strict";

// Parametros en ES6

// Valores por defecto
function saludar() {
  var nombre = arguments.length <= 0 || arguments[0] === undefined ? "anonimo" : arguments[0];

  return "Hola " + nombre;
}

// PARAMETROS SPREAD

// permiten pasar arrays que se cotejen con
// los parámetros
function sumar(a, b, c) {
  return a + b + c;
}

var miArray = [4, 5, 6];
var miSuma = sumar(1, 2, 3);
// se deben poner tres puntos delante del array
// para que coincidan sus elementos
// con los parámetros
var nuevaSuma = sumar.apply(undefined, miArray);
console.log(miSuma);
console.log(nuevaSuma);

// PARÁMETROS REST
// Consiste en pasar un número indeterminado
// de parámetros

function sumarElementos() {
  var suma = 0;

  for (var _len = arguments.length, elementos = Array(_len), _key = 0; _key < _len; _key++) {
    elementos[_key] = arguments[_key];
  }

  for (var i = 0; i < elementos.length; i++) {
    suma += elementos[i];
  }
  return suma;
}

console.log(sumarElementos(1, 2, 3, 4));