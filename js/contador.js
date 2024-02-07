function contadores(){
    var movimientoTexto;
    move++;
    movimientoTexto = move;

    if(move > niveles[nivelActual].moveMax && !modoRelax){
        gameOver();
        return;
    }

    if(move < 10){
        movimientoTexto = "0" + move;
    }
    document.querySelector("#mov").innerHTML = movimientoTexto;
    console.log(movimientoTexto);
}

function maxContadores(){
    var movimientoMaxTexto = niveles[nivelActual].moveMax;
    if(movimientoMaxTexto < 10){
        movimientoMaxTexto = "0" + movimientoMaxTexto;
    }
    document.querySelector("#mov-total").innerHTML = movimientoMaxTexto;
}