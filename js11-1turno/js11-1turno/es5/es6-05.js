"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
* POO
* */

var Persona = function () {
  function Persona(nombre, apellido, edad, pais, sexo, casado) {
    _classCallCheck(this, Persona);

    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.pais = pais;
    this.sexo = sexo;
    this.casado = casado;
  }

  _createClass(Persona, [{
    key: "saludar",
    value: function saludar() {
      return "Hola, me llamo " + this.nombre + " " + this.apellido + ", tengo " + this.edad + " años y vivo en " + this.pais + ".";
    }
  }]);

  return Persona;
}();

var yo = new Persona("Alvaro", "Felipe", 36, "Peru", "m", true);

// herencia

var Empleado = function (_Persona) {
  _inherits(Empleado, _Persona);

  function Empleado(nombre, apellido, edad, pais, sexo, casado, cargo, empresa) {
    _classCallCheck(this, Empleado);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Empleado).call(this, nombre, apellido, edad, pais, sexo, casado));

    _this.cargo = cargo;
    _this.empresa = empresa;
    return _this;
  }

  _createClass(Empleado, [{
    key: "describirTrabajo",
    value: function describirTrabajo() {
      return "Trabajo como " + this.cargo + " en " + this.empresa + ".";
    }
  }]);

  return Empleado;
}(Persona);

var secretaria = new Empleado("Sandra", "Canales", 28, "Colombia", "F", false, "secretaria", "Facebook");