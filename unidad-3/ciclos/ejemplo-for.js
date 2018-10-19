var btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', ejemplo1);
var numero = document.querySelector('#numero');
var resultado = document.querySelector('#resultado');
var btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', ejemplo2);
var btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', ejemplo3);
var btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', ejemplo4);
var opciones = document.querySelector('#opciones');

function ejemplo4(){
    var fin = Number(numero.value);

    var i = fin;
    while( i > 0){
        var opc = document.createElement('option');
        opc.text = i;
        opciones.add(opc);

        i--;
    }
}

function ejemplo3(){
    var fin = Number(numero.value);

    var i = 0;
    while(i <= fin){
        var row = resultado.insertRow(-1);
        var cell = row.insertCell(0);
        cell.innerHTML = i;

        i++;
    }
}

function ejemplo2(){
    var fin = Number(numero.value);

    for(var i = 1; i <= fin; i++){
    var valor = prompt('Ingresa un número:' + i + "/" + fin + ":");
    var row = resultado.insertRow(-1);
    var cell = row.insertCell(0);
    cell.innerHTML = valor;
    }
}

function ejemplo1(){
    var fin = Number(numero.value);

    for(var i = 0; i <= fin; i++){
        var row = resultado.insertRow(-1);
        var cell = row.insertCell(0);
        cell.innerHTML = i;
    }
}