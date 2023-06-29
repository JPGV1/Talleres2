/*Cree una función que reciba un arreglo de números enteros y retorne el número mayor en él. Se le
debe pedir al usuario que introduzca el arreglo.*/



function calcular() {
    arreglo=[];
  numero1=prompt("ingrese numero")
  numero2=prompt("ingrese numero")
  numero3=prompt("ingrese numero")

    arreglo.push(numero1,numero2,numero3,)
    let mayor= arreglo[0]
  for (let index = 0; index < arreglo.length; index++) {
      if (arreglo[index] > mayor) {
         mayor= arreglo[index]
      }
  }
  return mayor
}

let final =calcular()
console.log(final)