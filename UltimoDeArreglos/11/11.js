/*Cree una función que reciba un arreglo de números enteros 
positivos y muestre cuantos números impares posee el arreglo.
 Se le debe pedir al usuario que introduzca el arreglo.*/


 function pide(reciba) {
    let arreglo = [];
    let impares = [];
  
    for (let index = 0; index < reciba; index++) {
      let numero = parseInt(prompt("Ingrese un número"));
      arreglo.push(numero);
      
      if (numero % 2 !== 0) {
        impares.push(numero);
      }
    }
  
    return impares;
  }
  
  let reciba = parseInt(prompt("Ingrese el número de elementos que desea ingresar"));
  let final = pide(reciba);
  console.log("Los números impares son: " + final);
  