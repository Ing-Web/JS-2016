/*
  ¿QUÉ ES UN EVENTO?

  Todo lo que ocurre en la aplicación y que el navegador captura.
  Ejemplos:
    * Cuando termina de cargar la pagina
    * Cuando salimos de la pagina
    * Cuando se hace click
    * Cuando se hace scroll
    * Cuando se presiona una tecla
    * Cuando se redimensiona la ventana
    * etc.

  Todo evento esta asociado a un elemento HTML. Sin embargo, si no se asocia a ningun elemento estaría vinculado al objeto global.

  JS tiene el método addEventListener() que escucha los eventos que ocurren.

  Su sintaxis es la siguiente:

  elemento.addEventListener('evento',eventHandler);

  ¿Que es un Event Handler?

  Es una función que se ejecuta cuando se dispara un evento.

*/

// El siguiente evento está asignado al
// objeto global
var logClick = function(){
  console.log("hiciste click");
};

// addEventListener('click', function(){
//   console.log('Hiciste click');
// });

// addEventListener('click', logClick);

var boton = document.getElementById('boton');
boton.addEventListener('click', logClick);


// Dar la hora al pulsar el boton hora
var hora = document.getElementById('hora');
var dameHora = function(){
  var fecha     = new Date(),
      hora      = fecha.getHours(),
      minutos   = fecha.getMinutes(),
      segundos  = fecha.getSeconds();
  alert("Son las " + hora + ":" + minutos + ":" +segundos);
};
hora.addEventListener('click', dameHora);

// Obtener el tamaño de la ventana
window.addEventListener('resize', function(){
  var w = window.innerWidth;
  var h = window.innerHeight;
  console.log("La ventana es de " + w + " x " + h);
});

// Eventos al cargar la pagina
// load (del objeto global)
// DOMContentLoaded (de document)