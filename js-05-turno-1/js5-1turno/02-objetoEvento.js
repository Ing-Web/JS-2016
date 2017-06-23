/*
  Cada vez que se dispara un evento toda la información de este, se almacena en un objeto. Para acceder a ese objeto, basta con pasar un parámetro al handler. Este parametro puede tener cualquier nombre pero por lo general se le llama "event" o "e".
*/

var boton = document.getElementById('boton');

boton.addEventListener('click', function(e){
  console.log(e);
  console.log(e.target);
  console.log(this);
});


window.addEventListener('mousedown', function(e){
  //console.log(e.which); // saber que boton se pulsó
  if(e.which === 3){
    alert("Esta prohibido el click derecho en esta página");
  }
});

window.addEventListener('keyup',function(e){
  console.log(e.which); // saber que tecla se pulsó
});