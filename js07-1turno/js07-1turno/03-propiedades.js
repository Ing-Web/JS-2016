/*
  PROPIEDAD ESTÁTICA

  Son las que existen solamente dentro del constructor y no
  son accesibles ni modificables por fuera de él.
  Se crean por fuera del constructor y al no usar this no
  son accesibles desde la instancia.
*/


function Pais(nombre,capital) {
  this.nombre = nombre; 
  this.capital = capital;
}

Pais.propiedadEstatica = "Yo estoy fuera de las instancias";

var mexico = new Pais("méxico","méxico");

/*
  PROPIEDADES PUBLICAS

  Son accesibles y modificables en las instancias. Se 
  declaran dentro del constructor con this.

*/

function Persona(nombre){
  this.nombre = nombre;
  this.saludar = function(){
    return "Bienvenido " + this.nombre;
  };
}

var amigo = new Persona("Jorge");
amigo.nombre = "Carlos";


/*
  PROPIEDADES PRIVADAS

  Se basan en el scope del constructor para no ser accesibles desde afuera.

*/

function Mascota(){
  var nombre = "Fido";
  this.llamar = function(){
    return nombre + ", ven aquí";
  };
}

var fido = new Mascota();