var tabla = document.querySelector('#tabla');
var numero = document.querySelector('#numero');
var boton = document.querySelector('#boton');
boton.addEventListener('click', vectores);

function vectores(){
    var t = Number(numero.value);
    var v = []

    for (var i=0; i<t; i++){
        var n = prompt ('Escribe un número');
        v[i] = n;
    }
    for(i=0; i<v.length; i++){
        var row = tabla.insertRow(-1);
        var cell = row.insertCell(0);
        var cell1 = row.insertCell(1);
        cell.innerHTML = i;
        cell1.innerHTML = v[i];
    }

    row = tabla.insertRow(-1);

    v.forEach(function(valor){
        row = tabla.insertRow(-1);
        cell = row.insertCell(0);
        cell.innerHTML = valor;
    })
}