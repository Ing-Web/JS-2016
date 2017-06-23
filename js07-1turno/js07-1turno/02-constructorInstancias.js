/*
  CONSTRUCTOR

  Es una función que contiene los métodos y propiedades
  del objeto. A partir del constructor se instancian
  los nuevos objetos. Por convencion, su nombre debe
  comenzar en mayúscula.

*/

function Persona(){
  this.nombre = "Luis";
  this.apellido = "Perez";
  this.nombreCompleto = this.nombre + " " + this.apellido;
  this.edad = 30;
}

function Pais(nombre,capital,idioma,moneda){
  this.nombre = nombre;
  this.capital = capital;
  this.idioma = idioma;
  this.moneda = moneda;this.saludo = "Bienvenido a " + this.nombre;
}

var amigo = new Persona();
console.log(amigo);

var spain = new Pais("España", "Madrid", "Español", "Euro");
var colombia = new Pais("Colombia", "Bogotá", "Español", "Peso colombiano");

colombia.musica = "vallenato";

console.log(spain.saludo);
console.log(colombia.saludo);