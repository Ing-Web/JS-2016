/*
  OBJETOS
    En programación, los objetos son "abstracciones" de los objetos del mundo real. Es decir, poseen características (como el tamaño, color, peso, etc) y funciones (para qué sirven o qué hacen los objetos).

    Las características de un objeto se llaman propiedades y las
    funciones de un objeto se llaman métodos.

  POO (Programación orientada a objetos)
    Es un paradigma de programación que consiste en encapsular las funciones en objetos que luego pueden instanciarse para
    reutilizarlas.

  CLASE
    La clase es una "plantilla" desde la cual se crean (se instancian) los demás objetos (aprovechando su estructura).

  INSTANCIA
    Es un objeto creado a partir de una clase.

  HERENCIA
    Es crear un objeto que herede propiedades y métodos de otro.

  CONSTRUCTOR
    Es la función que permite instanciar objetos a partir de una clase.

  PROTOTIPO
    Es un objeto base a partir del cual están creados los demás

*/


/*
  REPASO DE OBJETOS EN JAVASCRIPT

  Los objetos son conjuntos estructurados de datos, que se agrupan en pares. Cada par se llama propiedad y tiene la siguiente estructura:

    clave: valor,

  Y todas las propiedades se encierran entre llaves.

  var miObjeto = {
    clave1: valor1,             // propiedad
    clave2: valor2,             // propiedad
    clave3: valor3,             // propiedad
    clave4: function(){         // propiedad (método)
      // codigo de la funcion 
    }
  }

  Cuando el valor de una propiedad es una función, hablamos de
  método.

*/

/*
  LITERALES Y CONSTRUCTORES

  En JS, los tipos de datos datos pueden indicarse como literales o con constructor (no es recomendable usar constructores para
  tipos de datos primitivos).
*/

var string = "Hola mundo";
var string2 = new String("Adios mundo");
String.prototype.miPropiedadSecreta = "Yo soy una propiedad secreta";

/*
  El prototype es el objeto del cual todos los demás objetos heredan sus propiedades y métodos.
*/
