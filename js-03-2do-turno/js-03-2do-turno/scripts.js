/*
  FUNCIONES

  Son bloques de código reutilizables. La sintaxis es la siguiente:

    function nombreDeLaFuncion(){
      // codigo que se ejecutará
    }

  Cuando se declara una funcion esta se almacena en memoria. Pero, para ser ejecutada debe invocarse. Se usa el nombre de la funcion seguido del operador de ejecucion (dos parentesis):

    nombreDeLaFuncion();
*/

// function saludar(){
//   console.log("Hola mundo");
// }

// console.log(saludar);
// console.log(saludar());


/*
  Las funciones pueden tener parámetros. Los PARÁMETROS son valores con los que la función trabajará. Cuando se invoca a una función con parámetros deben pasarse valores reales para ellos. Estos valores reales se llaman ARGUMENTOS.
*/

// function multiplicar(a,b){
//   console.log(a*b);
// }

// function saludar(nombre){
//   console.log("Hola " + nombre);
// }

// multiplicar();
// multiplicar(2,3,4,5,1,2,3,34,4,5,6);
// saludar();

/*
  Si se pasa menos argumentos de los necesarios, los faltantes serán considerados "undefined".

  Si se pasan más argumentos, los sobrantes se ignoran. 

  Cada funcion posee internamente un objeto llamado "arguments" que es un pseudo array que contiene a los argumentos que se le han pasado.
*/


// function multiplicar(a,b){
//   console.log(a*b);
//   console.log(arguments[1]);
// }
// // multiplicar(2,3,4,5,6,7,8);

// function sumar(){
//   var suma = 0, i = 0, l = arguments.length;
//   while(i < l){
//     suma += arguments[i];
//     i++;
//   }
//   return suma;
// }
// var miSuma = sumar(40,12,34,43,546); // 675
// multiplicar(miSuma,5);

/*
  RETURN
  Toda funcion deberia devolver un valor.
  Explicitamente se usar return para indicar que valor devolverá la función.

  Return devuelve un valor (no una variable ni una funcion sino los valores que estas devuelven).

  Cuando se ejecuta return la funcion termina.
*/

// function multiplicar(a,b){
//   return a * b;
// }

// var miOperacion = multiplicar(3,6);


/*
  TIPOS DE FUNCIONES

  * Por su nombre
    Funciones nombradas
      function saludar(){
        console.log("Hola mundo");
      }
    Se invocan con su nombre: saludar()

    Funciones anónimas
      function(){
        console.log("Hola mundo");
      }
    Las funciones anónimas se ejecutan como callbacks (como parametro de otra), expresiones o autoejecutables.

  * Por su construccion
    Funciones por declaracion
      function saludar(){
        console.log("Hola mundo");
      }

      saludar();

    Funciones por expresion
      var saludar = function(){
        console.log("Hola mundo");
      };

      saludar();
*/

// function sumar(a,b){
//   // return a + b;
//   console.log(a+b);
// }

// sumar(5,2);

/*
  HOISTING (elevacion)

  Es el fenomeno por el cual el interprete eleva al primer lugar del scope a las variables. Aunque no eleva su valor.

  Tambien eleva las funciones por declaracion, pero no las funciones por expresion.

*/

// console.log(a);
// var a = "Hola";
// console.log(a);
// console.log("Me he ejecutado");

// saludar();
// var saludar = function(){
//   console.log("Hola mundo");
// };

// console.log("Me he ejecutado");

/*
  FUNCIONES AUTOEJECUTABLES

  Son funciones que no requieren ser invocadas posteriormente a su declaración ya que se invocan por si mismas. 

  En teoria una funcion podria autoejecutarse asi:

  function nombre(){}();

  pero esto da un error porque no es una expresion. Para convertir una funcion en expresion se encierra entre paréntesis. Y ahora si puede autoejecutarse de la siguiente manera:

  (function nombre(){})();

  Las funciones autoejecutables pueden ser nombradas o anonimas. Aunque es más frecuentes que las autoejecutables sean anonimas.
*/

// (function(nombre){
//   console.log("Hola " + nombre);
// })("Manuel");

/* SCOPE 

  El scope (o ámbito) es el contexto generado por una funcion y dentro del cual existen las variables que se hayan declarado dentro.

  Una variable es innaccesible desde fuera de su scope.

  Solo las funciones crean un scope en JavaScript.
*/

// for(var i =0; i < 5; i++){
//   console.log("Soy el numero " + (i+1));
// } 

// console.log(i);


// function saludar(){
//   var nombre = "Superman";
//   return nombre;
// }
// var miSaludo = saludar();
// console.log(miSaludo);
// console.log("me he ejecutado");


// var nombre = "Batman";
// (function nuevoNombre(){
//   nombre = "Superman";
//   return nombre;
// })();
// console.log(nombre);


/*
  Si dentro de una funcion se declara una variable sin la palabra "var" esta variable se convierte en global (no recomendado).
*/

var nombre = "Batman";

function pedirAyuda(){
  console.log("llamar a " + nombre);
  var nombre2 = "Superman";
  console.log("llamar a " + nombre2);
}

pedirAyuda();