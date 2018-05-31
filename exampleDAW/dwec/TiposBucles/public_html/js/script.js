
// Imprimo la cabecera de la tabla
document.write("Tabla de multiplicar del 7<br/><br/>");

//Primera Tabla de multiplicar del 7. 
var num=7;
for (var i=1; i<=10; i++){
    document.write(i+' x '+num+' = '+num*i);
    // Imprimo un salto de línea.
    document.write("<br/>");
}

// Imprimo la cabecera de la tabla
document.write("<br/>Tabla de sumar del 8<br/><br/>");
   
//Segunda Tabla de sumar del 8 
var n = 1;
num=8;
while (n<=8){
    document.write(num+' + '+n+' = '+(num+n));
    // Imprimo un salto de línea.
    document.write("<br/>");
   n=n+1;
}

// Imprimo la cabecera de la tabla
document.write("<br/>Tabla de dividir del 9<br/><br/>");

//Tercera Tabla de dividir del 9
var n=1;
num=9;
var dividendo=0;
do {
   dividendo=num*n;
    document.write(dividendo+' / '+num+' = '+(dividendo/num));
    // Imprimo un salto de línea.
    document.write("<br/>");
   n=n+1;
}while (n<11);

// Imprimo un salto de línea.
document.write("<br/>");

//Comprobar operaciones tenendo en cuenta desplazamiento de bits
document.write("<br/>Operaciones tenendo en cuenta desplazamiento de bits<br/><br/>");

document.write("125 / 8 = ");
document.write(125>>3);
// Imprimo un salto de línea.
document.write("<br/>");

document.write("40 x 4 = ");
document.write(40<<2);
// Imprimo un salto de línea.
document.write("<br/>");

document.write("25 / 2 = ");
document.write(25>>1);
// Imprimo un salto de línea.
document.write("<br/>");

document.write("10 x 16 = ");
document.write(10<<4);
// Imprimo un salto de línea.
document.write("<br/>");

