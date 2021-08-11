// <!-- JAVASCRIPT -->

// MENU HAMBURGUESA

const enlaces = document.getElementsByClassName("enlaces")[0];
const hamburguesa = document.getElementsByClassName("hamburguesa")[0];
const menuHamburguesa = document.getElementById("hamburguesa");
let abierto = false;

// Agrega una clase "enlaces2" a enlaces para poder ejecutar el transform

function menuLateral() {
    enlaces.classList.toggle("enlaces2");
    enlaces.style.transition = "transform 1s ease-in-out";
}

// ponemos el boton a la escucha para ejecutar la funcion

hamburguesa.addEventListener("click",function(){
    menuLateral();
    if (document.querySelector(".enlaces.enlaces2")) {
        abierto=true;
    }else{
        abierto=false;
    }
})

// Cerramos el menu cuando hacemos click en cualquier parte de la pantalla

window.addEventListener("click", function(e){
    if(abierto){
        if(e.target !== menuHamburguesa){
            menuLateral();
            abierto=false;
        }
    }
})

// cerrar el menu si el usuario modifica el tamaño de la ventana / o se cambia la direccion de la pantalla en la resolucion de corte

window.addEventListener("resize", function(){
    if(screen.width > 800){
        if(abierto){
            menuLateral();
            enlaces.style.transition = "none";
            abierto = false;
        }
    }
})