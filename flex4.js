'use strict';
var color = 'white';

//arrays, esta es una forma aunq tambiens e pueden meter directamente dentro de los [] separado pro comas 
/*var colorFr=[];
colorFn[0]='white';
colorFn[0]='white';*/
//ahora al color lo cogemos con una funcion.
//este programa solo define funciones invocadas e inicializadas de forma global con htlm
function obtieneColor(identificador) {
  let id = "c" + identificador; //modo string lo concatena
  let cuadro = document.getElementById(id);
  color=getComputedStyle(cuadro).backgroundColor;
  console.log(color);
 
}
function saludar(identificador) {
  let id = "c" + identificador; //modo string lo concatena
  let cuadro = document.getElementById(id);
  cuadro.style.color = color;
  cuadro.innerHTML = "HOLA";

}

obtieneColor();

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





