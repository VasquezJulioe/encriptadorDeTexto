const botonEncriptar = document.querySelector("#idEncriptar");
const botonDesencriptar = document.querySelector("#idDesencriptar");
const botonCopiar = document.querySelector("#idCopiar");

var cajaTexto = document.querySelector(".cajaTexto");
var munhieco = document.querySelector(".contenedorMunhieco");
var contenedorParrafo = document.querySelector(".contenedorParrafo");
var resultado = document.querySelector(".textoResultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

cajaTexto.focus();

function encriptar(){
    ocultarAdelante();
    resultado.textContent = encriptarTexto(cajaTexto.value);
}

function desencriptar(){
    ocultarAdelante();
    resultado.textContent = desencriptarTexto(cajaTexto.value);
}

function ocultarAdelante() {
    if(cajaTexto.value == ''){
        contenedorParrafo.classList.remove("ocultar");
        munhieco.classList.remove("ocultar");
        document.querySelector('.contenedorResultado').style.display = "none";
        document.querySelector(".contenedorCopiar").style.display = "none";
    }else{
        contenedorParrafo.classList.add("ocultar");
        munhieco.classList.add("ocultar");
        document.querySelector(".contenedorResultado").style.display = "flex";
        document.querySelector(".contenedorCopiar").style.display = "flex";
    }
}

function encriptarTexto(texto) {
    var textoFinal = "";

    for (let i = 0; i < texto.length; i++) {
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai";
        } else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter";
        } else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes";
        } else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober";
        } else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat";
        } else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(texto) {
    var textoFinal = "";

    for (let i = 0; i < texto.length; i++) {
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a";
            i = i + 1;
        } else if(texto[i] == "e"){
            textoFinal = textoFinal + "e";
            i = i + 4;
        } else if(texto[i] == "i"){
            textoFinal = textoFinal + "i";
            i = i + 3;
        } else if(texto[i] == "o"){
            textoFinal = textoFinal + "o";
            i = i + 3;
        } else if(texto[i] == "u"){
            textoFinal = textoFinal + "u";
            i = i + 3;
        } else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

botonCopiar.addEventListener("click", copiar = () => {
    var contenido = resultado.textContent;
    navigator.clipboard.writeText(contenido);
    cajaTexto.value = contenido;
    cajaTexto.focus();
});
