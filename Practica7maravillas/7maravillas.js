
// Definición de dos arrays: "maravillas" que contiene los nombres de las imágenes de las maravillas del mundo y "correcta" que contiene el índice de la opción correcta para cada pregunta.
let maravillas = ["chichen-itza.svg", "coliseo.svg", "cristo-redentor.svg", "machu-picchu.svg", "muralla-china.svg","petra.svg","taj-mahal.svg"];
let correcta = [1,0,2,1,2,0,1];

// Definición de un array multidimensional "opciones" que contiene las opciones para cada pregunta.
let opciones = [];

// Se llenan las opciones para cada pregunta.
opciones.push(["Machu Picchu", "Chichen Itza", "Coliseo"]);
opciones.push(["Coliseo", "Petra", "Cristo Redentor"]);
opciones.push(["Muralla China", "Taj Mahal", "Cristo Redentor"]);
opciones.push(["Petra", "Machu Picchu", "Taj Mahal"]);
opciones.push(["Chichen Itza", "Petra", "Muralla China"]);
opciones.push(["Petra", "Machu Pichu", "Chichen Itza"]);
opciones.push(["Coliseo", "Taj Mahal", "Cristo Redentor"]);

// Inicialización de variables para seguir el progreso del juego.
let posActual = 0;
let cantidadAcertadas = 0;

// Función que se ejecuta al iniciar el juego.
function comenzarJuego(){
    posActual = 0;
    cantidadAcertadas = 0;
    // Oculta la pantalla inicial y muestra la pantalla de juego.
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    // Carga la primera maravilla.
    cargarMaravilla();
}

// Función para cargar la siguiente maravilla.
function cargarMaravilla(){
    // Verifica si se han mostrado todas las maravillas.
    if(maravillas.length <= posActual){
        terminarJuego(); // Termina el juego.
    }
    else{
        limpiarOpciones(); // Limpia las opciones anteriores.
        // Actualiza la imagen y las opciones en la pantalla.
        document.getElementById("imgMaravilla").src = "img/" + maravillas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

// Función para limpiar el estilo de las opciones.
function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

// Función para comprobar si la respuesta elegida es correcta.
function comprobarRespuesta(opElegida){
    if(opElegida == correcta[posActual]) { // Si la opción elegida es correcta.
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    } else { // Si la opción elegida es incorrecta.
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++; // Incrementa la posición actual para cargar la siguiente pregunta.
    setTimeout(cargarMaravilla, 1000); // Espera 1 segundo y carga la siguiente maravilla.
}

// Función que se ejecuta al terminar el juego.
function terminarJuego(){
    // Oculta la pantalla de juego y muestra la pantalla final.
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    // Actualiza el número de respuestas correctas e incorrectas.
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = maravillas.length - cantidadAcertadas;
}

// Función para volver al inicio del juego.
function volverAlInicio(){
    // Oculta la pantalla final y muestra la pantalla inicial.
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}