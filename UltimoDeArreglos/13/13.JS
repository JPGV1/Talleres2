/*Cree una función que reciba un arreglo de números enteros no 
repetidos y lo retorne ordenado de menor a mayor según el valor 
de tales elementos. Se le debe pedir al usuario que introduzca 
el arreglo.*/

function ordenarArreglo(arreglo) {
    let n = arreglo.length;
    for (let i = 0; i < n ; i++) {
      for (let j = 0; j < n ; j++) {
        if (arreglo[j] > arreglo[j + 1]) {
          let temp = arreglo[j];
          arreglo[j] = arreglo[j + 1];
          arreglo[j + 1] = temp;
        }
      }
    }
    return arreglo;
  }
  
  let cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números en el arreglo:"));
  let arregloNumeros = [];
  
  for (let i = 0; i < cantidadNumeros; i++) {
    let numero = parseInt(prompt("Ingrese un número entero:"));
    arregloNumeros.push(numero);
  }
  
  let arregloOrdenado = ordenarArreglo(arregloNumeros);
  console.log("El arreglo ordenado de menor a mayor es:", arregloOrdenado);
  