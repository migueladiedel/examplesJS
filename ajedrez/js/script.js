var numFilas=0;
var numColumnas=0;

window.onload = function() {
	document.getElementById("num_filas").addEventListener("change",dibujarFilas);
	document.getElementById("num_colum").addEventListener("change",dibujarColumnas);
}

function dibujarFilas(e) {
	numFilas=e.target.value;
	//console.log("dibujarFilas: ");
	dibujarTablero(numFilas, numColumnas);
	
}

function dibujarColumnas(e) {
	numColumnas=e.target.value;
	//console.log("dibujarColumnas: ");
	dibujarTablero(numFilas, numColumnas);
}

function dibujarTablero(numFilas,numColumnas){
	var tableroFinal="";
	var negro = true;
	
	for (var i = 0; i < numFilas; i++) {
		tableroFinal+='<div class="fila">';
        for (var j = 0; j < numColumnas; j++){
            if (negro) {
            	tableroFinal+='<div class="cuadrado"></div>';
            }
            else {
            	tableroFinal+='<div class="cuadrado negro"></div>';
            }
            negro = !negro; 
        }
        
        if (!(numColumnas%2)) // Si el número de columnas es par
            negro = !negro; 
        tableroFinal+='</div>'; 
    }
	 document.getElementById('tableroAjedrez').innerHTML =tableroFinal;
	
	
	
}