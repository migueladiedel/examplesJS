//La variable elem_destino es una variable global que se van a utilizar también 
//en las funciones "comenzamos_arrastrar" por lo que debemos declararlas fuera de 
//la función "comenzar".
var elem_destino;

function comenzar() {
    //Con querySelectorAll("#cajaimagen img") estamos diciendo a nuestro página que vamos a
    //tratar todas las imágenes que esté dentro de cajaimagen (selector descendiente). 
    //Nos devuelve un array con todas las imágenes de cajaimagen.
    var imagenes=document.querySelectorAll("#cajaimagen img");
    //Con el bucle for ponemos a la escucha del evento "dragstart" a cada una de las imágenes
    //del array. Este evento ejecutará una función llamada "comenzando_arrastrar"
    for(var i=0;i<imagenes.length;i++) {
        imagenes[i].addEventListener("dragstart", comenzamos_arrastrar,false);
        //Si la imagen "i" es distinto de "1" pone a la escucha de ese evento a las imágenes.
        if (i!=1){
            imagenes[i].addEventListener("dragend", terminado,false);
        }
    }
    //Hacemos que elem_destino señale a la sección que tiene como id="zonadestino"
    elem_destino=document.getElementById("zonadestino");
    //para los eventos "dragenter" y "dragover" lo que vamos a decirles es que resetee 
    //o borre los comportamientos por defectos que tienen los navegadores
    //elem_destino.addEventListener("dragenter", function(e){e.preventDefault();},false);
    //elem_destino.addEventListener("dragenter", function(e){e.preventDefault();},false);
    //elem_destino.addEventListener("dragover", function(e){e.preventDefault();},false);
    elem_destino.addEventListener("dragenter", entrando,false);
    elem_destino.addEventListener("dragover", function(e){e.preventDefault();},false);
    //vamos a llamar al procedimiento "soltado" con el evento "drop".
    //Cuando se suelte el ratón en la zona de destino.
    elem_destino.addEventListener("drop", soltado,false);
    //confeccionamos un nuevo evento que llame a la función "saliendo"
    //cuando salgamos de la caja sin soltar el ratón.
    elem_destino.addEventListener("dragleave", saliendo,false);
}   
function comenzamos_arrastrar(e){
    //identificamos el objeto que desencadeno el evento
    var elemento=e.target;
    //guardamos los datos en formato texto con setData de la id del elemento 
    //para saber cuál es el nombre de la imagen de la matriz que tenemos
    e.dataTransfer.setData("Text", elemento.getAttribute("id"));
}
function soltado(e){
    //resetear el comportamiento por defecto del navegador cuando soltamos un elemento sobre él
    e.preventDefault();
    //Rescatamos la información almacenada anteriormente 
    var id=e.dataTransfer.getData("Text");
    //Si es distinto de "imagen2" dejamos entrar la imagen en el destino si no emite 
    //un mensaje de que no es admitida y pone el color rojo de fondo
    if (id!="imagen2") {
        //Guardamos en la variable "src" la ruta de la imagen almacenada en "id"
        var src=document.getElementById(id).src;
        //innerHTML lo que te permite en javascript es meter dentro de un objeto código 
        //HTML para que represente algo. En nuestro caso cargar la imagen en el destino.
        elem_destino.innerHTML="<img src='" + src + "'>";
    }else{
        //Si es distinto de "imagen2" dejamos entrar la imagen en el destino 
        //si no emite un mensaje de que no es admitida y pone el color rojo de fondo
        elem_destino.innerHTML="La imagen no es admitida";
        elem_destino.style.background="#fa0d29";
    }
}
function entrando(e){
    //reseteamos el comportamiento por defecto del navegador
    e.preventDefault();
    //Rescatamos la información almacenada anteriormente 
    var id=e.dataTransfer.getData("Text");
    //También vamos a decirle que cuando entre en el destino en vez de poner fondo verde 
    //ponga fondo rojo para la "imagen2"
    if (id!="imagen2") {
        //pintamos un verde de fondo con una ligera transparencia
        elem_destino.style.background="rgba(8,252,25,.8)";
    }else{
        //pintamos un rojo de fondo
        elem_destino.style.background="#fa0d29";
    }
}
function saliendo(e){
    //reseteamos el comportamiento por defecto del navegador
    e.preventDefault();
    //pintamos un blanco de fondo
    elem_destino.style.background="#FFFFFF";
}
function terminado(e){
    //Guardamos en la variable "elemento" el objeto que ha desencadenado el evento con e.target
    var elemento=e.target;
    //hacemos invisible ese mismo objeto
    elemento.style.visibility="hidden";
}


window.addEventListener("load",comenzar,false);
