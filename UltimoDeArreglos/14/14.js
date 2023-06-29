/*Cree una función que reciba un arreglo
 de letras no repetidas y lo retorne ordenado 
 alfabéticamente. Se le debe pedir 
al usuario que introduzca el arreglo.*/


function ordenarArregloLetras(arreglo) {
   
    for (let i = 0; i < arreglo.length - 1; i++) {
      for (let j = i + 1; j < arreglo.length; j++) {
        if (arreglo[j] < arreglo[i]) {
          let temp = arreglo[i];
          arreglo[i] = arreglo[j];
          arreglo[j] = temp;
        }
      }
    }
  
    return arreglo;
  }
  
  let cantidadLetras = parseInt(prompt("Ingrese la cantidad de letras en el arreglo:"));
  let arregloLetras = [];
  
  for (let i = 0; i < cantidadLetras; i++) {
    let letra = prompt("Ingrese una letra:");
    arregloLetras.push(letra);
  }
  
  let arregloOrdenado = ordenarArregloLetras(arregloLetras);
  console.log("El arreglo ordenado alfabéticamente es:", arregloOrdenado);
  