/*Cree una función que pida a n número de usuarios su nombre y edad y retorne un arreglo con los
nombres de los usuarios que son mayores de edad, luego muestre cuantos usuarios hay mayores de
edad.*/

function pida(persona) {
    let arreglo55 = [];
    
    for (let index = 0; index < persona; index++) {
      let arreglo3 = prompt("Ingrese su nombre");
      let arreglo4 = parseInt(prompt("Ingrese su edad"));
  
      if (arreglo4 >= 18) {
        arreglo55.push(arreglo3);
      }
    }
    
    return arreglo55;
  }
  
  let persona = parseInt(prompt("Ingrese número de usuarios"));
  let resultado = pida(persona);
  console.log(resultado);
  