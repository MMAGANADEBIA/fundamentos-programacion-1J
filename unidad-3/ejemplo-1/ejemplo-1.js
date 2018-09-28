/*
JavaScript
Elementos básicos
*/
var edad;
var semestre;
var numeroCuenta;
var numeroIngresoTrabajador;

semestre = 1;
edad = 20;

var title = document.querySelector('h1');
title.addEventListener('click', updateName);

//esto es una función
function updateName() {
    var name = prompt('nombre del jugador');
    title.textContent = 'Jugador 1: ' + name;
}