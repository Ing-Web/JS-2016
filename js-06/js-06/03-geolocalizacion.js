/*
  GEOLOCALIZACION

  Se usa el objeto gelocation que es propiedad del objeto navigator.

  El objeto navigator.geolocation tiene tres métodos:

    getCurrentPosition() -> detecta la posicion actual
    watchPosition()      -> detecta la posicion actual y va actualizandola en el tiempo.
    clearWatch()         -> detiene watchPosition

  El método getCurrentPosition() requiere un argumento obligatorio:

  navigator.geolocation.getCurrenPosition(exito,error)

  exito -> function si se logra determinar la posicion (requerido)
  error -> function si no se logra determinar la posicion

  La funcion exito() recibe un parámetro que almacena los datos de la geolocalizacion en el objeto Position
*/

var miUbicacion = navigator.geolocation;
miUbicacion.getCurrentPosition(function(p){
  console.log(p.coords.latitude);
  console.log(p.coords.longitude);
});