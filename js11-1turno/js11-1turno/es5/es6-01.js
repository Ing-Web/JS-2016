"use strict";

/*
* Variables y constantes en ES6
* */

// Las variables siguen existiendo
var numero = 5;

// Constantes (no se pueden sobreescribir):
var year = 2010;

// Variables de bloque (block-scope) que solo
// existen dentro de un bloque. Se declaran
// con let

for (var _i = 0; _i < 5; _i++) {
  console.log(_i);
}

// Este console.log devolverá undefined
// porque está fuera del bloque
// en el que se definió i
console.log(i);