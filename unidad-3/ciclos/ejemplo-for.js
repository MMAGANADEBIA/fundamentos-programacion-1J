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
var btn5 = document.querySelector('#btn5');
btn5.addEventListener('click', ejemplo5);
var lienzo = document.querySelector('#lienzo');

function ejemplo5(){
    var c = lienzo.getContext('2d');
    var i = 0;

    do{
    var x = Math.trunc((Math.random() * 501) + 1);
    var y = Math.trunc((Math.random() * 501) + 1);
    var r = Math.trunc((Math.random() * 50) + 1);
    
    if (x > 250){
        break;
    }

    c.beginPath();
    c.fillStyle = 'rgba(0,255,0,0.5)';
    c.arc(x, y, r, 0, 2*Math.PI);
    c.fill();
    i++;
    }while(i < 30);
}

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