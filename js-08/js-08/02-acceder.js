/*
  Acceder a elementos
  Tenemos dos formas:
    getElements     -> obtiene elementos por nombre, id, clase
    querySelector   -> obtiene elementos por selectores de css
*/

// var parrafo = document.getElementById('parrafo');
// var links = document.getElementsByTagName('a');
// var parrafos = document.getElementsByClassName('parrafo');


/*Con querySelector se puede usar cualquier selector 
válido de css. La única diferencia es que querySelector 
devuelve solo un elemento, y querySelectorAll devuelve
un array con todos los resultados*/

var parrafos = document.querySelectorAll('p');
//var primerParrafo = parrafos[0];

var primerParrafo = document.querySelector('p');
var parrafo = document.querySelector('#parrafo1');


/*

  ACCEDER A LOS ATRIBUTOS

  Tenemos dos formas:

  método    .getAttribute('atributo')
             devuelve el valor del atributo buscado
  propiedad .attributes
             devuelve un objeto con todos los atributos del elemento.

  Ambos se aplican a elementos.

*/

  console.log(parrafo.attributes);
  console.log(parrafo.getAttribute('id'));

/*

  ACCEDER A LOS NODOS TEXTO
  
  Dos formas: 
  propiedad .textContent
  propiedad .value  (para los elementos que tengan value como input,button,textarea,etc)

  Ambas propiedades devuelven el texto, sin embargo se pueden
  usar también para setear un nuevo texto.
*/