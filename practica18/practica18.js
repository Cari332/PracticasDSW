function capturarDias() {
    // Creamos un arreglo vacío para almacenar los días de la semana
    var diasSemana = [];

    // Pedimos al usuario que ingrese los días de la semana
    for (var i = 0; i < 7; i++) {
        var dia = prompt("Ingrese el día número " + (i + 1) + " de la semana:");
        diasSemana.push(dia);
    }

    // Mostramos los días capturados en un cuadro de alerta
    var mensaje = "Días de la semana capturados:\n";
    for (var j = 0; j < diasSemana.length; j++) {
        mensaje += "- " + diasSemana[j] + "\n";
    }
    alert(mensaje);
}