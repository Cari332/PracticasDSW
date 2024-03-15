function calcularPeso() {
    var pesoTierra = parseFloat(document.getElementById("pesoTierra").value);
    var planeta = document.getElementById("planeta").value;
    var resultado;

    if (pesoTierra < 1) {
        alert("Por favor, ingrese un peso válido en la Tierra.");
    } else {

    switch (planeta) {//switch de las opciones
        case "marte":
            var pesoMarte = 0.38 * pesoTierra; // Peso en Marte (38% de la gravedad en la Tierra)
            resultado = pesoMarte
            document.getElementById("resultado").innerHTML = "El peso en Marte es: " + resultado + " kg";
            break;
        case "jupiter":
            var pesoJupiter = 2.64 * pesoTierra; // Peso en Jupiter (264% de la gravedad en la Tierra)
            resultado = pesoJupiter
            document.getElementById("resultado").innerHTML = "El peso en Jupiter es: " + resultado + " kg";
            break;
        default:
            document.getElementById("resultado").innerHTML = "Por favor, seleccione un planeta de las opciones";
            break;
    }
}
}