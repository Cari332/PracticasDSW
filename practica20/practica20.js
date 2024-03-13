var num1 = 5;
var num2 = 8;

if (num1 <= num2) {
    alert(num1 + " no es mayor que " + num2);
    if (num2 >= 0) {
        alert(num2 + " es un numero positivo");
    }
    if (++num1 < num2) {
        alert("Incrementar uno en " + num1 + " no lo hace mayor que " + num2);
    }
} else {
    alert(num1 + " es mayor que " + num2);
}
