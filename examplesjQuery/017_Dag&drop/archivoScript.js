
/* Sin terminar, no funciona */
function ejecuta(){
	var elementos=document.querySelectorAll("#principal p");
		for (var i=0; i<elementos.length; i++) {
			elementos[i].onclick=saludo;
		}
}



/* Con la siguiente sentencia, invocamos la funciona ejecuta al cargar la página */
window.onload=ejecuta;