/*
  THIS

  This es una palabra "comodin" en JavaScript que siempre hace referencia a un objeto. Y el objeto al que hace referencia depende de las circunstancias.

  STRICT MODE
  
  Es una característica de JavaScript habilitada desde ES5. Cuando se habilita el interprete lanza errores y ayuda en el debug.

*/

(function(){
  "use strict";
  console.log(this);
})();

/*
  Dentro de una funcion, this devuelve undefined si se usó "use strict", y devuelve
  el objeto global (window) si no se usa "use strict".
*/

/*
Si se usa this dentro de un método de un objeto, this hace referencia a este objeto.
*/

var miMascota = {
  nombre: "Pluto",
  llamar: function(){
    return this.nombre + ", ven aquí";
    }
  };

/*
  Si this está dentro de un event handler, this apunta al elemento que dispara el evento. 
*/

var boton = document.getElementById("boton");
boton.addEventListener('click', function(){
  alert(this.textContent);
});


/*
  Si this está dentro de un constructor, se referirá al objeto instanciado.
*/

function Persona(parametroNombre, parametroEdad){
  this.apodo = parametroNombre;
  this.edad = parametroEdad;
}

var alumno = new Persona("Martin",20);
var amigo = new Persona("Carlos",15);
var hermano = new Persona("Pepe",30);

