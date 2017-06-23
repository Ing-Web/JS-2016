/*
  EVENTOS DE MOUSE

  mousedown
    cuando se pulsa un botón (antes de soltarlo)
  mouseup
    cuando se suelta un botón
  click 
    cuando se pulsa el botón izquierdo
  dblclick
    cuando se pulsa dos veces el boton izquierdo
  mousemove
    cuando se mueve el mouse
  mouseenter
    cuando el mouse entra en el area del elemento
  mouseleave
    cuando el mouse sale del area del elemento

*/

// Ejercicio: programa de dibujo

(function(){
  'use strict';
  var dibujar = function(e){
    var punto = document.createElement('div');
    punto.classList.add('punto');
    punto.style.left = (e.pageX - 10) + 'px';
    punto.style.top = (e.pageY - 10) + 'px';
    punto.style.background = 'tomato';
    document.body.appendChild(punto);
  };
  addEventListener('mousedown', function(){
    addEventListener('mousemove', dibujar);
    addEventListener('mouseup', function(){
        removeEventListener('mousemove', dibujar);
    });
  });
})();