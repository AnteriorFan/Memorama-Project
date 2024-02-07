function finish(){
    clearInterval(cronometro);
    if(nivelActual < niveles.length - 1){
        document.querySelector("#subeNivel").classList.add("visible");
    }else{
        document.querySelector("#endGame").classList.add("visible");
    }
    
}

function reparteTarjeta(lasTarjetas){
    var mesa = document.querySelector("#mesa");
    var tarjetasListas = barajaTarjetas(lasTarjetas);

    mesa.innerHTML="";

    tarjetasListas.forEach(function(element) { 
        var tarjeta = document.createElement("div");

        tarjeta.innerHTML = 

            "<div class='tarjeta' data-valor="+
                element+
            ">" +
                "<div class='tarjeta__contenido'>"
                +element+
                "</div>" +
            "</div>"

        ;

        mesa.appendChild(tarjeta); 
    });
}

function descubir(){
    var descubiertas;
    var tarjetasPende;
    var tarjetasDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)");

    // this.getAttribute("class");
    if(tarjetasDescubiertas.length >1){
        return;
    }

    this.classList.add("descubierta");
    document.querySelector("#sonido-carta").cloneNode().play();

    descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
    if(descubiertas.length <2){
        return;
    }
   

    comparar(descubiertas);
    contadores();

    tarjetasPende = document.querySelectorAll(".tarjeta:not(.acertada)")
    if(tarjetasPende.length === 0){
        setTimeout(finish(), 1000);
    }
}

function comparar(tarjetasComparadas){


    if(tarjetasComparadas[0].dataset.valor == tarjetasComparadas[1].dataset.valor){
        acierto(tarjetasComparadas);
        console.log("Acierto");
    }else{
        error(tarjetasComparadas);
        console.log("error");
    }
}

function acierto(tarjetitas){
    tarjetitas.forEach(function(element){
        element.classList.add("acertada");
    });
    document.querySelector("#sonido-acierto").play();

}

function error(tarjetitas){
    tarjetitas.forEach(function(element){
        element.classList.add("error");
    });
    document.querySelector("#sonido-error").play();


    setTimeout(
        function(){
            tarjetitas.forEach(function(element){
                element.classList.remove("descubierta");
                element.classList.remove("error");
            });
        }, 1000);

}

