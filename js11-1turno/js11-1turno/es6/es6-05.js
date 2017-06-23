/*
* POO
* */

class Persona {
  constructor(nombre,apellido,edad,pais,sexo,casado){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.pais= pais;
    this.sexo = sexo;
    this.casado = casado;
  }
  saludar(){
    return  `Hola, me llamo ${this.nombre} ${this.apellido}, tengo ${this.edad} años y vivo en ${this.pais}.`;
  }
}

var yo = new Persona("Alvaro", "Felipe", 36, "Peru", "m", true);


// herencia

class Empleado extends Persona {
  constructor(nombre,apellido,edad,pais,sexo,casado,cargo,empresa){
    super(nombre,apellido,edad,pais,sexo,casado);
    this.cargo = cargo;
    this.empresa = empresa;
  }
  describirTrabajo(){
    return `Trabajo como ${this.cargo} en ${this.empresa}.`;
  }
}

var secretaria = new Empleado("Sandra","Canales",28,"Colombia","F",false,"secretaria","Facebook");
