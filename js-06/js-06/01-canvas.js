/*
  CANVAS -> LIENZO

  Permite dibujar sobre un área. Los elementos del dibujo no forman parte del DOM.

*/
// Obtener el elemento
var canvas = document.getElementById('canvas');
// Obtener el contexto
// Sobre el contexto se dibujará usando métodos y propiedades
var c = canvas.getContext('2d');
var w = canvas.width;
var h = canvas.height;

/*

  Para dibujar con canvas se requieren de métodos y propiedades.

  METODOS
    .stroke()     -> dibuja una linea
    .fill()       -> dibuja un relleno
    .beginPath()  -> comienza una ruta
    .closePath()  -> cerrar una ruta
    .moveTo()     -> para moverse a un punto

  PROPIEDADES
    .strokeStyle  -> define el color de la linea
    .lineWidth    -> el ancho de la linea
    .fillStyle    -> color de relleno

  FORMAS
    .lineTo()     -> define una linea que culmina en el punto determinado
    .rect()       -> dibuja un rectangulo,
                     requiere x,y,w,h
    .arc()        -> dibuja arcos de circulo
                     Parametros:
                        cx (centro x)
                        cy (centro y)
                        r  (radio)
                        startAngle (angulo de inicio)
                        endAngle (angulo de final)
                        sentido (boolean)

                                270 (3PI/2)
                        180(PI)               0
                                  90(PI/2)

  TEXTO
    .strokeText()
    .fillText()
      parametros: "texto",x,y



*/


// for(var i = 0; i < 30; i++){
//   c.moveTo(0, i * 10);
//   c.lineTo(w,i *10);
// }
// c.strokeStyle = "red";
// c.stroke();

// c.rect(50,50,200,100);
// c.fillStyle = "red";
// c.strokeStyle = "green";
// c.lineWidth = 10;
// c.stroke();
// c.fill();

// c.font = "bold 40px Arial";
// c.lineWidth = 2;
// c.fillText("Hola Mundo",50,200);
// c.strokeText("Adiós mundo",50,250);

c.arc(w/2,h/2,120,0,Math.PI * 2);
c.fillStyle = "red";
c.fill();