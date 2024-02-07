function subeNivel(){
    nivelActual++;
}

function actualNivel(){
    var nivelTexto = nivelActual + 1;
    if(nivelActual <10){
        nivelTexto = "0" + nivelTexto;
    }
    document.querySelector("#nivel").innerText = nivelTexto;
}

function cargarNivel(){
    subeNivel();
    actualNivel();
    iniciar();
}

function gameOver(){
    clearInterval(cronometro);
    document.querySelector("#gameOver").classList.add("visible");
}

function timeOver(){
    document.querySelector("#timeOver").classList.add("visible");

}

function iniciar(){
    move = 0;
    reparteTarjeta(niveles[nivelActual].tarjetas);
    document.querySelector("#mov").innerText = "00";
    maxContadores()
    document.querySelector(".selecciona-nivel").classList.remove("visible");
    
    document.querySelector("#endGame").classList.remove("visible");
    document.querySelector("#timeOver").classList.remove("visible");
    document.querySelector("#gameOver").classList.remove("visible");
    document.querySelector("#subeNivel").classList.remove("visible");
    
    document.querySelectorAll(".tarjeta").forEach(
        function(element){
            element.addEventListener("click", descubir);
        }
    );

    if(!modoRelax){
        restarCrono();
    }else{
        document.querySelector("#cronometro").classList.add("cronometro-oculto");
    }
}

function reset(){
    nivelActual = 0;
    actualNivel();
    iniciar();
}


function iniciaJuegoNormal(){
    modoRelax = false;
    document.querySelector("#bienvenida").classList.remove("visible");
    iniciar();
    document.querySelector(".control-nivel").classList.add("control-oculto");
}

function iniciaJuegoRelax(){
    modoRelax = true;
    document.querySelector("#bienvenida").classList.remove("visible");
    iniciar();
}