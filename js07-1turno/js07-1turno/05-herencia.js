/*
  HERENCIA

  Significa crear un objeto a partir de otro heredando propiedades y métodos.

*/

function Mascota(nombre, color){
  this.nombre = nombre;
  this.color = color;
}

var fido = new Mascota("Fido");
var dino = new Mascota("Dino");

// Se añade la propiedad edad al prototipo
Mascota.prototype.edad = 5;

// Aunque la propiedad edad no exista en las instancias
// si es accesible desde ellas porque esta en el prototipo
console.log(fido.edad);
console.log(dino.edad);

// Creamos un nuevo constructor que debe heredar
// las propiedades de Mascota
function Perro(nombre,color){
  // obtenemos los parámetros de Mascota
  // El primer parametro (this) se refiere a este constructor
  Mascota.prototype.constructor.call(this,nombre,color);
}

// El prototype de Perro es una instancia de Mascota
// asi puede heredar de ella
Perro.prototype = new Mascota();

// Se regresa el constructor original ya que en la
// instruccion anterior, el constructor se sobreescribió
Perro.prototype.constructor = Perro;


// duque es una instancia de Perro, pero Perro ha heredado
// las propiedades de Mascota
var duque = new Perro("duque","negro");


/*
  HERENCIA CON OBJETO LITERAL

*/

  var miMascota = {
    nombre: '',
    edad: 0,
    init: function(nombre, edad){
      this.nombre = nombre;
      this.edad = edad;
    }
  };

  var miPerro = Object.create(miMascota);