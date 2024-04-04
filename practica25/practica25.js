// función OperacionesMatematicas
function OperacionesMatematicas(operacion, a, b) {
    switch (operacion) {
        case "sumar":
            return a + b;
        case "restar":
            return a - b;
        case "multiplicar":
            return a * b;
        case "dividir":
            if (b !== 0) {
                return a / b;
            } else {
                return "No se puede dividir por cero";
            }
        case "residuo":
            return a % b;
        default:
            return 0;
    }

}