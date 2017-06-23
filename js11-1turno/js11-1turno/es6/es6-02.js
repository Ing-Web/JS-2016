// Parametros en ES6

// Valores por defecto
function saludar(nombre = "anonimo"){
  return "Hola " + nombre;
}

// PARAMETROS SPREAD

// permiten pasar arrays que se cotejen con
// los parámetros
function sumar(a,b,c){
  return a + b + c;
}

var miArray = [4,5,6];
var miSuma = sumar(1,2,3);
// se deben poner tres puntos delante del array
// para que coincidan sus elementos
// con los parámetros
var nuevaSuma = sumar(...miArray);
console.log(miSuma);
console.log(nuevaSuma);


// PARÁMETROS REST
// Consiste en pasar un número indeterminado
// de parámetros

function sumarElementos(...elementos){
  var suma = 0;
  for(let i= 0; i <elementos.length; i++){
    suma += elementos[i];
  }
  return suma;
}

console.log(sumarElementos(1,2,3,4));
