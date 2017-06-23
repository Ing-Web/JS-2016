/*
* El BOM es el modelo de objetos del navegador
* Todos los objetos del BOM parten de Window
*
*   window
*   window.location
*   window.navigator
*   window.screen
*   window.history
*
* */


/*
*   WINDOW
*
*   Propiedades
*     .innerWidth   -> devuelve al ancho del viewport
*     .innerHeight  -> devuelve el alto del viewport
*     .outerWidth   -> devuelve el ancho del navegador
*     .outerHeight  -> devuelve el alto del navegador
*     .pageXOffset  -> scroll en el eje X
*     .pageYOffset  -> scroll en el eje Y
*     .screenX (.screenLeft)
*     .screenY (.screenTop)
*         Indican la posicion de la ventana del navegador
*         respecto a la pantalla
*      .status      -> mensaje en la barra de estado
*      .statusbar   -> la barra de estado
*   Métodos
*     alert('string')  -> muestra un mensaje
*     prompt('string') -> pide información al usuario y la devuelve
*     confirm('string') -> hace una consulta al usuario y devuelve un boolean
*
*    Otros métodos
*
*       open('url') -> abre una nueva ventana
*       close()     -> cierra una ventana
*       moveTo()    -> mover la ventana
*       resizeTo()  -> redimensiona la ventana
*       scrollTo(x,y)  -> mueve el scroll a las coordenadas indicadas
*       scrollBy(x,y)  -> mueve el scroll a partir de su posicion actual
*       print()
*
*
* */


//var usuario = prompt('Escribe tu nombre');
//var usuarioEl = document.createElement('div');
//usuarioEl.textContent = 'Bienvenido ' + usuario;
//document.body.appendChild(usuarioEl);


var boton = document.getElementById('boton');

boton.addEventListener('click',function(){
  var myWindow = open('http://escuela.digital');
});
