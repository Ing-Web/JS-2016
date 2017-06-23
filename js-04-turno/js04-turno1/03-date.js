(function(){
  "use strict";
  /*
    Date es un objeto de JS que siempre
    debe ser instanciado con new.
  */

  var fecha = new Date();
  console.log(fecha);

  /*
    Para definir una fecha se pasan parámetros
    a Date() en el siguiente orden:
    year,mes (0 index), dia, hora, minuto, segundo
  */
  var miNacimiento = new Date(1980,1,4);
  console.log(miNacimiento);

  var lanzamientoED = new Date(2010,1,9);
  console.log(lanzamientoED);

  /*
    Métodos del objeto Date:

    .getfullYear()  // año
    .getDay() // dia (de 0, domingo a 6, sabado)
    .getDate()  // numero del dia en el mes
    .getMonth()  // el mes (0 index)
    .getTimezoneOffset() // obtener zona horaria
  */
  var miDiaDeNacimiento = miNacimiento.getDay();

  if(miDiaDeNacimiento === 1){
    miDiaDeNacimiento = "Lunes";
  }

  console.log(miDiaDeNacimiento);
  
  
})(); 