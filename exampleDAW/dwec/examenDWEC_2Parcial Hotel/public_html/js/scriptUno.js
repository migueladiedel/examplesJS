/**
 * @author  Miguel  Ángel Diez Delgado
 */

window.onload = comienzo;
function comienzo() {
    var hotel1 = new Hotel("Paris",12345,"El Collado,1",152,160);
    crearEvento(document.getElementById('nom'), 'blur', function(){
        var texto=document.getElementById('nom').value;
        document.getElementById('nom').value=texto.toUpperCase();
    });
    //Cuando pulsamos cambiar datos, que compruebe los datos
    crearEvento(document.getElementById('datos'), 'click', function(){
        var nom=document.getElementById('nom').value;
        var telefono=document.getElementById('pedirtelefono').value;
        var direccion=document.getElementById('pedirdireccion').value;
        var expressTele=comprobarExpresionRegular(/\d{5}/, telefono);
        var expressNombre=comprobarExpresionRegular(/[A-Z]/, nom);
        var salida="";
        if (expressTele && expressNombre){
            hotel1.modificarDatos(nom,telefono,direccion);
            salida+="Datos cambiados correctamente";
        }else{
            salida+="Error de datos";
            document.getElementById('nom').focus();
        }
        document.getElementById('texto').innerHTML= salida;
    });
    crearEvento(document.getElementById('reservar'), 'click', hotel1.reservar);
    crearEvento(document.getElementById('liberar'), 'click', hotel1.liberar);
    crearEvento(document.getElementById('listado'), 'click', hotel1.listado);
}

function comprobarExpresionRegular(expresion,valor) {
    var todoCorrecto = false;
    if (expresion.exec(valor)) {
        todoCorrecto = true;
    }
    return todoCorrecto;
}


function crearEvento(elemento, tipoEvento, funcion){
    if (elemento.addEventListener){
        //W3C
        elemento.addEventListener(tipoEvento, funcion, false);
    }
}

/**
 * @author  Miguel  Ángel Diez Delgado
 * 
 * @param {number} nombre - el nombre del Hotel
 * @param {number} telefono - el telefono  del Hotel
 * @param {number} direccion - la direccion del Hotel
 * @param {number} habitacionInicio - numero inicial de la habitacion a crear
 * @param {number} habitacionFinal - numero final de la habitacion a crear
 */
function Hotel(nombre,telefono,direccion,habitacionInicio,habitacionFinal) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.direccion = direccion;
    this.habitacionInicio = habitacionInicio;
    this.habitacionFinal = habitacionFinal;
    var estructura = new Array();
    for (var i = this.habitacionInicio; i <= this.habitacionFinal; i++) {
        estructura.push(new Array(i,false,""));	
    }
    mostrarSalida();
    
    /**
     * Muestra todos los datos en sus respectivos campos
     */
    function mostrarSalida() {
        document.getElementById('hotel').innerHTML = nombre.toUpperCase();
        document.getElementById('telefono').innerHTML = telefono;
        document.getElementById('direccion').innerHTML = direccion;
        document.getElementById('inicio').innerHTML = habitacionInicio;
        document.getElementById('fin').innerHTML = habitacionFinal;
        document.getElementById('imagen').src= "img/parking.jpg";
        document.getElementById('texto').innerHTML= "Empezando el proceso";
    };
    
    /**
     * Muestra todos los datos en sus respectivos campos
     */
    this.modificarDatos = function (nombre, telefono, direccion) {
        document.getElementById('imagen').src= "img/datos.jpg";
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
        document.getElementById('hotel').innerHTML = nombre;
        document.getElementById('telefono').innerHTML = telefono;
        document.getElementById('direccion').innerHTML = direccion;
    };
    
    /**
     * Devuelve verdadero cuando no hay ninguna 
     * habitación libre
     *
     * @return {boolean}
     */
    function estaLleno() {
        var estaLleno=false;
        var contadorHabOcupadas=0;
        
        for (var i = 0; i < estructura.length; i++) {
            if(estructura[i][1]===true){
                contadorHabOcupadas++;
            };	
        }
        if (contadorHabOcupadas===estructura.length){
            estaLleno=true;
        }        
        return estaLleno;
    };

    
    
    /**
     * Busca la primera habitación libre, 
     * la marca como ocupada y guarda su tarifa.
     *
     * 
     */
    this.reservar = function () {
        document.getElementById('imagen').src= "img/reservar.jpg";
        var salida="";
        var esPrimera=true;
        if (!estaLleno()){
            var tarifa= document.getElementById('tarifa').value;
            var posicion=0;
            for (var i = 0; i < estructura.length; i++) {
                if(estructura[i][1]===false && esPrimera){
                    esPrimera=false;
                    posicion=i;
                };	
            }
            estructura[posicion][1]=true;
            estructura[posicion][2]=tarifa;
            salida+="Ha reservado la plaza "+estructura[posicion][0]+" con la tarifa "+estructura[posicion][2];
        }else{
            salida+="hotel lleno";
        }
        document.getElementById('texto').innerHTML= salida;
        
        
    };
    
    /**
     * Devuelve verdadero cuando la habitación está libre
     * 
     * @param {number} habitacion - el numero de la habitacion 
     * @return {boolean}
     */
    function estaLibre(habitacion) {
        var estaLibre=false;
        for (var i = 0; i < estructura.length; i++) {
            if(estructura[i][0]===habitacion && estructura[i][1]===false){
                estaLibre=true;
            };	
        }
        return estaLibre;
    };
    /**
     * Devuelve verdadero cuando la habitación existe
     * 
     * @param {number} habitacion - el numero de la habitacion 
     * @return {boolean}
     */
    function existeHabitacion(habitacion) {
        var existe=false;
        for (var i = 0; i < estructura.length; i++) {
            if(estructura[i][0]===habitacion){
                existe=true;
            };	
        }
        return existe;
    };
    /**
     * Devuelve verdadero cuando la habitación existe
     * 
     * @param {number} habitacion - el numero de la habitacion 
     * @return {boolean}
     */
    function buscarHabitacion(habitacion) {
        var posicion=0;
        for (var i = 0; i < estructura.length; i++) {
            if(estructura[i][0]===habitacion){
                posicion=i;
            };	
        }
        return posicion;
    };
    
    /**
     * marca una habitación como libre y 
     * devuelve el valor de la tarifa
     *
     * @param {number} habitacion - numero habitacion 
     */
    this.liberar = function() {
        document.getElementById('imagen').src= "img/liberar.jpg";
        var habitacion=parseInt(document.getElementById('habi').value);
        var salida="";
        if(existeHabitacion(habitacion)){
            if(estaLibre(habitacion)){
                salida+="La plaza ya está libre";
            }else{
                var posicion=buscarHabitacion(habitacion);
                estructura[posicion][1]=false;
                salida+="La habitación "+estructura[posicion][0]+" ha sido liberada con la tarifa "+estructura[posicion][2];
            }
        }else{
            salida+="Plaza incorrecta";
        }
        document.getElementById('texto').innerHTML= salida;
    };

    /**
     * Devuelve una variable con todas las 
     * habitaciones libres del hotel
     *
     * @return {Array} - Array con los datos de las habitaciones
     */
    this.listado = function() {
        document.getElementById('imagen').src= "img/listado.jpg";
        var salida="";
        for (var i = 0; i < estructura.length; i++) {
            if(estructura[i][1]===false){
                salida+=estructura[i][0]+" ";
            };	
        }
        document.getElementById('texto').innerHTML= salida;
    };
}