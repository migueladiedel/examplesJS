/**
 * @author  Miguel  Ángel Díez Delgado 03/05/2017
 */

window.onload=comienzo;
//Inicializamos las variables que vamos a usar en todo el documento
var nombreColor="azul";
var etiquetasTiradas=["Primera","Segunda","Tercera","Cuarta","Quinta","Sexta","Séptima",
                        "Octava","Novena","Décima"];
var numTirada=0;
        
function comienzo(){
    crearEventoColores();
    //Crear evento pulsacion boton id pulsa
    crearEvento(document.getElementById("pulsa"), 'click', crearFila);
    
    /**
    * Funcion que crea una fila cuando pulsamos el boton con id pulsa
    */
    function crearFila(){
        if (numTirada<etiquetasTiradas.length){
            var fila=document.createElement('tr');
            fila.setAttribute('id',etiquetasTiradas[numTirada]);
            insertarNodo('tabla',fila);
            var newCelda= new Array;
            for (var i=0;i<4;i++){ 
                newCelda[i]=document.createElement('td'); 
                newCelda[i].classList.add("azul");
                insertarNodo(etiquetasTiradas[numTirada],newCelda[i]);
                newCelda[i].innerHTML="azul";
                crearEvento(newCelda[i], 'click', sutituirColor);
            }
            document.getElementById("pie").innerHTML="<h2>"+etiquetasTiradas[numTirada]+" Tirada </h2>";
            numTirada++;
        }else{
           document.getElementById("pie").innerHTML="<h2>Has llegado al tope de tiradas</h2>";
        }
    } 
    /**
    * Funcion que asocia el evento click a cada uno de los colores de la paleta de colores
    */
    function crearEventoColores (){    
        var cabecera=document.getElementById("cabecera");
        var colorSeleccionado=cabecera.getElementsByTagName("span");
        for (var i=0;i<colorSeleccionado.length;i++){
            crearEvento(colorSeleccionado[i], 'click', cambiarColorSeleccionado);
        }
    }
    /**
    * Funcion que sustituye el color actual Seleccionado de la 'Paleta de colores'
    */
    function cambiarColorSeleccionado (){    
        nombreColor=this.classList[0];
        for (var i=0;i<this.parentNode.childNodes.length;i++){
            this.parentNode.childNodes[i].classList.remove("seleccionado");
        }
        this.classList.add("seleccionado");
    }
    /**
    * Funcion que sustituye el color actual td pulsado
    */
    function sutituirColor (){    
        var numColor=this.classList[0];
        this.classList.remove(numColor);
        this.classList.add(nombreColor);
        this.innerHTML=nombreColor;
    }
    
    /**
    * Insertamos un nodo al nodo Padre
    * @param padre - nodo al que queremos añadir un nodo(insertamos nodo hijo)
    * @param nodo - nodo a añadir al nodo padre
    */
    function insertarNodo(padre,nodo){
        document.getElementById(padre).appendChild(nodo);
    }
    
    /**
    * Asocia una funcion al evento indicado en el campo indicado 
    * @param elemento - el elemento al que vamos asociar el evento
    * @param tipoEvento - evento al que queremso asociar el elemento
    * @param funcion - la funcion que queremos que realize cuando se lanze el evento indicado
    */
    function crearEvento(elemento, tipoEvento, funcion){
        if (elemento.addEventListener){
            //W3C
            elemento.addEventListener(tipoEvento, funcion, false);
        }
    }
	
}

