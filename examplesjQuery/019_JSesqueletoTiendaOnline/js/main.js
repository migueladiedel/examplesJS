
var destino;
var imagenes;
var precio;

function comenzar(){
    var imagenes=document.querySelectorAll(".product img");
    for(var i=0;i<imagenes.length;i++) {
        imagenes[i].addEventListener("mouseover", raton,false);
        imagenes[i].addEventListener("dragstart", luz,false);
        imagenes[i].addEventListener("dragend", estadonormal,false);
    }
    destino=document.getElementById("drop");
    precio=document.getElementById("compra");
    destino.addEventListener("drop", soltado,false);
    destino.addEventListener("dragover", function(e){e.preventDefault();},false);
}
function raton(e){
    e.preventDefault();
    e.target.style.cursor = "move";
}
function luz(e){
    destino.style.background="#fa0d29";
    var elemento=e.target;
    e.dataTransfer.setData("Text", elemento.getAttribute("id"));
}
function estadonormal(){
    destino.style.background="#efefef";
}
function soltado(e){
   e.preventDefault();
   var id=e.dataTransfer.getData("Text");
   e.target.appendChild(document.getElementById(id));
   
   var nombre=document.querySelectorAll("h2")[parseInt(id)-1].textContent;
   precio.style.visibility="visible";
   var cantidad=document.querySelectorAll("#drop img");
   var numero=cantidad.length;
   var cantidaad=document.getElementById("cantidadproductos");
   cantidaad.innerHTML=numero;
   var para = document.createElement("p");
   var node = document.createTextNode(nombre);
   para.appendChild(node);
   var element = document.getElementById("nooombre");
   element.appendChild(para);
   /*Precio*/
   var precioooo=document.querySelectorAll("p")[id-1].textContent;
   var prrecio=precioooo.substr(9, 20);/*Esto el precio en texto*/
    //alert(prrecio);
   /*var sitioprecio = document.getElementById("preeecio");/*Esto el lugar donde hay que pegarlo*/
   /*var nodee = document.createTextNode(prrecio);
   para.appendChild(nodee);
   sitioprecio.appendChild(para);*/
}

window.addEventListener("load",comenzar,false);
