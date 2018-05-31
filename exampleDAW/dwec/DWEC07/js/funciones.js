/////////////////////////////////////////////////////////
// Función para crear objeto XMLHttpRequest
/////////////////////////////////////////////////////////
function objetoXHR() {
    if (window.XMLHttpRequest) {
        // El navegador implementa la interfaz XHR de forma nativa
        return new XMLHttpRequest();
    } 
    

    /* Si llegamos aquí es porque el navegador no posee ninguna forma de crear el objeto.
     Emitimos un mensaje de error usando el objeto Error. 
     
     Más información sobre gestión de errores en:
     http://www.javascriptkit.com/javatutors/trycatch2.shtml */

    throw new Error("No se pudo crear el objeto XMLHttpRequest");
}

/////////////////////////////////////////////////////////
// Función para añadir Eventos
/////////////////////////////////////////////////////////
function crearEvento(id, tipoEvento, funcion) {
    //W3C
    document.getElementById(id).addEventListener(tipoEvento, funcion, false);
    
}


/////////////////////////////////////////////////////////
// Función cross-browser para modificar el contenido
// de un DIV
/////////////////////////////////////////////////////////
function textoDIV(nodo, texto) {
    while (nodo.firstChild)
        nodo.removeChild(nodo.firstChild); // Eliminamos todos los hijos de ese objeto.
    // Cuando ya no tenga hijos, agregamos un hijo con el texto que recibe la función.
    nodo.appendChild(document.createTextNode(texto));
}

/////////////////////////////////////////////////////////
// Función activarIndicadorAjax: activa el gif animado
// indicando que se está ejecutando una petición AJAX.
// Es necesario tener un contenedor en el documento con el id="indicador".
/////////////////////////////////////////////////////////
function activarIndicadorAjax() {
    // Activamos el indicador Ajax antes de realizar la petición.
    $("#indicador").html("<img src='img/ajax-loader.gif'/>");
    $("#indicador").fadeIn(500);
}

/////////////////////////////////////////////////////////
// Función desactivarIndicadorAjax: desactiva el gif animado
// que indicaba que se estaba ejecutando una petición AJAX.
// Es necesario tener un contenedor en el documento con el id="indicador".
/////////////////////////////////////////////////////////
function desactivarIndicadorAjax() {
    $("#indicador").fadeOut(500);
}


/////////////////////////////////////////////////////////
// Función cargarAsync: carga el contenido de la url
// usando una petición AJAX a la url indicada y llamará a
// la funcionRetorno cuando termine la petición AJAX.
/////////////////////////////////////////////////////////
function cargarAsync(url) {
    if (miXHR) {
        activarIndicadorAjax();
        //Si existe el objeto  miXHR
        miXHR.open('GET', url, true); //Abrimos la url, true=ASINCRONA 
        // Hacemos la petición al servidor. Como parámetro: null ya que los datos van por GET
        miXHR.send(null);
    }
}