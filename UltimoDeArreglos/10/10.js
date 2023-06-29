/*Cree una función que reciba un arreglo de nombres de personas y 
muestre si la letra “c” se encuentra entre tales nombres, en caso
de que la letra “c” se encuentre, mostrar las veces que 
se encuentra(considerando las apariciones entre todos los nombres) . 
Se le debe pedir al usuario que introduzca el arreglo.*/

function pide(reciba) {
    let arreglodenombres = [];
    let contador = 0;
  
    for (let index = 0; index < reciba; index++) {
      let nombre = prompt("Ingrese un nombre");
      arreglodenombres.push(nombre);
    }
  
    for (let index = 0; index < arreglodenombres.length; index++) {
      if (arreglodenombres[index] === "c") {
        contador++;
      }
    }
  
    return contador;
  }
  
  let reciba = parseInt(prompt("Ingrese el número de elementos que desea ingresar"));
  let final = pide(reciba);
  console.log("El número de nombres que contienen 'c' es: " + final);
  