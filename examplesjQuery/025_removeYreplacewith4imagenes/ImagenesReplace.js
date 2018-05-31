    
$(document).ready(function(){
    var z=document.getElementById("cerrar");
    z.addEventListener("click",cerrar_banner,false);
    
    //document.getElementById("imagen1").addEventListener("click",carrito,false);
    var imagenes=document.querySelectorAll("#carrete img");
    for (i=0; i<imagenes.length; i++){
        imagenes[i].addEventListener("click",carrito,false);
    }
    
});
            
function cerrar_banner(){
    $("#banner").remove();
}

function carrito(num){
    //$("#imagen1").replaceWith("<div class='sustitucion'>Agregado al carro</div>");
    if (num.target==imagen1){
        $("#imagen1").replaceWith("<div id='imagen1'>Agregado al carro</div>");
    }
    
    if (num.target==imagen2){
        $("#imagen2").replaceWith("<div id='imagen2'>Agregado al carro</div>");
    }

    if (num.target==imagen3){
        $("#imagen3").replaceWith("<div id='imagen3'>Agregado al carro</div>");
    }

    if (num.target==imagen4){
        $("#imagen4").replaceWith("<div id='imagen4'>Agregado al carro</div>");
    }

}

