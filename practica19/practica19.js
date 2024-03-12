document.addEventListener('DOMContentLoaded', function() {
    var valores = [true, 10, false, "codigo", "herramientas", 7];
    
    // Determinar cuál de los dos elementos de texto es mayor
    var texto1 = valores[3];
    var texto2 = valores[4];
    var textoMayor = texto1.length > texto2.length ? texto1 : texto2;

    // Utilizando exclusivamente los dos valores booleanos del array,
    // determinar los operadores necesarios para obtener un resultado true y otro resultado false
    var operadorTrue = valores[0] && valores[2];
    var operadorFalse = valores[0] || valores[2];

    // Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
    var num1 = valores[1];
    var num2 = valores[5];
    var suma = num1 + num2;
    var resta = num1 - num2;
    var multiplicacion = num1 * num2;
    var division = num1 / num2;
    var modulo = num1 % num2;

    // Mostrar los resultados en el contenedor
    var resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `
        <p>El texto más largo es: ${textoMayor}</p>
        <p>Operador para obtener true: ${operadorTrue}</p>
        <p>Operador para obtener false: ${operadorFalse}</p>
        <p>Suma: ${suma}</p>
        <p>Resta: ${resta}</p>
        <p>Multiplicación: ${multiplicacion}</p>
        <p>División: ${division}</p>
        <p>Módulo: ${modulo}</p>
    `;
});