// innerHTML es un método que devuelve el HTML contenido 
// en un elemento. Pero también permite definir el HTML

var padre = document.getElementById('padre');
var hijo1 = document.getElementById('hijo1');
var hijo2 = document.getElementById('hijo2');


// Manipular CSS
// se usa la propiedad style seguida de la propiedad a modificar


var buttonRed = document.getElementById('red');
buttonRed.addEventListener('click', function(){
  document.body.classList.toggle('red');
});



// Clases
/*
  Los elementos tienen la propiedad classList que es un array que contiene a sus clases. Además, classList tiene tres 
  métodos:
    .add('clase')      -> añade la clase
    .remove('clase')   -> quita la clase
    .toggle('clase')   -> añade la clase (si no la tenia) y se la quita (si es que la tenia).
*/