const slider = document.querySelector("#slider");
let sliderSeccion = document.querySelectorAll(".seccion__slider");
let sliderSeccionUltimo = sliderSeccion[sliderSeccion.length-1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-rigth");

slider.insertAdjacentElement("afterbegin",sliderSeccionUltimo);

function Siguiente() {
    let sliderSeccionPrimero = document.querySelectorAll(".seccion__slider")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(() => {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend",sliderSeccionPrimero);
        slider.style.marginLeft = "-100%";
    }, 500);    
}

function Anterior() {
    let sliderSeccion = document.querySelectorAll(".seccion__slider");
    let sliderSeccionUltimo = sliderSeccion[sliderSeccion.length-1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(() => {
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin",sliderSeccionUltimo);
        slider.style.marginLeft = "-100%";
    }, 500);    
}


btnRight.addEventListener("click",function() {
    Siguiente();
})

btnLeft.addEventListener("click",function() {
    Anterior();
})

setInterval(() => {
    Siguiente();
}, 4000);