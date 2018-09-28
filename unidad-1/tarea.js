var btnSumar = document.querySelector('#sumar');
console.log('btnsumar');
btnSumar.addEventListener('click', sumar);

function sumar () {
    var inputNumero1 = document.querySelector('#numero1');
    var inputNumero2 = document.querySelector ('#numero2');

    var sumar = Number(inputNumero1.value) + Number(inputNumero2);

    var inputResultado = document.querySelector ('#sumar');
    inputResultado.value = resultado;
}