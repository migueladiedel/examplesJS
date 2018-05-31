/**
 * @author  Miguel  Ángel Díez Delgado
 */

function Edificio(calle,num,codPostal){
    // Propiedades
    this.calle = calle;
    this.num = num;
    this.codPostal = codPostal;
    //Contenedor de los datos de las plantas del edificio
    this.datosPlantas = new Array();
        
    //Mensaje de creacion de edificio
    document.write("Construido nuevo edificio en calle: "+calle+", nº: "+num+", CP: "+codPostal+"<br>");
    

    this.agregarPlantasYPuertas = function(numplantas,puertas){
        //El método "push" nos va a permitir agregar elementos al final del array
       //Agregamos plantas al edificio
        for (var i = 0; i < numplantas; i++) {
            this.datosPlantas.push(new Planta(this.datosPlantas.length+1,puertas));	
        }
        
    };
    
    this.modificarNumero = function(numero){
        this.num = numero;
    };
    
    this.modificarCalle = function(calle){
        this.calle = calle;
    };
    
    this.modificarCodigoPostal = function(codigo){
        this.codPostal = codigo;
    };
    
    this.imprimeCalle=function(){
        return calle;
    };
    
    this.imprimeNumero=function(){
        return num;
    };
    
    this.imprimeCodigoPostal=function(){
        return codPostal;
    };
    
    this.agregarPropietario = function(nombre,planta,puerta){
        var arrayPuertas=this.datosPlantas[planta-1].datosPuertas[puerta-1];
        arrayPuertas.modificarPropietario(nombre);
        //Mensaje de agregar propietario
        document.write("<br>"+nombre+" es ahora el propietario de la puerta "+puerta+" de la planta "+planta);
    };
    
    this.imprimePlantas = function(){
        for (var i = 0; i < this.datosPlantas.length; i++) {
           var  numPlanta=this.datosPlantas[i].numPlanta;
            for (var j = 0; j < this.datosPlantas[i].datosPuertas.length; j++) {
                var arrayPuertas=this.datosPlantas[i].datosPuertas[j];
                document.write("<p>Propietario del piso  "+arrayPuertas.numPuerta+" de la planta    " +numPlanta+"  :  "+arrayPuertas.propietario+"</p>");
            }
        }
    };
    
    

}

function Planta(numPlanta,numPuertas){
    // Propiedades
    this.numPlanta=numPlanta;
    this.datosPuertas=new Array();
    
    for (var i = 0; i < numPuertas; i++) {
		this.datosPuertas.push(new Puerta(i+1));	
    }
}

function Puerta(numPuerta){
    this.numPuerta=numPuerta;
    this.propietario="";
    this.modificarPropietario = function(propietario){
        this.propietario=propietario;
    };
    
}

var edificioA=new Edificio("Garcia Prieto","58",15706);
var edificioB=new Edificio("Camino Caneiro","29",32004);
var edificioC=new Edificio("San Clemente","s/n",15705);
document.write("<br>El código postal del edificio A es: "+edificioA.imprimeCodigoPostal());
document.write("<br>La calle del edificio C es: "+edificioC.imprimeCalle());
document.write("<br>El edificio B está situado en la calle "+edificioB.imprimeCalle()+" numero "+edificioB.imprimeNumero()+"<br>");

document.write("<br>Agregamos 2 plantas y 3 puertas por planta al edificio A...<br>");
edificioA.agregarPlantasYPuertas(2,3);
document.write("<br>Agregamos 4 propietarios al edificio A...<br>");
edificioA.agregarPropietario("Jose Antonio Lopez",1,1);
edificioA.agregarPropietario("Luisa Martinez",1,2);
edificioA.agregarPropietario("Marta Castellón",1,3);
edificioA.agregarPropietario("Antonio Pereira",2,2);

document.write("<br><br><b>Listado de propietarios del edificio calle "+edificioA.imprimeCalle()+" número "+edificioA.imprimeNumero() +"</b><br>");
edificioA.imprimePlantas();

document.write("<br>Agregamos 1 planta más al edificio A...<br>");
edificioA.agregarPlantasYPuertas(1,3);
document.write("<br>Agregamos 1 propietario más al edificio A planta 3, puerta 2...<br>");
edificioA.agregarPropietario("Pedro Meijide",3,2);

document.write("<br><br><b>Listado de propietarios del edificio calle "+edificioA.imprimeCalle()+" número "+edificioA.imprimeNumero() +"</b><br>");
edificioA.imprimePlantas();