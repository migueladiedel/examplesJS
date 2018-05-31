/**
 * @author  Miguel  Ángel Diez Delgado
 */

window.onload = comienzo;
var primeraVez = true;
var primeraVezCambioImg = true;
var colorActual="azul";

function comienzo() {
    //Controla si se ha cambiado el color de la paleta y cambia el color activo
    cambioColor();
    //Controlar la pulsacion de otra imagen
    cambiarImagen();
    //Cambia el color del parrafo  cuando este el cursor sobre el sino se pone de color naranja
    var parrafo = document.getElementById('par');
    crearEvento(parrafo, 'mouseover', entrarParrafo);
    crearEvento(parrafo, 'mouseleave', salirParrafo);
    //Controlar evento click sobre el boton con id confirmar
    var botonConfirmar = document.getElementById('confirmar');
    crearEvento(botonConfirmar, 'click', pulsarConfirmar);
}

function cambioColor(e) {
    var colores = new Array('azul', 'rojo', 'verde');
    var paleta = document.getElementById('color').getElementsByTagName('tr').item(0);
    var numElementos=paleta.getElementsByTagName('td').length;
     
    if (primeraVez){
        primeraVez = false;
        // Asignamos el evento a cada uno de los colores de la paleta de colores
        for (i = 0; i < numElementos; i++) {
            var numColor = paleta.getElementsByTagName('td').item(i);
            crearEvento(numColor, 'mousedown', cambioColor);
        }
    }else{
        for (i = 0; i < numElementos; i++) {
            var numColor = paleta.getElementsByTagName('td').item(i);
            numColor.className = colores[i];
        }
        var elemento=e.target;
        colorActual=elemento.className;
        elemento.className+=" sele";
    }
}

function crearEvento(elemento, tipoEvento, funcion){
    if (elemento.addEventListener){
        //W3C
        elemento.addEventListener(tipoEvento, funcion, false);
    }
}

function cambiarImagen(e) {
    var imagenes = document.getElementById('imagenes').getElementsByTagName('img');
    if (primeraVezCambioImg){
        primeraVezCambioImg = false;
        // Asignamos el evento a cada uno de las imagenes
        for (i = 0; i < imagenes.length; i++) {
            var numImg = imagenes.item(i);
            crearEvento(numImg, 'mousedown', cambiarImagen);
        }
    }else{
       for (i = 0; i < imagenes.length; i++) {
            var numImg = imagenes.item(i);
            numImg.className = "";
        }
        var elemento=e.target;
        elemento.className="sele";
    }
}

function entrarParrafo(e) {
    var parrafo = document.getElementById('par');
    parrafo.className=colorActual;
}

function salirParrafo(e) {
    var elemento=e.target;
    elemento.className="naranja";
}

function pulsarConfirmar(e) {
    var contenedorResultado=document.getElementById('resultado');
    //Vaciamos nodos del div resultado
    contenedorResultado=removeAllChilds("resultado");
    //Añadimos la img seleccionada al array de nodos hijos
    var imagenes = document.getElementById('imagenes').getElementsByTagName('img');
    var imgActual=0;
    for (i = 0; i < imagenes.length; i++) {
        var numImg = imagenes.item(i);
        if (numImg.className==="sele"){
            imgActual=i;
        }
    }
    var img = imagenes.item(imgActual);
    var cloneImg=img.cloneNode(true);
    contenedorResultado.appendChild(cloneImg);
    
    //Creamos el elemento p
    var parrafoTalla = document.createElement("P"); 
    var valorTalla=document.getElementById('tallaje').value;
    var t = document.createTextNode(valorTalla); 
    parrafoTalla.appendChild(t); 
    contenedorResultado.appendChild(parrafoTalla); 
    
    //Creamos el elemento p
    var parrafoTotalCompra = document.createElement("P"); 
    var cantidad=document.getElementById('cant').value;
    var valor=document.getElementById('valor').value;
    var totalCompra = document.createTextNode(cantidad*valor); 
    parrafoTotalCompra.appendChild(totalCompra); 
    contenedorResultado.appendChild(parrafoTotalCompra); 
    
    //cambiar color de fondo
    contenedorResultado.className=colorActual;
   
}

function removeAllChilds(a){
 var a=document.getElementById(a);
 while(a.hasChildNodes()){
    a.removeChild(a.firstChild);	
 }
 return a;
 }