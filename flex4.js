'use strict';
// nos ayuda a no dejar pasar nungún error
// Programa que solamente define funciones que son invocadas e inicializadas de forma global




//defino variables globales
var color = 'white';

//SOLO arrays, esta es una forma aunq tambiens e pueden meter directamente dentro de los [] separado pro comas 
//SE CAMBIA EL BACK Y EL COLOR DE LA LETRA SEGUNE STE ASOCIADO EN EL ARRAY
// trabajamos con arrays

var colorFr= new Array ('dodgerblue','rgb(30, 255, 206)','rgb(255, 30, 255)','rgb(255, 165, 30)','rgb(158, 255, 30)');
var colorFn= [];
colorFn[0]= 'magenta';
colorFn[1]= 'blue';
colorFn[2]= 'black';
colorFn[3]= 'yellow';
colorFn[4]= 'red';


function pinturaInicial () {
    for (let i=0; i< 5 ; i++){
    let identificador="c"+(i+1);
    let elemento=document.getElementById(identificador);
    elemento.style.barkgroundColor=colorFn[i];
    elemento.style.color=colorFr[i];
    }
}
pinturaInicial(); //si quiero llamar una funcion cambio el nombre de esto
//ahora al color lo cogemos con una funcion.
//este programa solo define funciones invocadas e inicializadas de forma global con htlm
function obtenerColor(identificador) {
    let id = "c" + identificador;
    let cuadro = document.getElementById(id);
    color = getComputedStyle(cuadro).backgroundColor;  // para sacar los colores que se le asignó al cuadro en el css
    console.log(color);
}


// para poner color a la palabra de dentro del cuadrado
function saludar(identificador) {
    let id = "c" + identificador;
    let cuadro = document.getElementById(id);
    cuadro.style.color = color;
    cuadro.innerHTML = "HOLA";
}








