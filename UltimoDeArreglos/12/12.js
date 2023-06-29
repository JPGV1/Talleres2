/*Cree una función que reciba un arreglo de cadenas de 
ADN (las cadenas estarán formadas por las letras A o C o T o G referirse 
a taller de ADN pasado) y muestre la cadena de ADN con mayor número 
de Timina (T). Se le debe pedir al usuario 
que introduzca los arreglos*/


function encontrarMayorTimina(arregloADN) {
    let mayorTiminaCadena = '';
    let mayorTiminaCount = 0;
  
    for (let i = 0; i < arregloADN.length; i++) {
      let cadena = arregloADN[i];
      let timinaCount = 0;
  
      for (let j = 0; j < cadena.length; j++) {
        if (cadena[j] === 'T') {
          timinaCount++;
        }
      }
  
      if (timinaCount > mayorTiminaCount) {
        mayorTiminaCount = timinaCount;
        mayorTiminaCadena = cadena;
      }
    }
  
    return mayorTiminaCadena;
  }
  
  let cantidadCadenas = parseInt(prompt("Ingrese la cantidad de cadenas de ADN:"));
  let arregloADN = [];
  
  for (let i = 0; i < cantidadCadenas; i++) {
    let cadena = prompt("Ingrese una cadena de ADN:");
    arregloADN.push(cadena);
  }
  
  let cadenaMayorTimina = encontrarMayorTimina(arregloADN);
  console.log("La cadena de ADN con mayor cantidad de Timina (T) es: " + cadenaMayorTimina);
  
  