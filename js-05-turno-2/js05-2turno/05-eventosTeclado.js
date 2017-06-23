/*
    EVENTOS DE TECLADO

    keydown
      cuando se pulsa una tecla (antes de soltarla)
    keyup
      cuando se suelta una tecla
    keypress
      cuando se pulsa una tecla que imprime un caracter
*/

// Ejercicio 1: saber qué tecla se ha pulsado

// (function(){
//   'use strict';
//   addEventListener('keydown', function(e){
//     console.log(e);
//     // a es 65, b es 66...
//     switch (e.which) {
//       case 65:
//         console.log("Presionaste la tecla A");
//         break;
//       case 66:
//         console.log("Presionaste la tecla B");
//         break;
//       case 67:
//         console.log("Presionaste la tecla C");
//         break;
//       default:
//         // statements_def
//         break;
//     }
//   });
// })();


// Ejercicio 2: atajos de teclado de dos teclas

// (function(){
//   'use strict';
//   addEventListener('keydown', function(e){
//     // console.log(e.which);
//     if(e.ctrlKey === true && e.altKey === true && e.which === 89){
//       alert("Bienvenido al juego");
//     }
//   });
// })();


// Ejercicio 3: keylogger

(function(){
  'use strict';
  var keylogger = document.getElementById('keylogger');
  var keylog = "";
  keylogger.addEventListener('keyup', function(){
    keylog = this.value;
    console.log(keylog);
  });
})();