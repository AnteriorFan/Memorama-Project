function escribeNiveles(){
    var menuNiveles = document.querySelector(".selecciona-nivel ul");
    niveles.forEach(function(elemento, i){
        var controlNivel = document.createElement("li");
        controlNivel.innerHTML = 
        "<button class='nivel' data-nivel=" +
        i +
        ">Nivel " +
        (i + 1) +
        "</button>";
        menuNiveles.appendChild(controlNivel);
    });
}

function cambiaNivel(){
    var nivel = parseInt(this.dataset.nivel);
    nivelActual = nivel;
    actualNivel();
    iniciar();
}

function muestraNiveles(e){
    e.stopPropagation();
    document.querySelector(".selecciona-nivel").classList.toggle("visible");
}

function ocultaMenuNiveles(){
    document.querySelector(".selecciona-nivel").classList.remove("visible");
}

function clickFueraDeMenu(e){
    if(e.target.closest(".selecciona-nivel")){
        return;
    }
    document.querySelector(".selecciona-nivel").classList.remove("visible")
}
function teclaEscCierraMenu(e){
    console.log(e.key);
    if(e.key === "Escape"){
        ocultaMenuNiveles();
    }
}