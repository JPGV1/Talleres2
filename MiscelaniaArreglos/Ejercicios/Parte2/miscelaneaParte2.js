function Ejercicio1() {
    let arreglo1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let arreglo2 = [];
    let arreglo3 = ["a", true, -1];
    let arreglo4 = [2, 4, 5, 7, 1, 34, 89, 0];
    console.log("Arreglo1 = " + arreglo1.length);
    console.log("Arreglo2 = " + arreglo2.length);
    console.log("Arreglo3 = " + arreglo3.length);
    console.log("Arreglo4 = " + arreglo4.length);
  }
  function Ejercicio2() {
    let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    function a() {
      arreglo.push(345);
      console.log(arreglo);
    }
    a();
    function b() {
      arreglo.push(true);
      console.log(arreglo);
    }
    b();
    function c() {
      arreglo.push("ADSO");
      console.log(arreglo);
    }
    c();
    function d() {
      arreglo.push(455, 78, false);
      console.log(arreglo);
    }
    d();
    function e() {
      arreglo.push("ABcd", true, 21);
      console.log(arreglo);
    }
    e();
  }
  function Ejercicio3() {
    function a() {
      let arreglo = [1, 2, false];
      arreglo.splice(2);
      console.log(arreglo);
    }
    a()
    function b() {
      let arreglo = [99, false, 17, 45, 7, "abc", 78];
      arreglo.splice(6);
      console.log(arreglo);
    }
    b()
    function c() {
      let arreglo = [-1, -55, -89 - 30, 1000];
      arreglo.splice(1);
      console.log(arreglo);
    }
    c()
    function d() {
      let arreglo = ["zxc", 767, 1298, true, false, [3], 1];
      arreglo.splice(1, 4);
      console.log(arreglo);
    }
    d()
    function e() {
      let arreglo = [34, ["q"], 67, 1, 99, 1 / 2];
      arreglo.splice(3, 2);
      console.log(arreglo);
    }
    e()
  }
  function Ejercicio4() {
    let a= [2, 6, 9, 0, 5]
    let dependiente= a.slice()
    console.log(dependiente);
  }
  function Ejercicio5() {
    let b =["abc", 4, 88, 99] 
    let independiente = [...b]
    console.log(independiente);
  }
  function Ejercicio6() {
    let arreglo = ["x", "y", "z", 0, 1, 2, 3] 
    for (let i = 0; i < arreglo.length; i++) {
      console.log(arreglo[i]);
    }
  }
  function Ejercicio7() {
    let arreglo =[1, 17, 8, 9, 3]
    for (let i = 0; i < arreglo.length; i++) {
      console.log(arreglo[i] + 1);
    }
  }
  function Ejercicio8() {
    let arreglo = [1, 17, 8, 9, 3, "x", "y", "z", 0, 1, 2, 3,"zxc", 767, 1298, true, false, [3], 1]
    let elementos = arreglo.length
    console.log(elementos);
  }
function Ejercicio9() {
  let letra = prompt("Ingrese una letra");
  let arreglo = ["a", "b", "c", "d", "e", "f", "g"];
  for (let i = 0; i < arreglo.length; i++) {
    if (letra == arreglo[i]) {
      console.log("Esta letra se encuentra en el arreglo");
      break;
    } else {
      console.error("Esta letra no se encuentra en el arreglo.");
    }
  }
}
