var modoRelax = false;
var cronometro;
var seg = 0;
var min = 0;
var move = 0;
var nivelActual = 0;

var grupTarjetas1 = [
["🩸","🩻"],
["🩸","🩻","🛖","🏺"],
["🎲","🧩","🥍", "🏇"],
["⚒️","👾","🤖","🎡","🖼️"],
["🕴️","🛠️","🥯","🌮","🍦","🥧"],
["🥐","🥖","🧠","🫣","🤯","😶‍🌫️","🥶"],
["🎏","🎃","🫔","🥠","🫖","🍶","🍻","🧋","🏺"]];

var niveles = [
{
    tarjetas: grupTarjetas1[0],
    moveMax: 3,
    seg:10,
    min: 0o0
},
{
    tarjetas: grupTarjetas1[1],
    moveMax: 6,
    seg:20,
    min: 0o0
},
{
    tarjetas: grupTarjetas1[2],
    moveMax: 6,
    seg:20,
    min: 0o0
},
{
    tarjetas: grupTarjetas1[3],
    moveMax: 7,
    seg:25,
    min: 0o0
},
{
    tarjetas: grupTarjetas1[4],    
    moveMax: 10,
    seg:30,
    min: 0o0
},
{
    tarjetas: grupTarjetas1[1].concat(grupTarjetas1[2]),
    moveMax: 10,
    seg:30,
    min: 0o0
},
{
    tarjetas: grupTarjetas1[3].concat(grupTarjetas1[1]),
    moveMax: 10,
    seg:30,
    min: 0o0
},
{
    tarjetas: grupTarjetas1[5],
    moveMax: 10,
    seg:40,
    min: 0o0
},
{
    tarjetas: grupTarjetas1[4].concat(grupTarjetas1[0]),
    moveMax: 11,
    seg:45,
    min: 0o0
}
];

// function aleatorio() {

//     var random = Math.floor(Math.random() * grupTarjetas1.length);

//     return grupTarjetas1[random];
// }


function barajaTarjetas(lasTarjetas) {
    var resultado;
    var grupoTarjetas = lasTarjetas.concat(lasTarjetas);
    resultado = grupoTarjetas.sort(function () {
        return 0.6 - Math.random();
    });
    return resultado;
}

