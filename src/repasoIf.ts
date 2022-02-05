// Ejercicio1 - Signos zodiacales
function obtenerSignoZodiacal(fecha : string):string{
    //Math.floor 3.123 => 3
    //Math.random(0,1) => 0.123 , 0.567
    
    let dia : number = parseInt(fecha.substring(0,2));
    let mes : number = parseInt(fecha.substring(3,5));
    let valorDevuelto:string = "";
    
    let simbolosZodiaco = {
        capricornio: "Capricornio",
        aquarius: 'Acuario',
        piscis:'Piscis',
        aries:'Aries',
        taurus:'Taurus',
        gemini:'Gemini',
        cancer:'Cancer',
        leo:'Leo',
        virgo:'Virgo',
        libra:'Libra',
        scorpio:'Scorpio',
        sagitario:'Sagitario'
      }
    
      if((mes == 1 && dia <= 20) || (mes == 12 && dia >=22)) {
        valorDevuelto=simbolosZodiaco.capricornio;
      } else if ((mes == 1 && dia >= 21) || (mes == 2 && dia <= 18)) {
        valorDevuelto=simbolosZodiaco.aquarius;
      } else if((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) {
        valorDevuelto=simbolosZodiaco.piscis;
      } else if((mes == 3 && dia >= 21) || (mes == 4 && dia <= 20)) {
        valorDevuelto=simbolosZodiaco.aries;
      } else if((mes == 4 && dia >= 21) || (mes == 5 && dia <= 20)) {
        valorDevuelto=simbolosZodiaco.taurus;
      } else if((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
        valorDevuelto=simbolosZodiaco.gemini;
      } else if((mes == 6 && dia >= 22) || (mes == 7 && dia <= 22)) {
        valorDevuelto=simbolosZodiaco.cancer;
      } else if((mes == 7 && dia >= 23) || (mes == 8 && dia <= 23)) {
        valorDevuelto=simbolosZodiaco.leo;
      } else if((mes == 8 && dia >= 24) || (mes == 9 && dia <= 23)) {
        valorDevuelto=simbolosZodiaco.virgo;
      } else if((mes == 9 && dia >= 24) || (mes == 10 && dia <= 23)) {
        valorDevuelto=simbolosZodiaco.libra;
      } else if((mes == 10 && dia >= 24) || (mes == 11 && dia <= 22)) {
       valorDevuelto= simbolosZodiaco.scorpio;
      } else if((mes == 11 && dia >= 23) || (mes == 12 && dia <= 21)) {
        valorDevuelto=simbolosZodiaco.sagitario;
      }
      return valorDevuelto;

}

console.log(obtenerSignoZodiacal("22/06/1985"));

// Ejercicio 9


export function numeroParImpar(numero: number){
  let cadena = "";
  if (numero %2 === 0){
      cadena = "el numero es par";
  }else{
      cadena = "el numero es impar";
  }
  return cadena;
}
//numeroParImpar(2);