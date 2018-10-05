var pResultado = document.querySelector('#resultado');
var btnNumero = document.querySelector('#btnNumero');
btnNumero.addEventListener('click', evalNumero);

var opciones = document.querySelector('#opciones');
opciones.addEventListener('change', eval0opcion);

var inputNumero = document.querySelector('#numero');

function eval0opcion() {
    var numero = Number(inputNumero.value);
    var opcion =opciones.value;

    if (opcion === 'mitad') {
        pResultado.textContent = 'la mitad es ' + (numero/2);
    }
    else if (opcion === 'cuadrado')
    pResultado.textContent = 'el cuadrado es ' + (numero*numero);
    else if (opcion === 'par')
    if(numero%2 === 0){
        pResultado.textContent = 'el numero es par ';
    }
    else {
        pResultado.textContent = 'el numero es inpar';
    }
}

function evalNumero () {
    var inputNumero = document.querySelector('#numero');
    var numero = Number(inputNumero.value);

    if(numero > 0) {
        pResultado.textContent = 'El número ' + numero + ' es positivo';
    }
    else if(numero < 0){
        pResultado.textContent = 'El número ' + numero + ' es negativo';
    }
    else{
        pResultado.textContent = "Escribiste el número cero";
    }
}