
    window.onload=crearVentanaNoRedimensionable();

    var nuevaVentana;
    function crearVentanaNoRedimensionable(){
        var opciones="location=no,resizable=false, height = 600, width = 800";
        //No resizable en Chrome y Firefox, solo me funciona en Internet Explorer
        nuevaVentana = window.open("","_blank",opciones);
        nuevaVentana.document.write("<h3>Ejemplo de Ventana Nueva</h3>"+"<hr>");
        nuevaVentana.document.write("URL Completa: "+ location.href+"<hr>");
        nuevaVentana.document.write("Protocolo utilizado: "+ location.protocol+"<hr>");
        var nombrenavegador=comprobarNavegador();
        nuevaVentana.document.write("Navegador utilizado: "+ nombrenavegador+"<hr>");
        if(navigator.javaEnabled()===true){
                nuevaVentana.document.write("Java SI disponible en esta ventana "+"<hr>");
        }else{
                nuevaVentana.document.write("Java NO disponible en esta ventana "+"<hr>");
        };
        //Creación de un IFRAME de Google de 800x600. 
        var iframe = document.createElement("IFRAME");
        //propiedades iframe en Google no funciona 
        iframe.src="http://www.marca.com/index.html";
        iframe.height=800;
        iframe.width=600;
        nuevaVentana.document.body.appendChild(iframe);
        
    }    
    function comprobarNavegador(){
        var nombreNav, usrAg = navigator.userAgent;
         if(usrAg.indexOf("Chrome") > -1) {

            nombreNav = "Google Chrome";

        } else if (usrAg.indexOf("Safari") > -1) {

            nombreNav = "Apple Safari";

        } else if (usrAg.indexOf("Opera") > -1) {

            nombreNav = "Opera";

        } else if (usrAg.indexOf("Firefox") > -1) {

            nombreNav = "Mozilla Firefox";

        } else if (usrAg.indexOf("WOW") > -1) {

            nombreNav = "Microsoft Internet Explorer";

        }
        return nombreNav;
    }
    
    //Ventana Principal
    document.write("<h1>TAREA DWEC03</h1><hr/>");
    //    Que solicite: introduzca su nombre y apellidos.
    var nomApe = prompt("Introduce su nombre y apellidos:","");
    //var nomApe ="Miguel Angel Diez Delgado Pardo";
    //    Que solicite: introduzca DIA de nacimiento.
    var diaNac = prompt("Introduce su DIA de nacimiento(1-30):","");
    //var diaNac = 11;
    //    Que solicite: introduzca MES de nacimiento.
    var mesNac = prompt("Introduce su MES de nacimiento(1-12):",""); 
    //var mesNac = 5; 
    //    Que solicite: introduzca AÑO de nacimiento.
    var anyoNac = prompt("Introduce su AÑO de nacimiento:(1850-2016)","");
    //var anyoNac = 1992;
    
	var mes = new Array("Enero","Febrero","Marzo", "Abril","Mayo", "Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
 

    //impresion en pantalla
    document.write("Buenos dias "+ nomApe+"<hr>");
    document.write("Tu nombre tiene "+nomApe.length+" caracteres, incluidos espacios."+"<hr>");
    document.write("La primera letra A de tu nombre está en la posición: "+nomApe.indexOf('A')+"<hr>");
    document.write("La última letra A de tu nombre está en la posición: "+nomApe.lastIndexOf('a')+"<hr>");
    document.write("Tu nombre menos las 3 primeras letras es: "+nomApe.substr(3,nomApe.length)+"<hr>");
    document.write("Tu nombre todo en mayúsculas es:  "+nomApe.toUpperCase()+"<hr>");
    
    var anyoActual = new Date().getFullYear();
    var fechaNac=new Date(anyoNac,mesNac,diaNac);
    var anyosActuales=anyoActual-anyoNac;
    var dias = new Array('domingo','lunes','martes','miercoles','jueves','viernes','sabado')
	
    document.write("Tu edad es: "+anyosActuales+" años.<hr>");
    document.write("Naciste un feliz "+dias[fechaNac.getDay()]+" del año "+fechaNac.getFullYear()+"<hr>");
    //radianes = grados x PI / 180 (conversión desde grados a radianes) 
    document.write("El coseno de 180 es: "+Math.cos((180*Math.PI)/180)+"<hr>");
    document.write("El número mayor de (34,67,23,75,35,19) es: "+Math.max(34,67,23,75,35,19)+"<hr>");
    document.write("Ejemplo de número al azar: "+Math.random()*100+"<hr>");

