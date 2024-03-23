// Medrano Cardenas Carina
//Arreglo con los dias de la semana
const diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

// Mostrar los dias de la semana 
for (let i = 0; i < diasSemana.length; i++) {
    alert(diasSemana[i]);
}
// while para sumar los numeros del 1 al 5
let suma = 0;
let num = 1;
while (num <= 5) {
    suma += num;
    num++;
}
alert('Suma del 1 al 5 usando while: ' + suma); // Resultado esperado: 15

// Un do-while para calcular el factorial de 5
let factorial = 1;
let n = 5;
do {
    factorial *= n;
    n--;
} while (n > 0);
alert('Factorial de 5 usando do-while: ' + factorial); // Resultado esperado: 120

// Un for para mostrar el mensaje "Hola" siete veces
for (let i = 1; i <= 7; i++) {
    if (i === 4) {
        alert('Soy el 4to');
    }
    alert('Hola');
    if (i === 7) {
        alert('Acabamos de saludar');
    }
}

// Ejemplo utilizando for-in con arreglo de los primeros 11 meses del año
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'];
alert('Usando for-in:');
for (let index in meses) {
    alert(meses[index]);
}

// Ejemplo con forEach con el mismo arreglo de meses
alert('Usando forEach:');
meses.forEach(mes => {
    alert(mes);
});

// Ejemplo con for-of con el mismo arreglo de meses
alert('Usando for-of:');
for (let mes of meses) {
    alert(mes);
}

// Omitir el mes de Julio y agregar Diciembre fuera del arreglo
meses.push('Diciembre');
alert('Mostrando todos los meses incluyendo Diciembre:');
for (let mes of meses) {
    if (mes !== 'Julio') {
        alert(mes);
    }
}