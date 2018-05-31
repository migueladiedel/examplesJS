/**
 * @author  Miguel  Ángel Díez Delgado
 */

var estaActivado = true;
var primeraVez = true;
var colores = new Array('#FF0', '#0F0', '#000', '#F00', '#06C', '#FFF');
var miColor = colores[0];
var numSelecc = 0;
window.onload = comienzo;
function comienzo() {
    //Solicita ancho/alto de cada celda del tablero
    var cadena=prompt("Inserte la altura y anchura de la celda, entre 10 y 20");
	var alturaAnchuraCelda=parseInt(cadena);
	
	//Controla que el numero introducido esta entre 10 y 20
	while(!(alturaAnchuraCelda < 21 && alturaAnchuraCelda > 9)){
		cadena=prompt("Inserte la altura y anchura de la celda, entre 10 y 20");
		alturaAnchuraCelda=parseInt(cadena);
	};
		
	//creamos el tablero con alto y ancho solicitados o 10px por defecto
    crearTablero(alturaAnchuraCelda);
    //Controla si se ha cambiado el color de la paleta y cambia el color activo
    cambioColor();
    //controla los evento relacionados con pintar cuando se produzca el evento mouseover
    //sobre cada celda del tablero
    comenzarPintar();
}

function crearEvento(elemento, tipoEvento, funcion){
    if (elemento.addEventListener){
        //W3C
        elemento.addEventListener(tipoEvento, funcion, false);
    }
}
function removerEvento(elemento, tipoEvento, funcion){
    if (elemento.removeEventListener) {
        //W3C
        elemento.removeEventListener(tipoEvento, funcion);
    }
}

function pintar() {
    this.setAttribute('bgcolor', miColor);
}

function crearTablero(alturaAnchuraCelda) {
    //Comprobamos que el valor es numerico y no es una cadena vacia
    if (isNaN(alturaAnchuraCelda)){alturaAnchuraCelda="";}
    if (alturaAnchuraCelda==="") alturaAnchuraCelda=10;
	
	//Creacion mediante DOM del tablero
    var table = document.createElement('table');
    table.setAttribute('id', 'miTabla');
    table.style.align = 'center';
    table.style.border = '2';
    table.style.borderColor = 'black';
    table.style.borderStyle = 'solid';
    table.style.padding = '0px';
    table.style.spacing = '0px';
    table.style.margin = '0px';
    
    // Creación de la tabla de dibujo
    for (i = 1; i <= 30; i++) {
        // Creamos el elemento TR-fila
        var fila = document.createElement('tr');
        fila.style.padding = '0px';
        fila.style.spacing = '0px';
        fila.style.margin = '0px';
        // Creamos 30 TD-celda por cada TR-fila
        for (j = 1; j <= 30; j++) {
            var bx = "celda_" + i + "_" + j;
            var celda = document.createElement('td');
            celda.setAttribute('id', bx);
            celda.style.width = alturaAnchuraCelda+'px';
            celda.style.height = alturaAnchuraCelda+'px';
            celda.style.border = '1px';
            celda.style.borderColor = 'grey';
            celda.style.borderStyle = 'solid';
            celda.style.padding = '0px';
            celda.style.spacing = '0px';
            celda.style.margin = '0px';
            //Asginamos a cada celda que cuando ocurra el evento mousedown se llame al evento comenzarPintar
            crearEvento(celda, 'mousedown', comenzarPintar);
            // Añadimos los 30 celda al actual fila
            fila.appendChild(celda);
        }
        // Añadimos cada uno de los 30 filas dentro de la tabla
        table.appendChild(fila);
    }
    // Ponemos un mensaje explicativo sobre la capa zonadibujo
    document.getElementsByTagName('p').item(1).innerHTML = "Haga CLICK en cualquier celda para activar/desactivar el Pincel";
    // Asignamos al tablero la capa zonadibujo
    var tablero = document.getElementById('zonadibujo');
    // Añadimos a zonadibujo la tabla creada anteriormente (30 x 30)
    tablero.appendChild(table);
    
    return tablero;
}
// Función que cambia el color según nuestra pulsación sobre los colores
function cambioColor() {
    if (primeraVez){
        primeraVez = false;
        // Ponemos en la paleta la primera fila-TR de la tabla(paleta de colores)
        //Asignamos por defecto el color 0 - #FF0
        var paleta = document.getElementById('paleta').getElementsByTagName('tr').item(0);
        // Asignamos el evento a cada uno de los colores de la paleta de colores
        for (i = 0; i < this.colores.length; i++) {
            var numColor = paleta.getElementsByTagName('td').item(i);
            numColor.className = "color" + (i + 1);
            crearEvento(numColor, 'mousedown', cambioColor);
        }
        // Seleccionamos el primer color por defecto. Cuando pulsemos en otro color cambiará
        seleccionado=paleta.getElementsByTagName('td').item(0);
        seleccionado.className+=" seleccionado";
    }else{
        // Ponemos en la paleta la primera fila-TR de la tabla(paleta de colores)
        var paleta = document.getElementById('paleta').getElementsByTagName('tr').item(0);
        // Ponemos todos los colores con la clase color y su número y así conseguimos
        // quitarle la clase seleccionado al que la tuviese
        for (i = 0; i < colores.length; i++) {
            var numColor = paleta.getElementsByTagName('td').item(i);
            numColor.className = "color" + (i + 1);
        }
        //Hacemos un substring para saber el color seleccionado
        numSel = this.className.substring(5, 6) - 1;
        this.className = this.className + " seleccionado";
        //Lo marcamos como color activo
        miColor = colores[numSel];
    }
}

function comenzarPintar() {
    //Si el pincel esta activo lo desactivamos y viceversa
    if (estaActivado) {
        estaActivado = false;
        //Cambiamos el mensaje en el contenedor con id pincel
        document.getElementById('pincel').innerHTML = "PINCEL DESACTIVADO...";
        //eliminamos los eventos asociados a cada celda del tablero
        for (i = 1; i <= 30; i++) {
            for (j = 1; j <= 30; j++) {
                var capa = "celda_" + i + "_" + j;
                removerEvento(document.getElementById(capa), 'mouseover', pintar);
            }
        }
    } else {
        estaActivado = true;
        //Cambiamos el mensaje en el contenedor con id pincel
        document.getElementById('pincel').innerHTML = "PINCEL ACTIVADO...";
        //Añadimos los eventos del click del raton sobre las celdas del tablero
        for (i = 1; i <= 30; i++) {
            for (j = 1; j <= 30; j++) {
                var capa = "celda_" + i + "_" + j;
                crearEvento(document.getElementById(capa), 'mouseover', pintar);
            }
        }
    }
}