var huracan = true;

// Funcion para mostrar el aviso de huracan o dia soleado
function avisoHuracan(mensaje) {
    alert(mensaje);
}

// Funcion para verificar si hay un huracan o no
function verificarHuracan(hayHuracan) {
    // Se llama a la funcion avisoHuracan con el valor booleano 
    if (hayHuracan) {
        avisoHuracan("Hay un Huracan"); // Si el usuario confirma que hay huracan
    } else {
        avisoHuracan("Esta Soleado"); // Si el usuario indica que no hay huracan
    }
}

// Llamada a la funcion para verificar el estado del tiempo
verificarHuracan(huracan);