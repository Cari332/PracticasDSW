function verificarParOImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

function obtenerNumeroYVerificar() {
    var numero = prompt("Ingrese un numero:");// pedir el numero
    numero = parseInt(numero); // Convertir a entero

    if (!isNaN(numero)) {
        var resultado = verificarParOImpar(numero);
        alert("El numero " + numero + " es " + resultado + ".");
    } else {
        alert("Por favor, introduce un numero valido.");
    }
}

obtenerNumeroYVerificar();