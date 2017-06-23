/*
  DOM - DOCUMENT OBJECT MODEL

  El DOM es una API para acceder y manipular los elementos de los documentos HTMl y XML.

  Por otro lado, el DOM se puede entender como un arbol
  jerárquico de componente, en el que hay padres, hermanos, hijos, etc. El componente de nivel superior en el DOM es document, por lo tanto cada vez que se quiera acceder a un componente del DOM se parte de document.

  Cada componente del DOM se llama nodo. Y existen varios tipos de nodos:

  (1) Elemento  -> se corresponde con una etiqueta HTML
  (2) Texto     -> El texto contenido dentro de un elemento
  (3) Atributos -> Los atributos de los elementos

  También se considera a los comentarios.

*/


/*
  Podemos acceder a elementos del DOM directamente con las siguientes propiedades
*/

var css = document.styleSheets;
var title = document.title;
var scripts = document.scripts;
var charset = document.charset;
var url = document.URL;
var domain = document.domain;


/*
  También se pueden acceder a elementos HTML con
  propiedades del documento.
*/

var head    = document.head;
var body    = document.body;
var html    = document.documentElement;
var images  = document.images;
var links   = document.links;
var forms   = document.forms;

/*
  Las propiedades anteriores devuelven un array en el que
  se puede buscar por indice o por id.
  Ejemplo:
*/

  console.log(links[0]); // devuelve el primer enlace
  console.log(links['primero']); // devuelve el elemento con el id "primero"
  console.log(links.primero); // devuelve el elemento con el id "primero"