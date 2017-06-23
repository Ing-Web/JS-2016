/*
  STRICT MODE

  Se activa añadiendo el string "use strict" en 
  la primera linea del scope (se recomienda)
  que sea dentro de una función.

*/

// function saludar(){
//   "use strict";
//   var nombre = "José";
//   return "Hola, " + nombre;
// }
// saludar();
// console.log("Me he ejecutado");


/*
  THIS es una palabra que apunta a un objeto. Y devolverá valores diferentes segun las circunstancias.
*/

/*
 CASO 1: THIS DENTRO DE UNA FUNCIÓN 

 Si no se usa "use strict" devuelve el objeto global (window). Si se usa "use stric" devuelve
 undefined.
*/

(function test(){
  "use strict";
  console.log(this);
})();


/*
  CASO 2: THIS DENTRO DE UN MÉTODO

  En este caso, this se refiere al objeto.
*/

var persona = {
  nombre: "Carmen",
  edad: 25,
  saludar: function(){
    return "Hola, me llamo " + this.nombre + " y tengo " + this.edad + " años.";
  }
};


/*
  CASO 3: THIS DENTRO DE UN EVENT HANDLER

  En este caso, this referencia al elemento HTML que disparó el evento.

*/

var boton = document.getElementById("boton");

// boton.addEventListener('click',function(){
//   alert(this.textContent);
// });

/*
  CASO 4: THIS DENTRO DE UN CONSTRUCTOR

  Un constructor es una funcion que define la estructura de un objeto y a partir de la cual se crean otros objetos (se instancian).

  En este caso, this se refiere al objeto instanciado.
*/

function Persona(nombrePersona, edadPersona){
  this.nombre = nombrePersona;
  this.edad = edadPersona;
}

var miAmigo = new Persona("Luis", 30);
var miHermano = new Persona("Carlos",27);
var miNovia = new Persona("Vanesa", 32);