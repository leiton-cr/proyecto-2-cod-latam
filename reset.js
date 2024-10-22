window.onload = function() {
    xPos = icono.offsetWidth / 2; // Centrar en el ancho
    yPos = icono.offsetHeight / 2; // Centrar en el alto
    icono.style.transform = `translate(${xPos}px, ${yPos}px)`;
};

window.onresize = function() {
    xPos = icono.offsetWidth / 2; // Centrar en el ancho
    yPos = icono.offsetHeight / 2; // Centrar en el alto
    icono.style.transform = `translate(${xPos}px, ${yPos}px)`;
};