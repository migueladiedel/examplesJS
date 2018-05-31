/**
 * @author  Miguel  Ángel Díez Delgado
 */

window.onload = function () {
    //Resetemaos la cookie
    crearCookie("visita", "", -1);
    
    document.getElementById("enviar").addEventListener('click',validar,false);
    document.getElementById("nombre").addEventListener('blur',textToUpperCase,false);
    document.getElementById("apellidos").addEventListener('blur',textToUpperCase,false);
    //Poner el foco en el primer elemento
    document.getElementById("nombre").focus();
    
};

function validar(e){
    //leemos el valor de la cookie
    var valor=parseInt(leerCookie("visita"))+1;
    // Creamos la cookie si no está creada
    crearCookie("visita",valor,30);
    // Mostramos el valor de la cookie
    document.getElementById("intentos").innerHTML="Intentos de Envíos del formulario: "+valor;

    // Validamos cada uno de los campos correspondientes con sus respectivas funciones
    if (validarEdad() && validarNif() && validarEmail() && validarProvincia() && validarFecha() && validarTelefono() && validarHora() && validarInputText(this) && confirm("¿Deseas enviar el formulario?"))
        return true;
    else{
        // Cancelamos el evento de envío por defecto asignado al boton de submit enviar.
        e.preventDefault();		
        return false;	// Salimos de la función devolviendo false.
    }
}

function validarInputText(objetoBotonEnviar){
    //Recogemos el formulario del objeto enviar pasado por parametro 
    var form = objetoBotonEnviar.form;	
    // Recorremos los campos de tipo text y ponemos sus respectivos errores
    for (var i=0; i<form.elements.length; i++){
        // Reseteamos los campos class
        form.elements[i].className="";
        if (form.elements[i].type === "text" && form.elements[i].value===""){
            form.elements[i].className="error";
            form.elements[i].focus();
            document.getElementById("errores").innerHTML="ERROR: "+form.elements[i].name.toUpperCase()+" no puede estar vacío";
            return false;
        }
    }
    return true;
}

function textToUpperCase(){
    document.getElementById("nombre").value=document.getElementById("nombre").value.toUpperCase();
    document.getElementById("apellidos").value=document.getElementById("apellidos").value.toUpperCase();
}

// Función para crear/borrar cookies
function crearCookie(nombre, valor, dias) {
    // Si dias es menor de 0 es que borramos la cookie
    var expirar = "";
    // Si dias es true
    dias=parseInt(dias);
    if (!isNaN(dias)) {
        var date = new Date();
        // Se le añade los días recibidos
        date.setTime(date.getTime() + (dias*24*60*60));
        expirar = "; expires=" + date.toGMTString();
    } 
    document.cookie = nombre + "=" + valor + expirar + "; path=/";
}

// Función para leer cookies creadas
function leerCookie() {
    //Separamos los elementos de la cadena con el separador ;
    var cadena = document.cookie.split(';')[0].trim();
    var num=cadena.split('=');
    var num=parseInt(num[1]);
    if (!isNaN(num)){
        return num;
    }
    // Si llega aquí es que no existe la cookie y devuelve el valor 0
    return 0;
}



function validarEdad(){
    // Validar si esta entre 0 y 105
    if (isNaN(document.getElementById("edad").value) || document.getElementById("edad").value <0 || document.getElementById("edad").value >105){
        document.getElementById("errores").innerHTML="ERROR: La edad debe estar entre 0 y 105";
        document.getElementById("edad").className="error";
        document.getElementById("edad").focus();
        return false;
    }
    // Si llega aquí es que la edad es correcta
    document.getElementById("edad").className="";
    return true;
}
function validarTelefono(){
    //9 digitos comprendidos entre el  0 y el 9
    var expresion=/^\d{9}$/ ;
    //Comprobamos si el valor del campo cumple la expression regular
    var isCorrect=comprobarExpresionRegular(expresion,document.getElementById("telefono").value);
    if(!isCorrect){
        document.getElementById("errores").innerHTML="ERROR: 9 digitos entre 0 y 9 Ej: 947258585";
        document.getElementById("telefono").className="error";
        document.getElementById("telefono").focus();
        return false;
    }
    // Si llega aquí es que el teléfono es correcto
    document.getElementById("telefono").className="";
    return true;
}

