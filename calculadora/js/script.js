var digitoActual=0;
var sumatorio=new Array();
var operacion=null;
var total=0;
var copiaTotal=0;



window.onload = function() {
	//Ponemos en el elemento gráfico 0
	document.getElementById("display").value=0;
	for (var i = 0; i < 10; i++) {
		//document.getElementById("num"+i).addEventListener("click", clickNumeros.bind(null,i));
		document.getElementById("num"+i).addEventListener("click", clickNumeros);
	}
	//con class
	/*for (var i = 0; i < 10; i++) {
		document.getElementsByClassName("teclasNumericas")[i].addEventListener("click", clickNumeros);
	}
	console.log(document.getElementsByClassName("teclasNumericas").length);
	*/
	
	document.getElementById("buttonMas").addEventListener("click",clickOperacionSuma);
	document.getElementById("buttonMenos").addEventListener("click",clickOperacionResta);
	document.getElementById("buttonComa").addEventListener("click",clickOperacionInsertarComa);
	document.getElementById("buttonMulti").addEventListener("click",clickOperacionMulti);
	document.getElementById("buttonDividir").addEventListener("click",clickOperacionDivi);
	document.getElementById("numRaiz").addEventListener("click",clickOperacionRaiz);
	document.getElementById("buttonC").addEventListener("click",clickOperacionBorrar);
	document.getElementById("buttonRetroceso").addEventListener("click",clickOperacionRetroceso);
	document.getElementById("buttonIgual").addEventListener("click",clickOperacionIgual);

}

function clickNumeros(e) {
	numero=e.target.value;
	if (document.getElementById("display").value==copiaTotal) {
		document.getElementById("display").value=0;
	}
	digitoActual=document.getElementById("display").value;
	//Lo convertimos a Numeric para que no permita 0 a la izquierda
	document.getElementById("display").value=parseFloat(digitoActual+numero,10);
	digitoActual=document.getElementById("display").value;
		
	//console.log("digitoActual: "+digitoActual);
}

function clickOperacionInsertarComa() {
	if (document.getElementById("display").value==copiaTotal) {
		document.getElementById("display").value=0;
	}
	if (digitoActual.indexOf('.')==-1) {
		document.getElementById("display").value=digitoActual+'.';
		console.log("digitoActual: "+digitoActual);
	}
}

function clickOperacionSuma() {
	//Declaramos tipo de operacion iniciada
	operacion="s";
	//Reseteamos el display a 0
	document.getElementById("display").value=0;
		
	//Agregamos el numero al array y le quitamos los 0 a la izquierda
	sumatorio.push(parseFloat(digitoActual,10));
	console.log("Operacion suma: "+parseFloat(digitoActual,10));
}

function clickOperacionResta() {
	//Declaramos tipo de operacion iniciada
	operacion="r";
	
	//Reseteamos el display a 0
	document.getElementById("display").value=0;
		
	//Agregamos el numero al array y le quitamos los 0 a la izquierda
	sumatorio.push(parseFloat(digitoActual,10));
	console.log("Operacion resta: "+parseFloat(digitoActual,10));
}


function clickOperacionMulti() {
	//Declaramos tipo de operacion iniciada
	operacion="m";
	
	//Reseteamos el display a 0
	document.getElementById("display").value=0;
	//Agregamos el numero al array y le quitamos los 0 a la izquierda
	sumatorio.push(parseFloat(digitoActual,10));
	//console.log("Operacion multiplicacion: "+parseFloat(digitoActual,10));
}

function clickOperacionDivi() {
	//Declaramos tipo de operacion iniciada
	operacion="d";
	
	//Reseteamos el display a 0
	document.getElementById("display").value=0;
	//Agregamos el numero al array y le quitamos los 0 a la izquierda
	sumatorio.push(parseFloat(digitoActual,10));
	//console.log("Operacion multiplicacion: "+parseFloat(digitoActual,10));
}

function clickOperacionRaiz() {
	//Declaramos tipo de operacion iniciada
	operacion="R";
	//Reseteamos el display a 0
	document.getElementById("display").value=0;
	//Agregamos el numero al array y le quitamos los 0 a la izquierda
	sumatorio.push(parseFloat(digitoActual,10));
}


function clickOperacionBorrar() {
	document.getElementById("display").value=0;
	digitoActual=0;
}

function clickOperacionRetroceso() {
	var longitud=digitoActual.length;
	digitoActual=digitoActual.substr(0,longitud-1) //quitar el ultimo caracter
	//controlar si solo falta 1 digito poner 0
	if (longitud==1) {
		digitoActual=0;
	}  
	document.getElementById("display").value=digitoActual;
}


function clickOperacionIgual() {
	switch (operacion) {
	case "s":
		console.log("entra en sumar");
		//Agregamos el ultimo numero al array y le quitamos los 0 a la izquierda
		sumatorio.push(parseFloat(digitoActual,10));
		for (var i = 0; i < sumatorio.length; i++) {
			total+=sumatorio[i];
			console.log("Posicion del array"+i+" valor: "+sumatorio[i]);
		}
		console.log("Longitud array "+sumatorio.length);
		break;
	case "r":
		console.log("entra en restar");
		//Agregamos el ultimo numero al array y le quitamos los 0 a la izquierda
		sumatorio.push(parseFloat(digitoActual,10));
		total=sumatorio[0];
		for (var i = 1; i < sumatorio.length; i++) {
			total-=sumatorio[i];
			console.log("Posicion del array"+i+" valor: "+sumatorio[i]);
		}
		console.log("Longitud array "+sumatorio.length);
		console.log("Total: "+total);
		break;
	case "R":
		console.log("entra en Raiz Cuadrada");
		total=Math.sqrt(parseFloat(sumatorio[0]));
		console.log("Total: "+total);
		break;
			
	case "m":
		console.log("entra en multiplicar");
		//Agregamos el ultimo numero al array y le quitamos los 0 a la izquierda
		sumatorio.push(parseFloat(digitoActual,10));
		total=sumatorio[0];
		for (var i = 1; i < sumatorio.length; i++) {
			total*=sumatorio[i];
			console.log("Posicion del array"+i+" valor: "+sumatorio[i]);
		}
		console.log("Longitud array "+sumatorio.length);
		console.log("Total: "+total);
		break;
	case "d":
		console.log("entra en dividir");
		//Agregamos el ultimo numero al array y le quitamos los 0 a la izquierda
		sumatorio.push(parseFloat(digitoActual,10));
		total=sumatorio[0];
		for (var i = 1; i < sumatorio.length; i++) {
			total/=sumatorio[i];
			console.log("Posicion del array"+i+" valor: "+sumatorio[i]);
		}
		break;

	default:
		break;
	}
	
	//Mostramos el resultado
	document.getElementById("display").value=total;
	copiaTotal=total;
	digitoActual=total;
	//Vaciamos array sumatorio
	sumatorio.length=0;
	total=0;
	//console.log("Longitud array Final Igual "+sumatorio.length);
}


