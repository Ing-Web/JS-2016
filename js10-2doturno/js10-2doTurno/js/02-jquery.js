/*
* jQuery
* Se seleccionan elementos del DOM con $('')
* Se pasa como parámetro cualquier selector CSS válido.
* Esta seleccion devuelve un objeto jQuery y los métodos de jQuery
* devuelven un objeto jQuery lo que permite encadenar métodos fácilmente.
* */

var button = $('button').css({
  background: "red",
  "font-size": "20px",
  border: "none"
});


function l(value){
  return console.log(value);
}


function id(value){
  if(document.getElementById(value) !== null) {
    return document.getElementById(value);
  }
}

l(button);
var miParrafo = id('parrafo');
l(miParrafo);
