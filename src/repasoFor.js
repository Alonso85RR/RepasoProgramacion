"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
function obtenerNumerosImpares(numero) {
    /*for ( let numeroImpar = 1;  numeroImpar<=numero; numeroImpar = numeroImpar+2){
        console.log("Numero", numeroImpar)
    }*/
    for (let i = 0; i <= numero; i++) {
        if (i % 2 != 0) {
            console.log("Numero", i);
        }
    }
}
//obtenerNumerosImpares(500);
// Ejercicio 4
function revertirArray(arrayRecibido) {
    return arrayRecibido.reverse();
}
// console.log(revertirArray(["Uno", "Dos", "Tres"]));
// Ejercicio 5
function estaColorEnArcoiris(arrayColores) {
    let arrayColoresArcoiris = [
        "rojo", "naranja", "amarillo", "verde", "añil", "azul", "violeta"
    ];
    arrayColores.forEach(color => {
        if (arrayColoresArcoiris.includes(color.toLowerCase())) {
            console.log(`El color ${color} está en el arcoiris`);
        }
        else {
            console.log(`El color ${color} NO está en el arcoiris`);
        }
    });
}
//estaColorEnArcoiris(["Rojo", "Verde", "Amarillo", "Gris", "Lila", "Azul"]);
// Ejercicio 6
function existeNumeroPar(arrayNumeros) {
    let parEncontrado = arrayNumeros.every(numero => {
        console.log("Numero", numero);
        if ((numero % 2) === 0) {
            return false;
        }
        else {
            return true;
        }
    });
    return !parEncontrado;
}
/*
let arrayNumeros = [13,15,20,11];
if (existeNumeroPar(arrayNumeros) === true){
    console.log("Exite numero par en el array");
}else{
    console.log("No existe un numero par en el array");
}
*/
// Ejercicio 7
function hayNombreSinM(arrayNombres) {
    let nombreSinM = false;
    arrayNombres.forEach(nombre => {
        if (nombre.substring(0, 1).toLowerCase() !== "m") {
            nombreSinM = true;
        }
        ;
    });
    return nombreSinM;
}
/*
if (hayNombreSinM(["Margarita", "Manolo", "Manolete", "Mandarina", "Mickel", "mike", "pepe", "Luis"]) ){

    console.log("El array proporcionado contiene algun nombre que no empieza por M")
}else{
    console.log("El array proporcionado no contiene nombres que no empiecen por M");
}*/
//Ejercicio 8
function sumaNumeroCaracteres(arrayPalabras) {
    let sumaPalabras = 0;
    arrayPalabras.forEach(palabra => {
        sumaPalabras += palabra.length;
    });
    return sumaPalabras;
}
/*
let suma = sumaNumeroCaracteres(["Que", "Tal"])
console.log("La suma de palabras es" , suma)*/
// Ejercicio 9
/*
function numeroParImpar(numero){
    let cadena = "";
    if (numero %2 === 0){
        cadena = "el numero es par";
    }else{
        cadena = "el numero es impar";
    }
    return cadena;
  }
  numeroParImpar(2);
*/
// Ejercicio 10
//Array1
/*
let array1:string[] =["Casa", "Coche", "Ciudad", "Cesta"]
let suma1:number = sumaNumeroCaracteres(array1)
let esPar1:string = numeroParImpar(suma1);
console.log(`El primer array tiene como suma ${suma1} y ${esPar1}`)

// Array 2
let array2:string[] =["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"]
 let suma2:number = sumaNumeroCaracteres(array2)
let esPar2:string = numeroParImpar(suma2);
console.log(`El segundo array tiene como suma ${suma2} y ${esPar2}`)


// Array 3
let array3:string[] =["Venezuela", "Veneno", "Voltaje"]
let suma3:number = sumaNumeroCaracteres(array3)
let esPar3:string = numeroParImpar(suma3);
console.log(`El tercer array tiene como suma ${suma3} y ${esPar3}`)
*/