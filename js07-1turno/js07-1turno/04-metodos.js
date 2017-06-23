/*
  METODOS ESTATICOS

  Similar a las propiedades estáticas, se crean fuera del constructor y no son accesible ni modificables por las instancias. Solo se pueden llamar con el constructor.

*/


function Calculos(){

}

Calculos.piesAMetros = function(pies){
  return pies * 0.3048;
};

var miCalculo = new Calculos();


/*
  METODOS PUBLICOS

  Similar a las propiedades estáticas, se crean dentro del constructor usando this. Y son accesibles desde las instancias.

*/

function Mascota(nombre){
  this.llamar = function(){
      return nombre + ", ven aqui";
  };
}
var fido = new Mascota("fido");


/*
  METODOS PRIVADOS

  Se declaran dentro del constructor sin el uso de this

*/

function Auto(velocidad){
  this.velocidad = velocidad;
  var _this = this;
  function acelerarPrivado(){
    _this.velocidad++;
  }
  this.acelerarPublico = function(){
      acelerarPrivado();
      return this.velocidad;
  };
}

var miCarro = new Auto(10);


/*
  METODOS PRIVILEGIADOS

  Son métodos que permiten acceder a variables privadas
  (propiedades privadas) para recuperar (get) o definir
  (set) sus valores. 

  Se usan para crear getters y setters 

*/


function Player(){
  var points = 0;
  this.getPoints = function(){
    return points;
  };
  this.setPoints = function(newPoints){
    points = newPoints;  
    return points;  
  };
  this.addPoints = function(){
    points++;
    return points;
  };
}

var jorge = new Player();