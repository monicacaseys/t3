'use strict';
var color = 'white';

//ahora al color lo cogemos con una funcion.
//este programa solo define funciones invocadas e inicializadas de forma global con htlm
function obtieneColor() {
  let id = "c" + identificador; //modo string lo concatena
  color=document.getElementById(id).style.backgroundColor;
 
}
function saludar(identificador) {
  let id = "c" + identificador; //modo string lo concatena
  let cuadro = document.getElementById(id);
  cuadro.style.color = color;
  cuadro.innerHTML = "HOLA";

}
/*
en este caso repetimos mucho codigo ya quie identificamos cada funcion segun el id en el htmnl donde tambien hay que poner su respctiva funcion con el numero
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

}*/
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





