function encriptar() {
    const textoEncriptar = document.getElementById("text-area").value;

    document.getElementById("mensajeInformativo").textContent = "";
    document.getElementById("mensaje-alerta").textContent = "";
    document.getElementById("mensaje-copiar").textContent = "";
    document.getElementById("alerta-copiar").textContent = "";
    document.getElementById("alerta-error").textContent = "";

    if (textoEncriptar === "") {
        document.getElementById("mensaje-alerta").textContent = "Por favor, ingresa el texto que deseas encriptar";
        return;
    }

    if(/[^a-z\s]/.test(textoEncriptar)) {
        document.getElementById("alerta-error").textContent = "El texto contiene caracteres no permitidos";
        return;
    }

    const remplazos = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat",   
    };

    let textoEncriptado = textoEncriptar.replace(/[aeiou]/g, function(vocal) {
        return remplazos[vocal];
    });


    /*document.getElementById("mensaje").value = textoEncriptado*/
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = textoEncriptado;
    document.getElementById("text-area").value = "";
    document.getElementById("mensajeInformativo").textContent = "El texto ha sido encriptado";
    mensaje.style.backgroundImage = "none"
}

function desencriptar() {
    const textoEncriptar = document.getElementById("text-area").value;

    document.getElementById("mensajeInformativo").textContent = "";
    document.getElementById("mensaje-alerta").textContent = "";
    document.getElementById("mensaje-copiar").textContent = "";
    document.getElementById("alerta-copiar").textContent = "";
    document.getElementById("alerta-error").textContent = "";

    if(/[^a-z\s]/.test(textoEncriptar)) {
        document.getElementById("alerta-error").textContent = "El texto contiene caracteres no permitidos";
        return;
    }

    if (textoEncriptar === "") {
        document.getElementById("mensaje-alerta").textContent = "Por favor, ingresa el texto que deseas desencriptar";
        return;
    }

    const remplazoInverso = {
       "ai": "a",
       "enter": "e",
       "imes": "i",
       "ober": "o",
       "ufat": "u", 
    };

    let textoDesencriptado = textoEncriptar.replace(/ai|enter|imes|ober|ufat/g, function(palabra) {
        return remplazoInverso[palabra];
    });

    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = textoDesencriptado;
    /*document.getElementById("mensaje-salida").value = textoDesencriptado*/
    document.getElementById("text-area").value = '';
    document.getElementById("mensajeInformativo").textContent = "El texto ha sido desencriptado";
}

function copiar() {
    const mensaje = document.getElementById("mensaje");
    
        document.getElementById("mensajeInformativo").textContent = "";
        document.getElementById("mensaje-alerta").textContent = "";
        document.getElementById("alerta-copiar").textContent = "";
        document.getElementById("mensaje-copiar").textContent = "";
        
    if (mensaje.textContent.trim() === "") {
        document.getElementById("alerta-copiar").textContent = "No hay texto que copiar";
        return;
    }

    const range = document.createRange();
    range.selectNode(mensaje);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
        navigator.clipboard.writeText(mensaje.textContent).then(() => {
            mensaje.textContent = "";
        });

        document.getElementById("mensaje-copiar").textContent = "Texto copiado al portapapeles";

    } catch (err) {
        console.error("Error al copiar el texto: ", err);
    }
}
