let slider = document.querySelector('.slider-contenedor');
let sliderIndividual = document.querySelectorAll('.slider-test');
let contador = 1;
let tamanioWidth = sliderIndividual[0].clientWidth;
let intervalo = 1800; //3 segundos

window.addEventListener('resize', function() {
    let tamanioWidth = sliderIndividual[0].clientWidth;
})

setInterval(function tiempo() {
    slides();
}, intervalo);

function slides() {

    slider.style.transform = 'translate(' + (-tamanioWidth * contador) + 'px)';
    slider.style.transition = 'transform 1s';

    contador++;

    //para que se vuelva a ver la tarjeta 1

    if (contador == sliderIndividual.length) {
        contador = 0;

        setTimeout(function() {
            slider.style.transform = 'translate(0px)';
            slider.style.transition = 'transform 0s';
        }, intervalo)
    }

}