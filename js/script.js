//---SELECCIÓN DE ELEMENTOS DEL DOM---//
const textArea = document.querySelector(".texto");
const mensaje = document.querySelector(".mensaje");
const btnCopiar = document.querySelector(".btn-copiar");

//LLAVES DE ENCRIPTACIÓN
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

//FUNCIONES

//Validar TextArea
function validarTexto() {
    const textarea = document.getElementById('texto');
    const textoValue = textarea.value;
    
    // Expresión regular que permite solo letras minúsculas
    const regex = /^[a-z\s¡!]*$/;

    if (!regex.test(textoValue)) {
        swal("¡Oooops!", "¡No se permiten acentos, carecteres especiales, letras mayúsculas. Sólo letras minúsculas!.", "warning");
        textarea.value = ""; // Limpiar el textarea si la validación falla
        return false;
    }
    return true;
}

//Evento Input para utilizar la validación del TextArea de encriptación en tiempo real
const textarea = document.getElementById('texto');
textarea.addEventListener('input', function() {
    validarTexto();
});

//Función para encriptar texto
function encriptar(stringEncriptada){

    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let munieco = document.getElementById("munieco");
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    if (texto.length != 0) {
        document.getElementById("texto").value = stringEncriptada;

        for(let i = 0; i<matrizCodigo.length; i++){
            if(stringEncriptada.includes(matrizCodigo[i][0])){
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        }

        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        munieco.src = "./assets/bloqueado.png";
        btnCopiar.style.visibility = "inherit";
        
    } else {
        munieco.src = "./assets/munieco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("¡Oooops!", "¡Debes ingresar algún texto!", "warning");
    }
    return stringEncriptada;
}

//Función para desencriptar texto
function desencriptar(stringDesencriptada){

    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let munieco = document.getElementById("munieco");
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

     if (texto.length != 0) {
        document.getElementById("texto").value = stringDesencriptada;

        for(let i = 0; i<matrizCodigo.length; i++){
            if(stringDesencriptada.includes(matrizCodigo[i][0])){
                stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            }
        }
         
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        munieco.src = "./assets/desbloqueado.png";
    } else {
        munieco.src = "./assets/munieco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("¡Oooops!", "¡Debes ingresar algún texto!", "warning");
    }
    return stringDesencriptada;
}

//BOTONES

//Botón Encriptar
function btnEncriptar(){
    const textoEncriptado = encriptar(texto.value);
    mensaje.value = textoEncriptado;
    texto.value = "";
    mensaje.style.backgroundImage = "none";
}

//Botón Desencriptar
function btnDesencriptar() {
    const textoEncriptado = desencriptar(texto.value);
    mensaje.value = textoEncriptado;
    texto.value = "";
}

//Botón Copiar
btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = mensaje;
    copiar.select();
    document.execCommand("copy");
});

