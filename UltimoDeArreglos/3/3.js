/*Cree una función que reciba un arreglo de números y retorne el número menor entre todos los
elementos del arreglo.*/

let arreglo=[1,2,3,4,5]
let menor= arreglo[0]
function calcular(arreglo,menor) {

  for (let index = 0; index < arreglo.length; index++) {
      if (arreglo[index] < menor) {
         menor= arreglo[index]
      }
  }
  return menor
}
let final =calcular(arreglo,menor)
console.log(final)