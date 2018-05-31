/**
 * @author  Miguel  Ángel Diez Delgado
 */

window.onload=iniciar;

function iniciar(){
	nombreColor="azul";
	var tirada=["Primera","Segunda","Tercera","Cuarta","Quinta","Sexta","Séptima",
				"Octava","Novena","Décima"];
	var numerotirada=0;
	var color=cabecera.getElementsByTagName("span");
	for (var i=0;i<color.length;i++)
		color[i].addEventListener('click',validar,false);
	document.getElementById("tabla");
	document.getElementById("pulsa").addEventListener('click',confirmar,false);

    function confirmar(){
        if (numerotirada<tirada.length){
            var fila=document.createElement('tr');
            fila.setAttribute('id',tirada[numerotirada]);
            agregar('tabla',fila);

            var nuevacelda= new Array;
            for (var i=0;i<4;i++){ 
              nuevacelda[i]=document.createElement('td'); 
              nuevacelda[i].classList.add(nombreColor);
              agregar(tirada[numerotirada],nuevacelda[i]);
              nuevacelda[i].innerHTML=nombreColor;
              nuevacelda[i].addEventListener('click',cambiar,false);
              }
             document.getElementById("pie").innerHTML="<h2>"+tirada[numerotirada]+" Tirada </h2>";
             numerotirada++;
        }else{
           document.getElementById("pie").innerHTML="<h2>Has llegado al tope de tiradas</h2>";
        }
    } 
    function validar (){    
            nombreColor=this.classList[0];
            for (var i=0;i<this.parentNode.childNodes.length;i++){
                this.parentNode.childNodes[i].classList.remove("seleccionado");
            }
            this.classList.add("seleccionado");
    }

    function cambiar (){    
        var colorn=this.classList[0];
        this.classList.remove(colorn);
        this.classList.add(nombreColor);
        this.innerHTML=nombreColor;
    }

    function agregar(padre,nodo){
         document.getElementById(padre).appendChild(nodo);
    }
	
}



