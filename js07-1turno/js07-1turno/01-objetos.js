/*
  REPASO

  Los objetos son conjuntos estructurados de datos separados por comas y encerrados entre llaves. Cada dato se conoce como 
  propiedad y tiene una estructura de clave : valor.

  La clave es el nombre de la propiedad y el valor es un tipo de dato (string,numero,boolean,array,objeto,function) que viene a ser el valor de la propiedad.

  Cuando el valor de una propiedad es una funcion, hablamos de
  un método.
*/

var auto = {
 marca           : "Toyota",     // propiedad marca
 year            : 2015,         // propiedad year
 color           : "red",        // propiedad color
 dobleTraccion   : true,         // propiedad dobleTraccion
 velocidad       : 0,            // propiedad velocidad
 acelerar        : function(){   // propiedad acelerar (método)
  this.velocidad++;
 }
};


/*
  CONCEPTOS DE LA PROGRAMACIÓN ORIENTADA A OBJETOS

  OBJETO
    Una abstraccion de los objetos del mundo real que tienen
    caracteristicas (propiedades) como el color, el tamaño,
    el peso, etc; y también utilidad (métodos), es decir, para
    qué sirven, cual es su funcion.

  CLASE
    Es la "plantilla" a partir de la cual se crean los objetos.
    Esta plantilla, ayuda a no tener que repetir la estructura
    cada vez que se crea un objeto.

  HERENCIA
    Ocurre cuando un objeto hereda propiedades y métodos de otro.

  INSTANCIA
      Cada objeto creado a partir de una clase. Esta creación se
      conoce como "instanciación".

  CONSTRUCTOR
      Es una función que permite construir (instanciar) un objeto a partir de una clase.
*/


/*
  JavaScript no posee clases, entonces se emula las clases a 
  traves de una función que es llamada función constructora o
  simplemente constructor.

  Para instanciar las clases se usa el operador new.
*/

//Ejemplo (fecha1 y fecha2 son instancias de Date);
var fecha = new Date();
console.log(fecha.getMinutes());
var fecha2 = new Date();
console.log(fecha2.getDay());

// Ejemplo 2, todos los tipos de datos poseen constructores
// aunque no es recomendable usarlos, sino declararlos
// como literales (escribiendo sus valores).

var string = new String('Hola mundo');
var numero = new Number(10);
var array = new Array(1,2,3);

// Cuando se instancia un objeto a partir de un constructor
// se puede saber quien es su constructor con la propiedad
// .constructor

console.log(array.constructor);
 // function Array() { [native code] }


 // Cada objeto tiene un prototype que define las propiedades
 // y métodos base

 console.log(string.miPropiedad);
 String.prototype.miPropiedad = "Esta es mi propiedad";

 console.log(string.miPropiedad);
 var nuevoString = "Soy un nuevo string";
 console.log(nuevoString.miPropiedad);
