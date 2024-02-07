escribeNiveles();

document.querySelectorAll(".reset").forEach(function(element){
    element.addEventListener("click", reset)
});

document.querySelector("#juego-normal").addEventListener("click", iniciaJuegoNormal);

document.querySelector("#juego-relax").addEventListener("click", iniciaJuegoRelax);

document.querySelector("#control-nivel").addEventListener("click", muestraNiveles);

document.querySelector("#cierra-niveles").addEventListener("click", ocultaMenuNiveles);


document.querySelectorAll(".nivel").forEach(function(element){
    element.addEventListener("click", cambiaNivel)
});


document.querySelector("#next").addEventListener("click", cargarNivel);

document.querySelector("body").addEventListener("click", clickFueraDeMenu);

document.addEventListener("keydown", teclaEscCierraMenu);

//Pantalla de Bienvenida

document.querySelector("#bienvenida").classList.add("visible");

let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
            location.reload();
})
