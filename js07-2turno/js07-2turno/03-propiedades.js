/*
  PROPIEDADES ESTÁTICAS

  Son aquellas que almacenan un valor estático, y no son 
  accesibles ni modificables desde las instancias. Se crean
  por fuera del constructor.

*/

  function Mascota(nombre){
    this.nombre = nombre;
  }
  Mascota.propiedadEstatica = "Esta es una propiedad estatica";
  var miPerro = new Mascota("duque");

  // Ejemplo de propiedad estática
  var pi = Math.PI;

  function EscuelaDigital(){
  }
  EscuelaDigital.anioCreacion = 2010;

  /*
    PROPIEDADES PUBLICAS

    Son accesibles y modificables desde las instancias. Se definen
    dentro del constructor usando "this" (esta palabra apunta a la instancia).
  */

  function Pais(nombre, capital, idioma){
    this.nombre = nombre;
    this.capital = capital;
    this.idioma = idioma;
  }

  var mexico = new Pais('México','México', 'español');
  var alemania = new Pais('Alemania', 'Berlín', 'alemán');
  alemania.nombre = "Germany";


  /*
    PROPIEDADES PRIVADAS

    Las que no se pueden acceder desde afuera. Se usa el scope de la funcion constructora para este fin.

  */

  function Mascota(){
    var nombre = "Fido";
    this.llamar = function(){
      return nombre + ", ven aquí";
    };
  }

  var miPerro = new Mascota();