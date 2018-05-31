window.onload = function() {
	var camisetas="5";
	var pantalones=5;
	var totalArticulos;
	
	totalArticulos=Number(camisetas)+pantalones;
	//console.log("Total articulos: "+totalArticulos);
	//alert("Total articulos: "+totalArticulos);
	//document.write("<p>"+totalArticulos+"</p>")
	
	//var introducirNombre=prompt("introduce el nombre", "Miguel");
	
	//alert(introducirNombre);
	resul=Number.MAX_VALUE;
	//alert(resul)
	
	
	//Array
	var cars = ["Mercedes", "Volvo", "BMW"];
	var numeros = [5, 13, 8];
	var sum = 0;
	
	for  (var item in numeros) {
		//alert(numeros[item]);
	}
	
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	//La funcion splice inserta a partir de la posicion 
	//que le dices un array
	fruits.splice(2, 1, "Lemon", "Kiwi");
	for  (var item in fruits) {
		//alert(fruits[item]);
	}
	
	//El método "push" nos va a permitir agregar elementos al final del array
	cars.push("Renault");
	for  (var item in cars) {
		//alert(cars[item]);
	}
	//El método "unshift" nos va a permitir agregar elementos al principio del array
	cars.unshift("Audi");
	for  (var item in cars) {
		//alert(cars[item]);
	}
	//El método "pop" nos va a permitir eliminar elementos al final del array
	cars.pop("Renault");
	for  (var item in cars) {
		//alert(cars[item]);
	}
	//El método "shift" nos va a permitir eliminar elementos al principio del array
	cars.shift("Audi");
	for  (var item in cars) {
		//alert(cars[item]);
	}
	
	var num="1hgj";
	var num2=2;
	
	//Comprobamos el tipo de datos
	//alert("numero1 "+typeof(num)+"\nnumero2 "+typeof(num2)+"\nArray "+typeof(cars));
	
	//Conversiones de tipo cadena a numeric
	var numInt=parseInt(num);
	//alert(numInt)
	
	//comprobación de si es numerico
	//alert("Es numero? "+!isNaN(num)+"\nEs numero? "+!isNaN(num2));
	
	
	//Ejemplo While
	
	var n=0;
	/*while (n < cars.length) {
		//alert(cars[n]+" ");
		document.write("<p>"+cars[n]+"<br/></p>");
		n++;
	}*/
	
	//ejemplo Do-While
	var numero=0;
	/*do {
		numero=prompt("Introduce un numero", "");
	} while (numero!=5);*/
	
	//ejemplo numero aleatorio entre 0 y 100
	var numAleatorio=Math.random()*100;
	//alert(numAleatorio);
	
	//ejemplo Math.round() redondea al número más próximo.
	//alert(Math.round(numAleatorio));
	
	//Ejemplo for
	
	for (var i = 0; i < cars.length; i++) {
		//document.write("<p><label>"+cars[i]+"</label></p>");
	}
	
	//Ejemplo fecha
	var hoy=new Date();
	//document.write(hoy.toDateString());
	
	//Ejemplo try catch
	/*try { 
		document.wrfdgite("<p><label>"+cars[i]+"</label></p>");
	}catch(e) {
    	alert("Error" + e);
    }*/
	
	
	var person = {fname:"John", lname:"Doe", age:25}; 

	var text = "";
	var x;
	for (x in person) {
	    text += person[x];
	}
	//alert(text);
	
	
	for (x in document.getElementById("lista") ){
	   console.log(document.formulario.lista[x]);
	}
	
	
	
	
}

