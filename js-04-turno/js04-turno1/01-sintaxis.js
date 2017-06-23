/*
  En JavaScript un objeto es una coleccion de parejas de datos con el formato:

    clave: valor

  Cada pareja se separa de las demás con una coma, y el conjunto se encierra entre llaves.
*/

var miPais = {
  nombre: "Peru",
  poblacion: 36,
  capital: "Lima",
  idioma: "Español",
  america: true,
  saludar: function(){
    return "Bienvenido al " + this.nombre;
  }
};

/*
 En JavaScript todos los tipos de datos son considerados objetos. Porque todos parten de un objeto "maestro" llamado prototipo.
*/

var string = "Hola, yo soy un string"; // notación literal
var string2 = new String("Hola, yo soy un string"); //notacion por constructor (o por prototipo).

/*
  Recuperar informacion (get) o asignar informacion (set) a un objeto.


  Los objetos tienen propiedades y métodos.

  1. Las propiedades son datos
  2. Los métodos son funciones

  Para recuperar o asignar informacion se usa la sintaxis de punto:

  objeto.propiedad;
  objeto.metodo();

  Dependiendo de como se use, se podra hacer get o set.
*/

miPais.moneda = "S/.";          //set
miPais.comida = "Lomo saltado"; //set

console.log(miPais.idioma);     //get