// function iniciarCrono(){
//     var segundos = 0;
//     var minutos = 0;
//     var segundosTexto;
//     var minutosTexto;

//     function actualizador(){

//         segundos++; 
//         if(segundos > 59){
//             segundos = 0o0;
//             minutos++;
//         }
//         segundosTexto = segundos;
//         minutosTexto = minutos;
    
//         if(segundos<10){
//             segundosTexto = "0" + segundos;
//         }
//         if(minutos<10){
//             minutosTexto = "0" + minutos;
//         }
//         document.querySelector("#minutos").innerHTML = minutosTexto;
//         document.querySelector("#segundos").innerHTML = segundosTexto;
//     }

    
    
//     setInterval(actualizador, 1000);
// }

function restarCrono(){
    var segundos = niveles[nivelActual].seg;
    var minutos = niveles[nivelActual].min;
    var segundosTexto;
    var minutosTexto;

    function actualizador(){

        segundos--; 
        if(segundos <0){
            segundos = 59;
            minutos--;
        }
        if(minutos <0){
            segundos = 0o0;
            minutos = 0;
            clearInterval(cronometro);
            timeOver();
        }
        segundosTexto = segundos;
        minutosTexto = minutos;
    
        if(segundos<10){
            segundosTexto = "0" + segundos;
        }
        if(minutos<10){
            minutosTexto = "0" + minutos;
        }
        document.querySelector("#minutos").innerHTML = minutosTexto;
        document.querySelector("#segundos").innerHTML = segundosTexto;
    }

    cronometro= setInterval(actualizador, 1000);
}