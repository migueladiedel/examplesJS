window.onload = function() {
	document.formulario.cod_postal.focus();
	document.formulario.addEventListener('submit', validarFormulario);
	document.formulario.num_person.disabled = true;
	document.formulario.list_tip_turist.addEventListener('change', function() {
		if (formulario.list_tip_turist.value == "Grupo") {
			document.formulario.num_person.disabled = false;
			document.formulario.num_person.focus();
		} else {
			document.formulario.num_person.disabled = true;
			document.formulario.num_person.value = "";
		}
	});

}

function validarFormulario(e) {
	// Resetear valores por defecto de los navegadores
	e.preventDefault();
	var todoCorrecto = true;
	var focusable = false;
	var formulario = document.formulario;
	var re = /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/;
	comprobarExpresionRegular(re, formulario.cod_postal);
	todoCorrecto=comprobarSeleccion(formulario.list_pais);
	todoCorrecto=comprobarSeleccion(formulario.list_prov);
	todoCorrecto=comprobarSeleccion(formulario.list_pobla);
	todoCorrecto=comprobarSeleccion(formulario.list_tip_aloj);
	todoCorrecto=comprobarSeleccion(formulario.list_tip_turist);
	if (formulario.num_person.disabled == false) {
		var re2 = /\d/;
		comprobarExpresionRegular(re2, formulario.num_person);
	}
	switch (formulario.list_prov.value) {
      case "Burgos":
    	formulario.list_com_auto.value="Castilla y León";
    	break;
      case "Palencia":
    	formulario.list_com_auto.value="Cantabria";
    	break;
    }
	enviarDatos(todoCorrecto, formulario);
}
function enviarDatos(todoCorrecto, formulario) {
	if (todoCorrecto == true) {
		formulario.submit();
	}
}
function comprobarSeleccion(campoComprobar) {
	compro=false;
	if (campoComprobar.value == "-Seleccionar-") {
		campoComprobar.style.borderColor ="red";
		
	}else{
		campoComprobar.style.borderColor ="green";
		compro=true;
	}
	return compro;
}
function comprobarExpresionRegular(expresion,campoValidar) {
	if (!expresion.exec(campoValidar.value)) {
		campoValidar.style.borderColor ="red";
		todoCorrecto = false;
	}else{
		campoComprobar.style.borderColor ="green";
	}
}




/*if (!re.exec(formulario.cod_postal.value)) {
formulario.cod_postal.style.borderColor ="red";
todoCorrecto = false;
}
if (formulario.list_pais.value == "-Seleccionar-") {
formulario.list_pais.style.borderColor ="red";
todoCorrecto = false;
}
if (formulario.list_prov.value == "-Seleccionar-") {
formulario.list_prov.style.borderColor ="red";
todoCorrecto = false;
}
if (formulario.list_pobla.value == "-Seleccionar-") {
formulario.list_pobla.style.borderColor ="red";
todoCorrecto = false;
}
if (formulario.list_tip_turist.value == "-Seleccionar-") {
formulario.list_tip_turist.style.borderColor ="red";
todoCorrecto = false;
}
if (formulario.list_tip_aloj.value == "-Seleccionar-") {
formulario.list_tip_aloj.style.borderColor ="red";
todoCorrecto = false;
}

if (!re.exec(formulario.cod_postal.value)) {
		formulario.cod_postal.style.borderColor ="red";
		todoCorrecto = false;
}
	
if (!re2.exec(formulario.num_person.value)) {
		formulario.num_person.style.borderColor ="red";
		todoCorrecto = false;
}
*/
