const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector("#mensaje-encriptado")
const copiarbtn = document.getElementById("copiar")



/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = ""
    mensaje.style.backgroundImage = "none"
    copiarbtn.style.display = "block"
    
} 


function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = ""
    mensaje.style.backgroundImage = "none"
    copiarbtn.style.display = "block"
} 


function btnCopiar(){
    const copiarTexto = mensaje.value;
    if(copiarTexto!=""){
        navigator.clipboard.writeText(copiarTexto);
        textArea.value = "";
        textArea.focus();
        alert("texto copiado al portapapeles")
       
    }else{
        textArea.focus();
        alert("No se puede copiar, aún no ha encriptado o desencriptado ningun texto.")
       
    }
}





function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase()
    
    for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptado.includes(matrizCodigo[i][0])) {
        stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0] , matrizCodigo[i][1])
    }

}
return stringEncriptado

}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]]
    stringDesencriptado = stringDesencriptado.toLowerCase()
    
    for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptado.includes(matrizCodigo[i][1])) {
        stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])
    }

}
return stringDesencriptado

}


/*
  function copiarTexto() {
    let campoTexto = document.getElementById("mensaje-encriptado");
    
    campoTexto.select();
    campoTexto.setSelectionRange(0, 99999);
    document.execCommand("copy");
    
   
 }
 */

 

 



