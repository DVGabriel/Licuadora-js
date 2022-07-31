var estadoLicuadora = "apagada";
var licuadora = document.getElementById("blender");
var botonLicuadora = document.getElementById("blender-button-sound");
var sonidoLicuadora = document.getElementById("blender-sound");

function controlarLicuadora() {

    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendido";
        hacerBrrBrr();
        licuadora.classList.add("active");

    } else {
        estadoLicuadora = "apagada"
        licuadora.classList.remove("active");
        hacerBrrBrr();
    }
}

function hacerBrrBrr() {
    if(sonidoLicuadora.paused){
        botonLicuadora.play();
        sonidoLicuadora.play()
    }else{
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}