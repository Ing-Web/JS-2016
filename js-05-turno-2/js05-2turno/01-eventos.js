/*
  ¿QUE ES UN EVENTO?
  Todo lo que ocurre en la aplicacion/pagina web.
  Por ejemplo:
    * Que el usuario haga clic
    * Que el usuario reproduzca un video
    * Que el usuario haga scroll
    * Que la página cargue completamente

  Estos eventos son capturados por el navegador y con JavaScript se pueden escribir funciones que se ejecuten cuando estos se disparan.

  Todo evento está asociado a un elemento HTML. Sin embargo podria también asociarse al objeto global si es que no se asocia a ningun elemento.

  Para controlar los eventos se usa el método addEventListener con la siguiente sintaxis:

  elemento.addEventListener('evento',eventHandler);

  --> eventHandler es una función que se ejecuta cuando se dispará un evento.

  El eventHandler es ejecutado dentro de addEventListener, por lo que no requiere su invocación directamente.
*/

(function(){
  'use strict';
  var miAlerta = function(){
    alert("hiciste click");
  };
  //addEventListener('click',miAlerta); // asociado al objeto global
})();

// Ejercicio: boton que da la hora
(function(){
  'use strict';
  var botonHora = document.getElementById('hora');
  botonHora.addEventListener('click', function(){
    var fecha     = new Date(),
        hora      = fecha.getHours(),
        minutos   = fecha.getMinutes(),
        segundos  = fecha.getSeconds();
    alert("La hora actual es " +  hora + ":" + minutos + ":" + segundos);
  });
})();

// Ejercicio 2: obtener el tamaño de la ventana
(function(){
  addEventListener('resize', function(){
      var w = window.innerWidth,
      h = window.innerHeight;
      console.log('La ventana mide ' + w + ' x ' + h);
  });
})();