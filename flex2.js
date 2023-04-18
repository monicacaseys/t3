'use strict';


const filas = 3;
const columnas = 5;
let output = ' ';


for (let i = 0; i < filas; i++) {
  for (let j = 0; j < columnas; j++) {
    const orden =(i + j)>=(filas - 1)&&(j - i)<=(filas - 1);
    if (orden) {
        output += 'o&nbsp;';
    } else {
        output += '&nbsp;&nbsp;';
    }
  }
  output += '<br>';
}
// document.write(cosa);




var cuadro = prompt("Diga en qué cuadro quiere saludar (1 a 5)","");
cuadro = parseInt(cuadro);
// cuadro será una variable numérica, supuestamente entre 1 y 5

var colorSeleccionado = prompt("Elija un color para el texto (red, green, blue)", "");

var estecuadro;


switch (cuadro) {
    case 1:
        estecuadro =  document.getElementById("c1");
        estecuadro.innerHTML=output;
        break;
    case 2:
        estecuadro =  document.getElementById("c2");
        estecuadro.innerHTML=output;
        break;
    case 3:
        estecuadro =  document.getElementById("c3");
        estecuadro.innerHTML=output;
        break;
    case 4:
        estecuadro =  document.getElementById("c4");
        estecuadro.innerHTML=output;
        break;
    case 5:
        estecuadro =  document.getElementById("c5");
        estecuadro.innerHTML=output;
        break;
   
    default:
        alert ("Numero no valido");
        exit(-1);
}
estecuadro.style.color = colorSeleccionado;

//LA FORMA DE ABAJO TE LO PIDE DENTRO DEL CUADRO UNA VEZ ELEGIDO YA EL LUGAR
/* // Pedir al usuario que seleccione un color utilizando un elemento select
var colorSelect = document.createElement("select");
colorSelect.innerHTML = `
  <option value="red">Rojo</option>
  <option value="green">Verde</option>
  <option value="blue">Azul</option>
`;

// Agregar el elemento select al cuadro seleccionado
estecuadro.appendChild(colorSelect);

// Establecer el color del texto del cuadro seleccionado según el color seleccionado por el usuario
colorSelect.addEventListener("change", function() {
  var color = colorSelect.value;
  estecuadro.style.color = color;
}); */





