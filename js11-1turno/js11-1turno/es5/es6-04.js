"use strict";

/*
* DESESTRUCTURACION
* Permite extraer valores de objetos y arrays y almacenarlos en variables
* fácilmente.
* */

var dias = ["lunes", "martes", "miercoles"];
var amigo = {
  nombre: "Jorge",
  edad: "40",
  pais: "España"
};

var dia1 = dias[0];
var dia2 = dias[1];
var dia3 = dias[2];
var nombre = amigo.nombre;
var edad = amigo.edad;
var pais = amigo.pais;

/*
* Interpolación
* */

// forma antigua
//var saludar = (nombre) => "hola " + nombre;

// con interpolacion

var saludar = function saludar(nombre, pais) {
  return "hola " + nombre + ", bienvenido a " + pais;
};

/*
* For of (para recorrer arrays)
* */
var meses = ["enero", "febrero", "marzo", "abril"];

for (var i in meses) {
  console.log(meses[i]);
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = meses[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var mes = _step.value;

    console.log(mes);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}