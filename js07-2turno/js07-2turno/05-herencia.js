/*
  HERENCIA

  Se llama herencia a crear objetos a partir de otros heredando sus propiedades y métodos. O también crear clases a partir de otras. 

*/

function Mascota(nombre,color){
  this.nombre = nombre;
  this.color = color;
}

var fido = new Mascota("fido", "blanco");


// Quiero que el constructor Perro herede
// las propiedades nombre y color del constructor Mascota
function Perro(nombre,color,raza,edad){
  Mascota.call(this,nombre,color);
  this.raza = raza;
  this.edad = edad;
}

// Perro.prototype = new Mascota();
// Perro.prototype.constructor = Perro;

// leer: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Function/call

var duque = new Perro("duque","negro", "doberman",5);
var neron = new Perro("neron","marron","pastor aleman",4);

/*
  
  HERENCIAS POR OBJETOS LITERALES (SIN CONSTRUCTOR)

*/

var miMascota = {
  nombre : "",
  color: "",
  edad: 0,
  raza: "",
  init: function(nombre,color,edad,raza){
    this.nombre = nombre;
    this.color = color;
    this.edad = edad;
    this.raza = raza;
  }
};

var miPerro = Object.create(miMascota);
miPerro.init("fido","negro",5,"boxer");