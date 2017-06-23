/*
  METODOS ESTATICOS

  Son métodos que no se pueden acceder ni modificar desde las instancias. Por lo cual se definen fuera del constructor.

*/

function Calculos(){

}
Calculos.piesAMetros = function(pies){
  return pies * 0.3048;
};

/*
  METODOS PUBLICOS

  Son funciones accesibles desde las instancias, se definen en el constructor usando this.

*/

function Persona(nombre){
  this.nombre = nombre;
  this.saludar = function(){
    return "Buenos días, me llamo " + this.nombre; 
  };
}

var jefe = new Persona("Hugo");


/*
  MÉTODOS PRIVADAS
  
  No son accesibles desde las instancias, por lo que la unica manera de invocarlos es usando un método público que los ejecute. Se definen usando function (no "this") dentro del
  constructor.

*/

function Auto(velocidad){
  this.velocidad = velocidad;
  var t = this;
  function acelerarPrivado(){
    t.velocidad++;
  }
  this.acelerarPublico = function(){
    acelerarPrivado();
    return this.velocidad;
  };
}

var miCarro = new Auto(10);


/*
  METODOS PRIVILEGIADOS

  Se llaman así a los métodos que hacen que desde las instancias se puedan acceder a propiedas privadas. Su uso más comun es crear getters y setters.
*/

function Player(){
  var points = 0;
  this.getPoints = function(){
    return points;
  };
  this.setPoints = function(value){
    points = value;
    return points;
  };
  this.addPoints = function(){
    points++;
    return points;
  };
  this.removePoints = function(){
    points--;
    return points;
  };
}

var apolo = new Player();
var goku = new Player();