function comprobarExpresionRegular(expresion,campoValidar) {
    if (expresion.test(campoValidar)) {
        return true;
    }else{
        return false;
    }
}



function validarEmail(){
    //Comprueba que el comienzo comienze por cualquiere caracter 1 o mas veces seguido de @
    //a continuacion otro caracter cualquiera una o mas veces seguido de un punto
    //y seguido de cualquier caracter 1 o mas veces
    var expresion=/^(.+\@.+\..+)$/;
    //Comprobamos si el valor del campo cumple la expression regular
    var isCorrect=comprobarExpresionRegular(expresion,document.getElementById("email").value);
    if(!isCorrect){
        document.getElementById("errores").innerHTML="ERROR: No es un email válido.Ej: maddgm92@gmail.com";
        // Situamos el foco en el campo email y le asignamos la clase error.
        document.getElementById("email").focus();
        document.getElementById("email").className="error";	
        return false;
    }
    // Si llega aquí es que el email es correcto
    document.getElementById("email").className="";	
    return true;
}



function validarNif(){
    // /d 8 Números entre 0 y 9  
    // - valida que haya un guión entre medias de los digitos y la letra
    // 1 letra de la a-zA-Z valida que sea una letra de la a-z en minusculas y mayusculas
    var expresion = /^\d{8}-[a-zA-Z]$/;
    //Comprobamos si el valor del campo cumple la expression regular
    var isCorrect=comprobarExpresionRegular(expresion,document.getElementById("nif").value);
    if(!isCorrect){
        document.getElementById("errores").innerHTML="ERROR: No es un número de NIF válido. Ej: 71305965-P";
        // Situamos el foco en el campo nif y le asignamos la clase error.
        document.getElementById("nif").focus();
        document.getElementById("nif").className="error";	
        return false;
    }
    // Si llega aquí es que el número del NIF es correcto
    document.getElementById("nif").className="";	
    return true;
}

function validarProvincia(){
    // Comprueba que la opción seleccionada sea diferente a 0.
    if (document.getElementById("provincia").selectedIndex===0){
        document.getElementById("errores").innerHTML="ERROR: No ha seleccionado ninguna provincia.";
        // Situamos el foco en el campo provincia y le asignamos la clase error.
        document.getElementById("provincia").focus();
        document.getElementById("provincia").className="error";	
        return false;
    }
    // Si llega aquí es que sí hemos seleccionado alguna provincia
    document.getElementById("provincia").className="";
    return true;
}

function validarFecha(){
    //Comprueba que haya dos digitos con /d{2}+ seguido de una barra o un guion, repetimos proceso
    //y para finalizar 4 digitos con \d{4}
    var expresion=/^\d{2}\/|-\d{2}\/|-\d{4}$/;
    //Comprobamos si el valor del campo cumple la expression regular
    var isCorrect=comprobarExpresionRegular(expresion,document.getElementById("fecha").value);
    if(!isCorrect){
        document.getElementById("errores").innerHTML="Fecha errónea. Introdúzcala de nuevo (dd/mm/aaaa)";
        document.getElementById("fecha").focus();
        document.getElementById("fecha").className="error";	
        return false;
    }
    // Si llega aquí es que todo ha sido correcto
    document.getElementById("fecha").className="";
    return true;
}

function validarHora(){
    // Comprueba que comience con un 0 (no obligatorio) y un dígito del 1 al 9, 
    // ó un 1 y un dígito numérico, ó un 2 y un dígito de 0 a 3, 
    // continuamos con dos puntos y un dígito entre el 0 y el 5 (no obligatorio)
    // seguido de otro dígito numérico
    var expresion=/^(0?[1-9]|1\d|2[0-3]):([0-5]?\d)/;
    //Comprobamos si el valor del campo cumple la expression regular
    var isCorrect=comprobarExpresionRegular(expresion,document.getElementById("hora").value);
    if(!isCorrect){
        document.getElementById("errores").innerHTML="Hora errónea. Introdúzcala de nuevo (hh:mm)";
        document.getElementById("hora").focus();
        document.getElementById("hora").className="error";	
        return false;
    }
    // Si llega aquí es que todo ha sido correcto
    document.getElementById("hora").className="";
    return true;
}

