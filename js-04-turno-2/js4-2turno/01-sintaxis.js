/*
  OBJETOS

  Son colecciones de datos en formato:

  clave: valor (key: value)

  separados por comas y encerrados entre llaves.
*/

var miMascota = {
  tipo: "perro",
  nombre: "Dino",
  color: "negro",
  ladrar: function(){
    return "Guau, guau";
  },
  llamar: function(){
    return this.nombre + ", ven aquí";
  }
};


/*
Los tipos de datos en JavaScript son objetos. Lo usual es definirlos de manera literal. 
*/

var cadena = "Yo soy un string literal"; //literal
var numero = 10; //literal
var cadena2 = new String("yo soy otro string"); //definido por constructor
var numero2 = new Number(20); //definido por constructor

/*
  Recuperar (get) o definir (set) informacion de un objeto.

  propiedad -> un dato del objeto
  método -> una función del objeto

  Se los llama con sintaxis de punto y el nombre de la clave.

  objeto.propiedad
  objeto.metodo()

  Sin embargo, la misma sintaxis de punto se puede utilizar para definir métodos o propiedades.
*/

console.log(miMascota.nombre);    //get
console.log(miMascota.color);     //get
console.log(miMascota.ladrar());  //get

miMascota.sexo = "macho";
miMascota.raza = "boxer";
miMascota.jugar = function(){
  return this.name + " está jugando";
};