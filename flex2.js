'use strict';


const filas = 3;
const columnas = 5;
const espacio = 20;


let cosa = ' ';


for (let i = 0; i < filas; i++) {
  for (let j = 0; j < espacio; j++) {
    cosa += '&nbsp;';
  }
  for (let j = 0; j < columnas; j++) {


    const orden =(i + j)>=(filas - 1)&&(j - i)<=(filas - 1);
    if (orden) {
      cosa += 'o&nbsp;';
    } else {
      cosa += '&nbsp;&nbsp;';
    }
  }
  cosa += '<br>';
}
// document.write(cosa);




var cuadro = prompt("Diga en qué cuadro quiere saludar (1 a 5)","");
cuadro = parseInt(cuadro);
// cuadro será una variable numérica, supuestamente entre 1 y 5


var estecuadro;


switch (cuadro) {
    case 1:
        estecuadro =  document.getElementById("c1");
        estecuadro.innerHTML=cosa;
        break;
    case 2:
        estecuadro =  document.getElementById("c2");
        estecuadro.innerHTML=cosa;
        break;
    case 3:
        estecuadro =  document.getElementById("c3");
        estecuadro.innerHTML=cosa;
        break;
    case 4:
        estecuadro =  document.getElementById("c4");
        estecuadro.innerHTML=cosa;
        break;
    case 5:
        estecuadro =  document.getElementById("c5");
        estecuadro.innerHTML=cosa;
        break;
   
    default:
        alert ("Numero no valido");
        exit(-1);
}

