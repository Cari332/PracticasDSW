
// Definición de dos arrays: "maravillas" que contiene los nombres de las imágenes de las maravillas del mundo y "correcta" que contiene el índice de la opción correcta para cada pregunta.
let personajes = ["Rapunzel.svg", "Ariel.svg", "TinkerBell.svg", "Stitch.svg", "FaMulan.svg","PeterPan.svg","Tiana.svg","Russell.svg","Boo.svg","Merida.svg"];
let correcta = [3,0,2,1,2,0,1,2,2,1];

// Definición de un array multidimensional "opciones" que contiene las opciones para cada pregunta.
let opciones = [];

// Se llenan las opciones para cada pregunta.
opciones.push(["Ariel", "Cenicienta", "Bella","Rapunzel"]);
opciones.push(["Ariel", "Flouder", "Ursula","Attina"]);
opciones.push(["Rosetta", "Silvermist", "Tinker Bell","Iridessa"]);
opciones.push(["Lilo", "Stitch", "Rouben","Nani Pelekai"]);
opciones.push(["Mushu", "Li Shang", "Fa Mulan","Fa Li"]);
opciones.push(["Peter Pan", "Capitan Garfio", "Campanita","Wendy Darling"]);
opciones.push(["Principe Naveen", "Tiana", "Charlotte","Ray"]);
opciones.push(["Ellie", "Kevin", "Russell","Carl Fredricksen"]);
opciones.push(["Mike Wazowski", "James P. Sullivan", "Boo","Roz"]);
opciones.push(["Reina Elionor", "Princesa Merida", "La Bruja","Rey Fergus"]);

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
    cargarPersonajes();
}

// Función para cargar la siguiente maravilla.
function cargarPersonajes(){
    // Verifica si se han mostrado todas las maravillas.
    if(personajes.length <= posActual){
        terminarJuego(); // Termina el juego.
    }
    else{
        limpiarOpciones(); // Limpia las opciones anteriores.
        // Actualiza la imagen y las opciones en la pantalla.
        document.getElementById("imgPersonajes").src = "img/" + personajes[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
        document.getElementById("n3").innerHTML = opciones[posActual][3];
    }
}

// Función para limpiar el estilo de las opciones.
function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("n3").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
    document.getElementById("l3").className = "letra";
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
    setTimeout(cargarPersonajes, 1000); // Espera 1 segundo y carga la siguiente maravilla.
}

// Función que se ejecuta al terminar el juego.
function terminarJuego(){
    // Oculta la pantalla de juego y muestra la pantalla final.
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    // Actualiza el número de respuestas correctas e incorrectas.
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = personajes.length - cantidadAcertadas;
}

// Función para volver al inicio del juego.
function volverAlInicio(){
    // Oculta la pantalla final y muestra la pantalla inicial.
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}