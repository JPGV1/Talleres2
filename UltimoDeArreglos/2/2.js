/*Dado el arreglo de cadenas de ADN [“AATGAAC”, “GTTTTTC”, “GGTAAA”, “CCCCATGGG”]
cree una función que reciba como argumento tal arreglo y muestre las cadenas de una sola base
(o solo decadenas formadas solo de A,  T, o solo de C o solo de G) que se pueden formar entre todos los
elementos del arreglo.*/


function recibirAD() {
  let ADN = ["AATGAAC", "GTTTTTC", "GGTAAA", "CCCCATGGG"];
  let unabase = [];
  let segundabase = [];
  let tercerabase = [];
  let cuartaabase = [];

  for (let i = 0; i < ADN.length; i++){
    for (let j = 0; j < ADN[i].length; j++) {
      if (ADN[i][j] === "A") {
        unabase.push(ADN[i][j]);
      } if (ADN[i][j] === "G") {
        segundabase.push(ADN[i][j]);
      } if (ADN[i][j] === "T") {
        tercerabase.push(ADN[i][j]);
      } if (ADN[i][j] === "C") {
        cuartaabase.push(ADN[i][j]);
      }
    }
  }

  return {
    unabase: unabase,
    segundabase: segundabase,
    tercerabase: tercerabase,
    cuartaabase: cuartaabase,
  };
}

let resultado = recibirAD();
console.log(resultado);


