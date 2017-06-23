/*
  FECHAS EN JAVASCRIPT

  Para manejar fecha se utiliza el objeto Date que debe instanciarse cada vez que se requiera utilizarlo.

*/

(function(){
  "use strict";
  var fecha = new Date();
  var dia = fecha.getDay();
  // console.log(fecha);

  if(dia === 1){
    dia = "lunes";
  }

  console.log(dia);



  // Para especificar fechas se pueden 
  // pasar parámetros en el siguiente orden
  // año / mes (0 index) / dia / hora / minuto / segundo
  // var miNacimiento = new Date(1980,1,4);
  // console.log(miNacimiento);


  // Metodos para trabajar con fechas
    // .getFullYear()   --> año
    // .getDay()  --> dia de la semana (0, domingo a 6, sabado)
    // .getDate()
    // .getMonth()

    // console.log(miNacimiento.getFullYear());
    // console.log(miNacimiento.getMonth());
    // console.log(miNacimiento.getDate());
    // console.log(miNacimiento.getDay());


})();