const pantonAzul = ["#091A42", "#63749A", "#3C507E", "#1E3260"];
const pantonRojo = ["#55000", "#FFAAAA", "#AA3939", "#801515"];
const pantonVerde = ["#176017", "#89BE89", "#013C01", "#327932"];
const pantonDefault = ["ghostwhite", "ghostwhite", "ghostwhite", "ghostwhite"];

const general = [pantonDefault, pantonAzul, pantonRojo, pantonVerde];

const INICIO = document.getElementById('start');
const panelesColores = document.getElementById('control');
const panelesPantones = document.getElementById('pantones');

const azulcaja = document.getElementById('ctrBlue');
const rojocaja = document.getElementById('ctrRed');
const verdecaja = document.getElementById('ctrGreen');

var colores = document.getElementsByName('gama');
var color = 0;
var pos = 0;
var comienza = true;
var intervalId;
var roto = true;

function inicio() {
    if (comienza) {
        panelesColores.style.setProperty("visibility", "visible");
        panelesPantones.style.setProperty("visibility", "visible");

        colorPulsado();

        intervalId = setInterval(rotar, 500);
    } else {
        apagar();
    }
    comienza = !comienza;//cambiar opcion
}

function colorPulsado() {
    azulcaja.addEventListener('click', function cambiaAzul() {
        color = 1;
    });
    rojocaja.addEventListener('click', function cambiaRojo() {
        color = 2;
    });
    verdecaja.addEventListener('click', function cambiaRojo() {
        color = 3;
    });
}

function rotar() {
    for (let index = 0; index < colores.length; index++) {
        colores[index].style.setProperty("background-color", general[color][pos]);
        pos = (pos + 1) % 4;
        console.log(pos);
    }
    pos++;
    
}

function apagar() {
    color = 0;
    clearInterval(intervalId);
    panelesColores.style.setProperty("visibility", "hidden");
    panelesPantones.style.setProperty("visibility", "hidden");
    rotar();
}

INICIO.addEventListener('click', inicio);
