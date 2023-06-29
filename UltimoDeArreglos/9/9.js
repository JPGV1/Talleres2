/*Cree una función que reciba dos arreglos de números enteros y 
muestre cual arreglo tiene un
promedio mayor de sus elementos. 
Se le debe pedir al usuario que introduzca los arreglos.*/

function reciba(pida, pida2) {
  let arreglo1 = [];
  let arreglo2 = [];

  for (let index = 0; index < pida; index++) {
    let arreglo3 = prompt("Ingresa un valor para el arreglo1");
    arreglo1.push(arreglo3);
  }

  for (let index = 0; index < pida2; index++) {
    let arreglo4 = prompt("Ingresa un valor para el arreglo2");
    arreglo2.push(arreglo4);
  }

  let resultado = (arreglo1.length + arreglo2.length) / arreglo1.length;
  return resultado;
}

let pida = parseInt(prompt("¿Cuántas veces quieres ingresar valores para el arreglo1?"));
let pida2 = parseInt(prompt("¿Cuántas veces quieres ingresar valores para el arreglo2?"));

let resultadoFinal = reciba(pida, pida2);
console.log("El resultado es: " + resultadoFinal);

