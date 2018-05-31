
function ejecuta() {
    /* ejecuto el saludo solo en el primer párrafo
    document.getElementsByTagName("p")[0].onclick=saludo;
    */
    
    /* ejecuto el saludo en la etiqueta que tenga el id ="importante"
    document.getElementById("importante").onclick=saludo; 
    */
    
    /* recorro todos los nombres de etiqueta p y ejecuto el saludo 
    for (var i=0; i<5; i++) {
        document.getElementsByTagName("p")[i].onclick=saludo; 
    }
    */
    
    /* selecciono el primer elemento que tiene la clase "importante" 
    var z=document.getElementsByClassName("importante")[0].onclick=saludo;
    */
   
    /* selecciono el primer elemento que tiene el selector ".importante"
     * que corresponde a un "class"
    document.querySelector(".importante").onclick=saludo; 
    */
    
    /* selecciono el último elemento que tiene la etiqueta <p> dentro del id = "principal" 
     document.querySelector("#principal p:last-child").onclick=saludo;
    */
    
    /*definimos antes la matriz y recorremos hasta llegar al final buscando los 
     *elementos <p> del selector "#principal" 
     
    var elementos=document.querySelectorAll("#principal p");
    for (var i=0; i<elementos.length; i++) {
        
        elementos[i].onclick=saludo;
    }
    */
   
    /*definimos antes la matriz y recorremos hasta llegar al final buscando los 
     *elementos <p> del selector "#principal y los elementos del selector <span>"  */ 
    var elementos=document.querySelectorAll("#principal p, span");
    for (var i=0; i<elementos.length; i++) {
        
        elementos[i].onclick=saludo;
    }
                                                                         
    
}

function saludo() {
    alert("Que hay de nuevo");
}

window.onload=ejecuta;
