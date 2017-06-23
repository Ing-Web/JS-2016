/*
  EL OBJETO EVENTO

  Es un objeto que contiene toda la información relativa a un evento especifico. Si queremos acceder a este objeto, basta pasar un parámetro al event handler. Este puede llamarse de cualquier manera pero se acostumbra llamarle "event" o "e".
*/

(function(){
  'use strict';
  var boton = document.getElementById('hora');
  boton.addEventListener('click', function(event){
    console.log(event);
    console.log(event.target);
    console.log(this);
  });
})();

// Ejercicio: bloquear clic derecho de la pagina
(function(){
  'use strict';
  window.addEventListener('mousedown', function(e){
    console.log(e.which); // devuelve el código del boton pulsado
    if(e.which === 3) {
      alert("Esta prohibido copiar contenido de esta página");
    }
    e.preventDefault();
  });
})();