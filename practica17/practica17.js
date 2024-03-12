 // Realizamos las operaciones con dos numeros establecidos
var numero1 = 1400;
var numero2 = 200;
var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;

alert("La suma es: " + suma + " La resta es: " + resta + " La multiplicacion: "+ multiplicacion +" La division: " + division + " Gracias :D");

function calcular() {
    // Obtenemos los valores de los números ingresados por el usuario
    var num3 = parseFloat(document.getElementById('num3').value);
    var num4= parseFloat(document.getElementById('num4').value);

    // Realizamos las operaciones para los dos numeros del usuario
    var suma2 = num3 + num4;
    var resta2 = num3 - num4;
    var multiplicacion2 = num3 * num4;
    var division2 = num3 / num4;

    // Mostramos los resultados en un cuadro de alerta
    alert("El resultado de la suma es: " + suma2 + 
          "\nEl resultado de la resta es: " + resta2 + 
          "\nEl resultado de la multiplicación es: " + multiplicacion2 +
          "\nEl resultado de la división es: " + division2);
}