{/*
  ************Ejercicio 3************

  Multiplicar dos número si usar el signo *

*/}

const multiplicar = (a,b) => {
  return a / (1/b);
}

console.log('----->', multiplicar(5,5));

// Al resolver la fracción tendremos que recurrir a la 
// ley del sandwich, y siembre tendremos a por b, dividido entre 1





{/*
  ************Ejercicio 4************

  Parámetros predeterminados de función permiten que los parámetros
  con nombre se inicien con valores predeterminados si no se pasa 
  ningún valor o undefined.

*/}

function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 2));
// Valor esperado: 10

console.log(multiply(5));
// Valor esperado: 5

{/*
  En la segunda función, como no definimos el segundo parámetro
  entonces la funcion tomará por defecto el parametro que nombramos
  al crear la función
*/}





{/*
  ********Ejercicio 5********

  Metodos de arreglos
*/}

//Array.length
let frutas = ["Manzana", "Banana"]

console.log(frutas.length)
// 2

//Nos ayuda a saber el tamaño del contenido de un arreglo


//Array.forEach
frutas.forEach(function(elemento, indice, array) {
  console.log(elemento, indice);
})
// Manzana 0
// Banana 1
//forEach nos permite recorrer un arreglo


//Array.push
// ["Manzana", "Banana", "Naranja"]
let nuevaLongitud = frutas.push('Naranja') // Añade "Naranja" al final
// ["Manzana", "Banana", "Naranja"]
//push nos ayuda a agregar un elemento a un arreglo pero en la última posición

//Array.unshift
let nuevaLongitud2 = frutas.unshift('Fresa') // Añade "Fresa" al inicio
// ["Fresa" ,"Manzana", "Banana"]
//unshift nos ayuda a agregar un elemento a un arreglo pero en la primer posición


//Array.shift
let primero = frutas.shift() // Elimina "Fresa" del inicio
// ["Manzana", "Banana"]
//shift nos ayuda a eliminar el primer elemento de un arreglo

["Manzana", "Banana"]
//Array.indexOf
let pos = frutas.indexOf('Banana')
// 1
//indexOf nos ayuda a encontrar el índice de un elemento en un arreglo
//pasándolo el elemento del cual queremos saber el índice