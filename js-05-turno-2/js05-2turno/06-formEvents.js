/*
  EVENTOS DE FORMULARIOS

  focus
    Cuando se activa un campo
  blur
    Cuando se sale de un campo
  change
    Cuando se cambia el valor de un select, input o textarea
  submit
    Cuando se envia el formulario (este evento se asocia al formulario completo, no al input submit)
*/

// Ejercicio 1: detectar la opcion seleccionada
(function(){
  'use strict';
  var pais = document.getElementById('pais');
  pais.addEventListener('change', function(){
    console.log('Tu país es ' + this.value);
  });
})();

// Ejercicio 2: detectar si un checkbox o radio button se selecciona
(function(){
  'use strict';
  var check = document.getElementById('check');
  check.addEventListener('change', function(e){
    if(e.target.checked){
      alert("Gracias por suscribirte a nuestro newsletter");
    } else {
      alert("Lamentamos tu decision =(");
    }
  });
})();
