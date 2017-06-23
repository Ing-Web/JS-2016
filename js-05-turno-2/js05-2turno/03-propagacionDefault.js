/*
  PROPAGACION DE EVENTOS

  Significa que cuando un evento ocurre, también ocurre en todos sus ancestros hasta llegar al document.

  El método .stopPropagation() del objeto evento detiene la propagacion.

*/

(function(){
  'use strict';
  var container = document.getElementById('container'),
      boton = document.getElementById('button');
  boton.addEventListener('click', function(e){
    console.log("Hiciste click en el boton");
    e.stopPropagation();
  });
  container.addEventListener('click', function(){
    console.log("Hiciste click en el container");
  });
})();

/*
  Prevent Default

  Los navegadores tienen un comportamiento predeterminado para ciertos eventos. Por ejemplo, ir a un recurso cuando se hace clic, o mover el scroll cuando se pulsan las flechas del teclado.

  El método preventDefault() del objeto evento cancela el comportamiento predeterminado del navegador.

*/

(function(){
  'use strict';
  var ed = document.getElementById('ED');
  ed.addEventListener('click', function(e){
    console.log("Serás dirigido a la página de Escuela Digital");
    e.preventDefault();
  });
})();