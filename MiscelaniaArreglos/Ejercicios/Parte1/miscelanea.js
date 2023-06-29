function Ejercicio1() {
  let j = [200, -100, 45, 78, 32];
  console.log(j[2]);
  console.log(j[4]);
}
function Ejercicio2() {
  let f = ["ab", "cd", "ef", "gh"];
  console.log(f[1]);
  console.log(f[3]);
}
function Ejercicio3() {
  let aux = [10, true, "k200", 20.7];
  aux.forEach((i) => {
    console.log(i);
  });
}
function Ejercicio4() {
  let k = [17, 4, 64, 79, 109, 112];
  k.forEach((i) => {
    if (i % 2 !== 0) {
      console.log(i);
    }
  });
}
function Ejercicio5() {
  let h = [true, true, false, true, false];
  h.splice(2, 2, true, false);
  console.log(h);
}

function Ejercicio6() {
  let w = ["wc", "jp", "zx", "qr"];
  w.splice(1, 1, true);
  w.splice(3, 1, 30);
  console.log(w);
}
function Ejercicio7() {
  let arreglo = [2, 5, 7, 9];
  arreglo.forEach((i) => {
    console.log(i);
  });
}
function Ejercicio8() {
  let elementos = prompt(
    "Ingrese los elementos del arreglo separados por comas:"
  );
  let arreglo = elementos.split(",");
  console.log(arreglo.length);
}
function Ejercicio9() {
  let arreglo = [30, 44, 54, 89, 100];
  arreglo.indexOf(44);
  arreglo.indexOf(89);
  arreglo.indexOf(70);
}


