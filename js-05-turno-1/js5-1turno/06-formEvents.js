/*
  focus
    cuando se activa un campo (con el mouse o con la tecla Tab) 
  blur 
    cuando se sale del campo
  change 
    cuando cambia el valor de un input, textarea o select
  submit
    cuando se envia el formulario (se asocia al formulario, no al boton submit)

*/


// Ejercicio 1, detectar la opcion escogida en un select

var selectPais = document.getElementById('pais');
selectPais.addEventListener('change', function(e){
  // console.log(e.target);
  // console.log(this);
  console.log('Tu pais es ' + this.value);
});

// Ejercicio 2: detectar si se activo un checkbox o radio button
var check = document.getElementById('check');
check.addEventListener('change', function(e){
  if(e.target.checked) {
    alert("Gracias por suscribirte a nuestro boletin");
  } else {
    alert("Lamentamos tu desicion =(");
  }
});