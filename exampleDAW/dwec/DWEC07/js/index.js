/**
 * @author  Miguel  Ángel Díez Delgado
 */

// Cuando se cargue la página se llama a la función comienzo
window.onload = iniciar;
var arrayRSS = new Array;
var registro = 0;

// Activamos los eventos de los botones y contabilizar los registros en la BD
function iniciar() {
    crearEvento("anterior", 'click', anterior);
    crearEvento("siguiente", 'click', siguiente);
    crearEvento("crearRSS", 'click', insertar);
    crearEvento("borrarRSS", 'click', borrar);
    crearEvento("campoSelect", 'change', cambioOpcion);
    cargarRSS('recursosRSS');
}
//Controlamos el cambio de datos al pulsar en el comboBox
function cambioOpcion() {
    var id = document.getElementById("campoSelect").value;
    for (var i = 0; i < arrayRSS.length; i++) {
        var buscaId=arrayRSS[i][1].indexOf(id);
        if ( buscaId !== -1){
            registro = i;
            break;
        }
    }
    verRSS(registro);
    comprobarCombo(arrayRSS.length, arrayRSS, registro);
}
function anterior() {
    registro--;
    if (registro < 0) {
        registro = 0;
        alert("no hay canales RSS anteriores");
    } else {
        verRSS(registro);
        comprobarCombo(arrayRSS.length, arrayRSS, registro);
    }
}
function siguiente() {
    registro++;
    if (registro >= arrayRSS.length) {
        registro = arrayRSS.length;
        alert("no hay canales RSS posteriores");
    } else {
        verRSS(registro);
        comprobarCombo(arrayRSS.length, arrayRSS, registro);
    }
}

function insertar() {
    // mostramos con fundido el logo carga ajax
    activarIndicadorAjax();
    var nombreRSS = prompt("Introduzca el nombre de la web", "");
    var urlRSS = prompt("Introduzca la url que contiene el RSS", "");
    //Comprobamos que los campos no esten vacios o sean nulos
    if (nombreRSS !== '' && urlRSS !== '' && nombreRSS !== null && urlRSS !== null) {
        // creamos un objeto XHR en miXHR
        miXHR = objetoXHR();
        //Le pasamos la operacion y los parametros urlRSS y tituloRSS METODO CLASICO AJAX
        cargarAsync("./consultas/rss.php?accion=insertar" + "&nombreRSS=" + nombreRSS + "&urlRSS=" + urlRSS);
        //Volvemos a cargar los datos de la BD y actualizamso el combo
        verRSS(0);
        comprobarCombo(arrayRSS.length, arrayRSS, 0);
    }
}

function borrar() {
    // mostramos con fundido el logo carga ajax
    activarIndicadorAjax();
    var nombreRSS = arrayRSS[registro][0];
    if (confirm("¿Seguro que desea borrar el registro de " + nombreRSS, "titulo")) {
        var id = document.getElementById("campoSelect").value;
        $.get('consultas/rss.php', "accion=" + 'borrar' + "&idRSS=" + id, function (datos) {
            if (datos === "el borrado es OK") {
                alert("El borrado ha sido satisfactorio");
                //Actualizamos los datos del array en memoria con la BD
                cargarRSS('recursosRSS');
                //Actualizamos los datos del comboBox con los registros actuales
                comprobarCombo(arrayRSS.length, arrayRSS, registro);
            } else {
                alert("Error al borrar");
            }
            // Desactivamos el indicador AJAX cuando termina la petición
            desactivarIndicadorAjax();
        }).error(function () {
            alert("Error");
        });
    }
}

// función que nos muestra el mensaje que le pasemos con efecto de difuminado
function comprobarRegistroActual(nombreRSS, mensaje) {
    $("#titulo").fadeOut(1).html("Lector de Titulares RSS con AJAX y jQuery >>> Fuente RSS: " + nombreRSS).fadeIn(1000);
    $("#noticias").fadeOut(1).html(mensaje).fadeIn(1000);
}

//Cargamos todas las noticias de cada RSS en memoria
function cargarRSS(opcion) {
    // mostramos con fundido el logo carga ajax
    activarIndicadorAjax();
    $.get('consultas/rss.php', "accion=" + opcion, function (datos) {
        //Convertir la cadena enviada desde PHP a un vector de objetos en JavaScript
        arrayRSS = JSON.parse(datos);
        verRSS(0);
        comprobarCombo(arrayRSS.length, arrayRSS, 0);
        // Desactivamos el indicador AJAX cuando termina la petición
        desactivarIndicadorAjax();
    }).error(function () {
        alert("Error");
    });
}

//Funcion que carga o actualiza el comboBox
function comprobarCombo(totRSS, resul, numSelect) {
    // indicamos la longitud del combo (el número de elementos)
    document.getElementById("campoSelect").length = totRSS;
    var x = 0;
    // Recorremos cada uno de los elementos recibidos incluyéndolo en el combo
    for (var i = 0; i < totRSS; i++) {
        var nombreRSS = resul[i][0];
        var id = resul[i][1];
        // Incluimos en el combo el nombre del RSS y el índice que tiene grabado
        document.getElementById("campoSelect").options[x] = new Option(nombreRSS, id);
        x++;
    }
    // Dejamos seleccionada la primera de las opciones
    document.getElementById("campoSelect").options[numSelect].selected = "selected";
}

//Carga los datos de la BD en meoria en un array y los visualiza en un formato correcto en el contenedor seleccionado
function verRSS(numRSS) {
    activarIndicadorAjax();
    var texto = "";
    var num = parseInt(numRSS);
    var nombreRSS = arrayRSS[num][0];
    var resultados = arrayRSS[num];
    texto += "<h1>Fuente RSS: " + nombreRSS + "</h1>";
    for (var i = 2; i < resultados.length; i++) {
        objeto = resultados[i];
        miFecha = new Date(objeto.fecha);
        // Ponemos el título de la noticia que nos servirá de enlace a la misma
        texto += "<h3><a href='" + objeto.url + "' target='blank' title='" + objeto.titulo + "'>" + objeto.titulo + "</a></h3>";
        // Incluyo la fecha de la noticia en formato dd/mm/aaaa
        texto += "Fecha: " + miFecha.getDate() + "/" + (miFecha.getMonth() + 1) + "/" + miFecha.getFullYear();
        // Inlcuyo la hora de la noticia en formato hh:mm
        texto += "  -  Hora: " + miFecha.getHours() + ":" + miFecha.getMinutes();
        // terminamos con la descripción de la noticia y una línea horizontal de separación
        texto += "<br />" + objeto.descripcion + "<hr />";
    }
    comprobarRegistroActual(nombreRSS, texto);
    desactivarIndicadorAjax();
}