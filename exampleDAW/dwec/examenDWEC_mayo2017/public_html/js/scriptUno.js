/**
 * @author  Miguel  Ángel Díez Delgado
 */

window.onload=comienzo;

function comienzo() {

    /**
    * Objeto Biblioteca
    * 
    * @param {String} nombre - el nombre de la Biblioteca
    * @param {number} maxLibros - el numero maximo de libros
    */
    function Biblioteca (nombre,maxLibros){
            var plantas=["Astronomía","Geografía","Tecnología"];
            this.nombre = nombre;
            this.maxLibrosPlanta=maxLibros;
            this.libros = new Array;
            for (var i=0;i<plantas.length;i++){
                this.libros[plantas[i]]=new Array;
            }
        
        /**
        * Metodo que devuelve si la planta esta llena o no
        * @param {number} planta - numero de la planta a comprobar
        */
        
        this.plantaLlena = function (planta){
            return planta.length===this.maxlibrosplanta;
        };
        
        /**
        * Metodo que devuelve la posicion de un libro si existe
        * @param planta - numero de la planta a comprobar
        * @param libro - numero de la planta a comprobar
        */
        this.estaLibro = function (planta, libro){
            return planta.indexOf(libro);
        };
        
        /**
        * Metodo que agrega el libro a la 
        * estructura libros con su codigo correspondiente
        * 
        * @param {String} planta - nombre de la planta donde añadir el libro
        * @param {String} libro - numero de la planta a comprobar
        */
        this.agregarLibro = function (planta,libro){
            var mensaje;
            if (! this.plantaLlena(planta)){ 
                var posición=this.estaLibro(planta,libro);
                if (posición===-1){ 
                    planta.push(libro);
                    mensaje=planta.length-1;
                }else{
                    mensaje=-1;
                }
            }else{
                mensaje=-2;
            }
            return mensaje;
        };
        
        this.consultaPlanta = function (planta){
            var todos="";
            for (var i=0;i<planta.length;i++){
               todos+=planta[i]+" ";
            }
            return todos;
        };
    }//Fin Biblioteca  
    
    //Instanciacion objeto biblioteca
    var biblioteca1 = new Biblioteca('Cultura para todos', 50);
    
    var campoBiblioteca = document.getElementById("Biblioteca");
    campoBiblioteca.innerHTML = '<b>'+biblioteca1.nombre+'</b>';
    
    var imagen = document.getElementById("imagen");
    imagen.src= 'img/biblioteca.jpg';
    mostrarMensaje('Empezando el proceso');
    
    var botonInsertar=document.getElementById("insertar");
    crearEvento(botonInsertar, 'click', agregar);
    
    var campoNombre=document.getElementById("nombre");
    crearEvento(campoNombre, 'blur', convertirMayus);
    
    var campoNombrePlanta=document.getElementById("nombreplanta");
    crearEvento(campoNombrePlanta, 'click', listarPlantas);
    
    var campoBook=document.getElementById("book");
    crearEvento(campoBook, 'click', comprobarTitulo);
    
    var campoCodigo=document.getElementById("codigo");
    crearEvento(campoCodigo, 'click', obtenerCodigo);
        
    function mostrarMensaje (mensaje){
        var campoTexto=document.getElementById("texto");
        campoTexto.innerHTML=mensaje;
    }
    
    function obtenerCodigo (){
        imagen.src= 'img/codigo.jpg';
        var campoPlanta=document.getElementById("planta");
        var mensaje;
        var campoNombre=document.getElementById("nombre");
        if (campoNombre.value!==""){
            var a=biblioteca1.estaLibro(biblioteca1.libros[campoPlanta.value],campoNombre.value);
            if (a===-1){
                mensaje="El libro no está en la planta";
            }else{
                mensaje="El código es "+campoPlanta.value+a;
            }
        }else{
            mensaje="El nombre de libro está vacío";
        }
        mostrarMensaje(mensaje);
    }

    function comprobarTitulo(){
        imagen.src= 'img/buscar.jpg';
        var campoPlanta=document.getElementById("planta");
        var mensaje;
        var campoNum=document.getElementById("numero");
        if (campoNum.value!=="" && campoNum.value>-1 && campoNum.value<biblioteca1.libros[campoPlanta.value].length){
            mensaje=biblioteca1.libros[campoPlanta.value][campoNum.value];
        }else{
            mensaje="Código incorrecto";
        }
        mostrarMensaje(mensaje);
    }

    function agregar(){
        imagen.src= 'img/agregar.jpg';
        var mensaje;
        var campoPlanta=document.getElementById("planta");
        var campoNombre=document.getElementById("nombre");
        if(campoNombre.value!==""){
            var mensa=biblioteca1.agregarLibro(biblioteca1.libros[campoPlanta.value],campoNombre.value);
            if (mensa===-1){
                    mensaje="El libro ya está en la planta";
            }else{
                if (mensa===-2){
                    mensaje="La planta está llena";
                }else
                    mensaje="Código libro: "+campoPlanta.value+mensa;
                }
        }else{
            mensaje="El nombre de libro está vacío";
        }
        mostrarMensaje(mensaje);

    }
	
	
    function listarPlantas(){
        imagen.src= 'img/listado.jpg';
        var campoPlanta=document.getElementById("planta");
        var variable=biblioteca1.consultaPlanta(biblioteca1.libros[campoPlanta.value]);
        var mensaje="";
        if (variable===""){
            mensaje="Planta Vacía";
        }else{
            mensaje=variable;
        }
        mostrarMensaje(mensaje);
    }

    function convertirMayus(){
        this.value = this.value.toUpperCase();
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
