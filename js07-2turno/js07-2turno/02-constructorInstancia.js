/*
  La clase es la "plantilla" a partir de la cual se instancian
  otros objetos.

  Sin embargo, JavaScript no posee clases, por lo que la POO se consigue a través de constructores y prototipos. ES6 ya incorpora clases.

  En JS un constructor es una función. Existen constructores nativos del lenguaje. Ej.

  var fecha = new Date();

  Pero tambien podemos crear los nuestros, y basta crear una funcion. Por convencion el nombre de la funcion constructora (o constructor) debe comenzar en mayuscula.
*/

function Pais(){

}

/*
  Los constructores a pesar de ser funciones no están hechos para
  ser invocados, sino para crear objetos instanciandolos con el operador new.

*/

var argentina = new Pais();
argentina.capital = "Buenos Aires";

var panama = new Pais();
panama.capital = "Panamá";

/*
  Para añadir propiedades y métodos en un constructor se usa this.
  Puesto que this referencia a la instancia creada

*/

function Comida(){
  this.nombre = "Ceviche";
  this.pais = "Peru";
  this.insumo = "Pescado";
}

var ceviche = new Comida();
var tamales = new Comida();

/*
  El constructor anterior no es muy util porque siempre pasa
  los mismos valores para todas las instancias
*/


function Persona(nombre,apellido,edad){
  var hora = new Date().getHours();
  this.nombre = nombre;
  this.apellido = apellido;
  this.nombreCompleto = this.nombre + " " + this.apellido;
  this.edad = edad;
  this.saludar = function(){
    var saludo = "Buenos días";
    if(hora > 12 && hora < 19){
      saludo = "Buenas tardes";
    } else if(hora >= 19){
      saludo = "Buenas noches";
    }
    return saludo + ", me llamo " + this.nombreCompleto + " y mi edad es " + this.edad;
  };
}

var juan = new Persona('Juan','Fernandez', 30);
var pamela = new Persona('Pamela','Rodriguez',25);
var alvaro = new Persona('Alvaro', 'Felipe', 36);