/*
  Cuando se dispara un evento se produce un fenomeno llamado bubbling, que consiste en que el mismo evento se dispara en los ancestros en el DOM.

  Para evitarlo se usa el método stopPropagation() del objeto evento.
*/

var div = document.getElementById('container');
var boton = document.getElementById('container-button');

boton.addEventListener('click', function(e){
  console.log("Hiciste click en el boton");
  e.stopPropagation();
});

div.addEventListener('click', function(){
  console.log("Hiciste click en el div");
});



/*
Comportamiento por defecto del navegador

Para evitar el comportamiento por defecto se usa
el método preventDefault() del objeto evento.
*/


var ed = document.getElementById('ed');
ed.addEventListener('click', function(e){
  console.log("Yendo a la web de Escuela Digital");
  e.preventDefault();
});