'use strict';
var color='white';

//pedimos solo el color para quedewspiesw selecione el cuadrado directamente sin decir el numero
function eligeColor() {
    color = prompt("Elija un color para el texto (red, green, blue)", "");
switch (color) {
    case 1:
        case 'rojo':
          color='red';
        break;
    case 'azul':
        color='blue';
        break;
    case 'amarillo':
      color='yellow';
        break;
    default:
      color='black';//lo pongo en negro para saber que es in color erroneo
}
}

function saludarc1(){
   let cuadro=document.getElementById("c1");
   cuadro.style.color=color;
   cuadro.innerHTML="HOLA";

}
function saludarc2(){
  let cuadro=document.getElementById("c2");
  cuadro.style.color=color;
  cuadro.innerHTML="HOLA";

}
function saludarc3(){
  let cuadro=document.getElementById("c3");
  cuadro.style.color=color;
  cuadro.innerHTML="HOLA";

}
function saludarc4(){
  let cuadro=document.getElementById("c4");
  cuadro.style.color=color;
  cuadro.innerHTML="HOLA";

}
function saludarc5(){
  let cuadro=document.getElementById("c5");
  cuadro.style.color=color;
  cuadro.innerHTML="HOLA";

}
eligeColor();


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





