/* Seleccionamos el segundo parrafo y ponemos el evento onclick invocando a la 
funcion saludo
function ejecuta(){
    document.getElementsByTagName("p")[1].onclick=saludo;
}

function saludo(){
    alert("que hay de nuevo");
}            */

/* No funciona 
function ejecuta(){
	document.getElementsByName("importante")[1].onclick=saludo;
}

function saludo(){
    alert("que hay de nuevo");
}            */

/* Seleccionamos el segundo parrafo
function ejecuta() {
document.querySelector(".importante").onclick=saludo;
}

function saludo(){
    alert("que hay de nuevo");
}       */


/* Seleccionamos el ultima elemento que contiene el contenedor con identificador principal
function ejecuta() {
document.querySelector("#principal p:last-child").onclick=saludo;
}

function saludo(){
    alert("que hay de nuevo");
}   */

/* Sin terminar, no funciona */
function ejecuta(){
	var elementos=document.querySelectorAll("#principal p");
		for (var i=0; i<elementos.length; i++) {
			elementos[i].onclick=saludo;
		}
}



/* Con la siguiente sentencia, invocamos la funciona ejecuta al cargar la página */
window.onload=ejecuta;