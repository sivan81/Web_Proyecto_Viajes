//Funcionalidad para el menú y navegación 
//Menu hamburguesa on
function showNav(){
    let nav = document.querySelector('nav');
    nav.classList.add("on");
}

//Menu hamburguesa off
function hideNav(){
    let nav = document.querySelector('nav');
    nav.classList.remove("on");
}

//Cambiar menú y mostrar boton flotante en scroll
window.onscroll=function () {
    let menu = document.querySelector('.menu');
    let boton = document.querySelector('.float');
    if (document.scrollingElement.scrollTop > 534){
        menu.classList.add("white");
        menu.classList.remove("black");
        
        boton.classList.add("show");
    }else{
        menu.classList.add("black");
        menu.classList.remove("white");
        
        boton.classList.remove("show");
    }
};