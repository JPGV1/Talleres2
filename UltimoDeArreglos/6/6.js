/*Dado los arreglos valle = [“Cali” , “Tulua”, “Cartago”, “Salento”] quindio = [“Cordoba”,
    “Armenia”, “Palmira”, “Circasia”] Ordene los arreglos de tal manera que los elementos(ciudades)
    queden en el arreglo que les corresponde. Use ciclos.*/


    
    function ordenarCiudades() {
        valle = ["Cali", "Tulua", "Cartago", "Salento"];
        quindio = ["Cordoba", "Armenia", "Palmira", "Circasia"];
        
        valle2 = [];
        quindio2 = [];
        
        for (let i = 0; i < valle.length; i++) {
          if (valle[i] === "Cali" || valle[i] === "Tulua" || valle[i] === "Cartago" || valle[i] === "Palmira") {
            valle2.push(valle[i]);
          }
        }
        
        for (let i = 0; i < quindio.length; i++) {
          if (quindio[i] === "Cordoba" || quindio[i] === "Armenia" || quindio[i] === "Salento" || quindio[i] === "Circasia") {
            quindio2.push(quindio[i]);
          }
        }
        
        return {
          valle: valle2,
          quindio: quindio2
        };
      }
      
      let resultado = ordenarCiudades();
      console.log(resultado);
      

  
