function Ejercicio1() {
  let arreglo = [3, 50, 70, 600, 40];
  arreglo.forEach((i) => {
    console.log(i);
  });
}

function Ejercicio2() {
  let arreglo = [3, 50, 70, 600, 40];
  arreglo.forEach((i) => {
    console.log(i * 3);
  });
}

function Ejercicio3() {
  let arreglo = [3, 50, 70, 600, 40];
  let acomuladora = 0;
  while (acomuladora < arreglo.length) {
    console.log(arreglo[acomuladora]);
    acomuladora++;
  }
}

function Ejercicio4() {
  let arreglo = [3, 50, 70, 600, 40];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 == 0) {
      console.log(arreglo[i]);
    }
  }
}

function Ejercicio5() {
  let arreglo = ["Maria", "Pedro", "Juan", "Pablo", "Diana"];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] == "Juan") {
      console.log("Juan se encuentra en el arreglo");
    }
  }
}
function Ejercicio6() {
    let arreglo = ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"]
    let contador=0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] == "Maria") {
            contador++
        }
        
    }
    console.log(contador);
}
function Ejercicio7() {
    let arreglo = [15, 7, 9, 12, 1] 
    let contador= 0;
    arreglo.forEach (i => {
        contador+= i
    });
    console.log(contador);
}
function Ejercicio8() {
    let arreglo = [-2, 8, 99, 1, 7] 
    let contador=0
    arreglo.forEach(i => {
        let cuadrado = Math.pow([i],2)
        contador += cuadrado
        
    });
    console.log(contador);
}
function Ejercicio9() {
    let arreglo = [true, true, false, true, false, false];
let contador = 0;
let index = 0;

while (index < arreglo.length) {
  if (arreglo[index] === false) {
    contador++;
  }
  index++;
}

console.log("El número de veces que aparece 'false' en el arreglo es: " + contador);

}
function Ejercicio10() {
    let arreglo =["z", "p", "s", "z", "o", "b", "a", "w", "d"] 
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo.includes ("a" , "d" , "s" , "o")) {
            console.log("El arreglo tiene los caracteres necesarios para formar la palabra adso");
        };
        
    }
}
function Ejercicio11() {
  let arreglo =[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  for (let i = 0; i < arreglo.length; i++) {
    console.log(" 5 x ",arreglo[i], " = ", arreglo[i]*5);;
  }
}
function Ejercicio12() {
  let arreglo = [5, 7, 90, 2, 5, 3, 8, 99]
  arreglo.forEach(function (num1){
    arreglo.forEach(function (num2){
      if (num1+1==num2) {
        console.log(num1,num2, " Son consecutivos")
      }
    })
  
  })
}
