// document.createElement('element') crea un elemento

var div = document.createElement('div');
div.textContent = "Este es un div nuevo ";
div.id = "myDiv";

var link = document.createElement('a');
link.textContent = "Ir a Escuela Digital";
link.href = "http://escuela.digital";
link.target = "_blank";

// Para insertar elementos usamos el método .appendChild()
// Este método se aplica al elemento padre y recibe como
// parametro un elemento.
// Este método inserta el elemento al final del padre

// document.body.appendChild(div);
// div.appendChild(link);

// Eliminar elementos
// se usa el método padre.removeChild(hijo);

var padre = document.getElementById('padre');
var hijo1 = document.getElementById('hijo1');
var hijo2 = document.getElementById('hijo2');


// Insert before: inserta elementos antes de otro
// padre.insertBefore(nuevo,siguiente)

// padre.appendChild(link);
padre.insertBefore(link,hijo2);