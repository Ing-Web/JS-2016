/*
* Location da información sobre la URL, y devuelve
* lo siguiente
*
*   .href   -> url completa
*   .hash   -> devuelve el hash
*   .host   -> devuelve la info del host
*   .protocol -> devuelve el protocolo
*   .port     -> devuelve el puerto
*
*   Métodos:
*
*   assign('url')  -> redirecciona hacia la URL
*   replace('url') -> redirecciona limpiando el historial
*
* */


(function(){
  var navigate = document.getElementById('navigate');
  navigate.addEventListener('change',function(){
    var destino = this.value + '.html';
    location.href += destino;
  });
})();
