//var i = 0;
//for(i; i < 10; i++){
//  console.log(i);
//}
//
//var semana = ['domingo', 'lunes', 'martes', 'miercoles'];
//for(var dia in semana){
//  var diaActual = semana[dia];
//  console.log(diaActual);
//}

//var button = document.getElementById('button');
//var contador = 0;
//button.addEventListener('click',function(){
//  var _this = this;
//  contador++;
//  (function(){
//    _this.textContent = 'Hiciste click ' + contador + ' veces';
//  })();
//});


var input = document.getElementById('input');
var parrafo = document.getElementById('parrafo');
input.addEventListener('keydown',function(){
  parrafo.textContent = this.value;
});


// Se pueden pasar más de un valor a la consola
console.log(input, parrafo);

// console.dir muestra toda la información del objeto
console.dir(input);


var familias = [
  ["Juancito", "Claudia", "Martin"],
  ["Aldo", "Carmen", "Vanesa"],
  ["Alejandro","Maria","Roberto" , "Gabriela"]
];

console.log(familias);
console.table(familias);


function Pais(nombre,capital,moneda){
  this.nombre = nombre;
  this.capital = capital;
  this.moneda = moneda;
}

var paises = {};
paises.colombia = new Pais("Colombia","Bogotá","Peso colombiano");
paises.argentina = new Pais("Argentina", "Buenos Aires", "Peso argentino");
paises.peru = new Pais("Peru", "Lima", "Nuevo sol");
paises.bolivia = new Pais("Bolivia", "La Paz", "Boliviano");

console.log(paises);
console.table(paises);
