/*
  EVENTOS DE MOUSE
  
  * mousedown
      al pulsar cualquier boton (antes de ser soltado)
  * mouseup
      cuando se suelta cualquier boton
  * click
      cuando se pulsa el boton izquierdo
  * dblclick
      cuando se pulsa dos veces el boton izquierdo
  * mousemove
      cuando se mueve el mouse
  * mouseenter
      cuando el mouse entra el area del elemento del que se esta escuchando el evento
  * mouseleave
      cuando el mouse sale del area del elemento del que se esta escuchando el evento
*/

var dibujar = function(e){
  var punto = document.createElement('div');
  punto.classList.add('punto');
  punto.style.left = (e.pageX - 6) + "px";
  punto.style.top = (e.pageY - 6) + "px";
  document.body.appendChild(punto);
};

window.addEventListener('mousedown', function(){
  addEventListener('mousemove', dibujar);
  addEventListener('mouseup', function(){
    removeEventListener('mousemove', dibujar);
  });
});





// window.addEventListener('mousemove', function(e){
//   console.log(e.pageX + " " + e.pageY);
// });