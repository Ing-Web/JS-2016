// Arrow functions (funciones de flecha)
// Es una nueva sintaxis para funciones anónimas
// Su sintaxis es la siguiente
//    Los parámetros se pasan entre paréntesis
//    Antes de la flecha (se omiten si es un solo
//    parámetro). Si la funcion no recibe
//    parámetros se escriben los paréntesis vacios

var miFuncion = () => {console.log("soy una funcion de flecha")};

/*
* Si la funcion retorna un valor,
* este se escribe despues de la flecha
* sin usar return
* */

var suma = (a,b) => a + b;

/*
* Si no quieres retornar un valor o vas a escribir
* varias lineas de código, después de la flecha
* abres y cierras llaves
* */

var saludar = () => {
  var nombre = "Juan";
  return "Hola " + nombre;
};


/*
* Si se devuelve un objeto directamente, se indica
* entre paréntesis despues de la flecha
* */

var persona = (nombre,apellido) => ({
  nombre: nombre,
  apellido: apellido
});

var andrea = persona('Andrea','Ramirez');
console.log(andrea);

/*
* Si se usa un solo parámetro no se necesitan los
* paréntesis antes de la flecha
* */

var bienvenido = pais => "Bienvenido a " + pais;
console.log(bienvenido('Costa Rica'));


/*
* Lexical this
* */

function Persona(){
  this.edad = 0;
  setInterval(() => {this.edad++},2000);
  this.getEdad = () => this.edad;
}

var yo = new Persona();
