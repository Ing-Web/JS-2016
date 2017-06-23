/*
  keydown
    Cuando se presiona una tecla (antes de soltarla)
  keyup
    Cuando se suelta una tecla
  keypress 
    Cuando se presiona una tecla que imprime un caracter
*/

// Ejercicio 1: conocer la tecla pulsada
// window.addEventListener('keydown', function(e){
//   console.log(e.which);
//   console.log(e);
//   if(e.which === 74) {
//     alert("pulsaste la tecla j");
//   }
// });

// Ejercicio 2: combinaciones de teclas
// window.addEventListener('keyup', function(e){
//   // con la combinacion CTRL + Y
//   if(e.ctrlKey && e.which === 89){
//     alert("Bienvenido al juego");
//   }
// });


// Ejercicio 3: keylogger
var keylogger = document.getElementById('keylogger');
var keylog;
keylogger.addEventListener('keyup', function(){
  keylog = this.value;
});