// Realice un script de nombre ejercicio-uno.js que realice las siguientes tareas:
// a) El script debe usar el modo estricto y este debe ser llamado desde la página index.html
// b) Solicite 6 números por pantalla y los almacene en un array.
// c) Realice una función que muestre el array completo (todos sus elementos) en el cuerpo de la página.
// d) Ordene los números del array de menor a mayor y muéstrelos por consola y en el cuerpo de la página.
// e) El script contendrá comentarios explicando lo realizado en el código.

'use strict';
//Solicita 6 numeros en el prompt
var numeros = [];

for (let i = 0; i < 6; i++) {
    numeros.push(parseInt(prompt("Ingrese el numero que desee: ",0)));
}

// //imprime en consola el arreglo
 console.log(numeros);

//Mostrar en el cuerpo de la pagina
document.write("<h1> Números Ingresados por Teclado y Guardados en el Array </h1>");

numeros.forEach((numero, index) => {
   document.write("<strong>"+numero+"</strong></br>");
 });

 // Mostrar numeros Ordenados de Menos a Mayor
document.write("<h1> Números Ordenados de Menor a Mayor </h1>");
numeros.sort(function (a,b){return a-b});
numeros.forEach((numero, index) => {
document.write("<strong>"+numero+"</strong></br>");
 });
