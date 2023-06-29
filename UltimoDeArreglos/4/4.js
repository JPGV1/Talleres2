/*Cree una función que reciba un arreglo de números naturales y muestre todos los números primos en
él*/



function recifere() {
arreglo1=prompt("ingrese numero")
arreglo2=prompt("ingrese 2 numero")
arreglo3=prompt("ingrese 3 numero")
let arregloreal=[];
arregloreal.push(arreglo1,arreglo2,arreglo3)
  for (let index = 0; index <arregloreal.length; index++) {
  if (arregloreal[index] %2!=0) {
     console.log(arregloreal[index])
  }
  }
}
recifere()

