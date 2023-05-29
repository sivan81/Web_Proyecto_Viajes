//Funcionalidad para el slider

//Contiene una mejora: Botones que permiten controlar la navegación a través de las imagenes del slider a modo de reproductor

let myTimeout;

//Botones carrusel

//Anterior
let botonAnterior = document.querySelector('.control .prev');
botonAnterior.addEventListener("click", function() {
    stop();
    previous();
}, false);

//Pausa
let botonPausa = document.querySelector('.control .pause');
botonPausa.addEventListener("click", function() {
    stop();
}, false);

//Play
let botonPlay = document.querySelector('.control .play');
botonPlay.addEventListener("click", function() {
    play();
    show(".pause");
    hide(".play");
}, false);

//Next
let botonNext = document.querySelector('.control .next');
botonNext.addEventListener("click", function() {
    stop();
    next();
}, false);

let posicionActual = 0;

function stop(){
    show(".play");
    hide(".pause");
    clearTimeout(myTimeout);//Desactiva la reproducción automática del slider
}

function play(){
    next();
    myTimeout = setTimeout(play, 1000);//Activa la reproducción automática del slider
}

function next(){
    muestra(true);
}

function previous(){
    muestra(false);
}

function muestra(siguiente){
    let fotos = document.querySelectorAll('.foto');

    //oculta la foto en la posición actual
    fotos[posicionActual].style.display = 'none';
    //pasa a la posición siguiente o anterior
    if(siguiente){
        posicionActual++;
        if(posicionActual >= fotos.length){
            posicionActual = 0;
        }
    }else {
        posicionActual--;
        if(posicionActual <= 0){
            posicionActual = fotos.length-1;
        }
    }

    //muestra la siguiente posición
    fotos[posicionActual].style.display = 'block';
}

function show(clazz){
    let element = document.querySelector(clazz);
    element.classList.remove("control-hide");
}

function hide(clazz){
    let element = document.querySelector(clazz);
    element.classList.add("control-hide");
}

//Animación automatica del slider
play();