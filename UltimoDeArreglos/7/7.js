/*Dados los arreglos arreglo1 = [“Pera”, “Cebolla”, “Limón”, “Pimentón”] arreglo2 = [“Manzana”,
    “Banano”, “Lechuga”, “Perejíl”] Ordene los arreglos de tal manera que los elementos(frutas y
    verduras) queden en el arreglo que les corresponde. Use ciclos.*/


    function ordenarCiudades() {
       
        arreglo1 = ["Pera", "Cebolla", "Limón", "Pimentón"] 
        arreglo2 = ["Manzana",  "Banano", "Lechuga", "Lechuga"]
        frutas = [];
        verduras = [];
        
        for (let i = 0; i < arreglo1.length; i++) {
          if (arreglo1[i] === "Pera" || arreglo1[i] === "limon") {
            frutas.push(arreglo1[i]);
          }
          if (arreglo1[i] === "Cebolla" ||arreglo1[i]=== "Pimentón") {
            verduras.push(arreglo1[i]);
          }
        }
        
        for (let i = 0; i < arreglo2.length; i++) {
          if (arreglo2[i]=== "Lechuga" ) {
            verduras.push(arreglo2[i]);
          }
          if (arreglo2[i] === "Banano" ||arreglo2[i] === "Manzana") {
            frutas.push(arreglo2[i]);
          }
        }
        
        return {
         frutas: frutas,
         verduras:verduras,
        };
      }
      
      let resultado = ordenarCiudades();
      console.log(resultado);