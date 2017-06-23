/*
* DESESTRUCTURACION
* Permite extraer valores de objetos y arrays y almacenarlos en variables
* fácilmente.
* */

var dias = ["lunes","martes","miercoles"];
var amigo = {
  nombre: "Jorge",
  edad: "40",
  pais: "España"
};

var [dia1,dia2,dia3] = dias;
var {nombre,edad,pais} = amigo;

/*
* Interpolación
* */

// forma antigua
//var saludar = (nombre) => "hola " + nombre;

// con interpolacion
var saludar = (nombre, pais) => `hola ${nombre}, bienvenido a ${pais}`;


/*
* For of (para recorrer arrays)
* */
var meses = ["enero","febrero","marzo","abril"];

for(let i in meses){
  console.log(meses[i]);
}

for(let mes of meses){
  console.log(mes);
}
