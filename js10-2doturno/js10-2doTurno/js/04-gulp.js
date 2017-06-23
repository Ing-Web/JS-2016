/*
* Gulp
*
* Sistema de automatización de tareas.
*
*   npm install -g gulp          (1 sola vez)
*   npm install --save-dev gulp  (para cada proyecto)
*
*   crear un gulpfile.js       (en la raiz del proyecto)
*
* Métodos de GULP
*
*   .task('nombre',*['tareas previas'], function);
*   .src('path')
*   .dest('path')
*   .watch('path', ['tareas'])
*
*   Además
*     .pipe()  -> encadena un proceso (stream) con el siguiente
*
* Para cada tarea se usa un plugin (o modulo de node). Cada uno tiene su propia documentacion.
* */

console.log("Esto es una prueba");
