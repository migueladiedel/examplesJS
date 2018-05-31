//Las variables elem_origen y elem_destino son variables globales que se van a utilizar también 
//en las funciones "comenzamos_arrastrar" y "soltado" por lo que debemos declararlas fuera de 
//la función "comenzar".
var elem_origen;
var elem_destino;

function comenzar() {
    //cargamos elem_origen con la caja imagen
    elem_origen=document.getElementById("imagen");
    //ejecutamos la función "comenzamos_arrastrar" cuando se produzca el evento "dragstart"
    elem_origen.addEventListener("dragstart", comenzamos_arrastrar,false);
    //cargamos elem_destion con la caja zonadestino
    elem_destino=document.getElementById("zonadestino");
    //para los eventos "dragenter" y "dragover" lo que vamos a decirles es que resetee 
    //o borre los comportamientos por defectos que tiene
    //elem_destino.addEventListener("dragenter", function(e){e.preventDefault();},false);
    elem_destino.addEventListener("dragover", function(e){e.preventDefault();},false);
    //vamos a llamar al procedimiento "soltado" con el evento "drop"
    elem_destino.addEventListener("drop", soltado,false);
    //definimos el evento "dragend" en el elem_origen que va a llamar a la función "terminado"
    elem_origen.addEventListener("dragend", terminado,false);
    //Eliminamos el evento anterior donde borramos la acción a realizar con "dragenter" y 
    //confeccionamos un nuevo evento que llame a la función "entrando"
    elem_destino.addEventListener("dragenter", entrando,false);
    //confeccionamos un nuevo evento que llame a la función "saliendo"
    //cuando salgamos de la caja sin soltar el ratón.
    elem_destino.addEventListener("dragleave", saliendo,false);
}   
function comenzamos_arrastrar(e){
    //es guardar en una variable "codigo" la imagen. Para no poner el nombre a fuego y que luego
    //cambiemos la imagen lo que hacemos es decir a javascript que nos devuelva el nombre de la 
    //imagen con elem_origen.getAttribute("src")
    var codigo="<img src='" + elem_origen.getAttribute("src") + "'>";
    //Con "setData" declaramos que datos van a ser transferidos en formato texto
    e.dataTransfer.setData("Text", codigo);
}
function soltado(e){
    //es quitar los valores por defecto de los navegadores, móviles y tablet del evento "drop" 
    //(cuando el elemento es soltado en el área de destino)
    e.preventDefault();
    //decimos que datos deben ser capturados con "getData"
    elem_destino.innerHTML=e.dataTransfer.getData("Text");
}
function terminado(e){
    //Guardamos en la variable "elemento" el objeto que ha desencadenado el evento con e.target
    var elemento=e.target;
    //hacemos invisible ese mismo objeto
    elemento.style.visibility="hidden";
}
function entrando(e){
    //reseteamos el comportamiento por defecto del navegador
    e.preventDefault();
    //pintamos un verde de fondo con una ligera transparencia
    elem_destino.style.background="rgba(8,252,25,.8)";
}
function saliendo(e){
    //reseteamos el comportamiento por defecto del navegador
    e.preventDefault();
    //pintamos un blanco de fondo
    elem_destino.style.background="#FFFFFF";
}
window.addEventListener("load",comenzar,false);
