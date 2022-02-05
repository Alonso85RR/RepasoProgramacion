"use strict";
// Ejercicio2
function obtenerContinenteDePais(pais) {
    // "España, Francia"
    // "Key": "Valor"
    // 2 - Contenido de la funcion
    let continentesPaises = [
        { paises: ["Espana", "Francia", "Italia", "Belgica"], continente: "Europa" },
        { paises: ["Sudafrica", "Angola", "Argelia", "Camerun"], continente: "Africa" },
        { paises: ["Chile", "EEUU", "Bahamas", "Canada", "Argentina"], continente: "America" },
        { paises: ["China", "Japon", "Indonesia", "Vietnam"], continente: "Asia" },
        { paises: ["Nueva zelanda", "Australia", "Papua Nueva Guinea", "Tonga"], continente: "Oceania" },
    ];
    let i = 0;
    while (i < continentesPaises.length) {
        if (continentesPaises[i].paises.includes(pais)) {
            // 3- Retorno o salida de la funcion
            return `El pais ${pais} pertenece al continente ${continentesPaises[i].continente}`;
        }
        i++;
    }
    return `El pais ${pais} no se ha encontrado en ningún continente`;
}
// 1- Valores de entrada - Parametros 
console.log(obtenerContinenteDePais("Espana"));
