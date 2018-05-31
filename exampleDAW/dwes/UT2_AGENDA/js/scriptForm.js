$(document).on('blur', '#nombre', function () {
           if ($("#nombre").val() === "") {
            $("#mensajeNombre").html("Campo nombre vacio");
             $("#mensajeNombre").css({ color: 'Blue' });
       }else{
           $("#mensajeNombre").html("");
       }
});
$(function() {
    $("#nombre").focus();
    $("#form").validate({
        rules:{
            nombre:{
                required:true,//Obligamos a que el nombre sea obligatorio
                lettersonly: true //Obligamos a solo puedan ponerse letras
           },
            telefono:{
                digits: true,//Solo digitos
                minlength: 9,//numeros exactos 9
                maxlength: 9 //numeros exactos 9
            }
        },
        messages:{
            nombre:{
                required:"El campo nombre es obligatorio",
                lettersonly: "Solo caracteres no numeros",
           },
            telefono:{
                digits: "Tiene que ser un telefono Ej:947256859",
                minlength: "Tiene que tener 9 digitos Ej:947256859",
                maxlength: "Tiene que tener 9 digitos Ej:947256859"
            }
        },
        submitHandler: function() {
                    $.post('consulta/agenda.php',$("#form").serialize(),
                            function(datos){
                                //Limpiamos el formulario de campos ocultos 
                               $("#form").find(':input').each(function() {
                                     var entradaAgenda= this;
                                       if(entradaAgenda.type==="hidden"){
                                          entradaAgenda.remove();
                                      }
                                 });
                               
                                //Añadimos los elementos nuevos al formularios como campos ocultos
                                $("#form").append(datos);
                                //Reseteamos el html donde mostramos los datos de la agenda
                                 $("#agenda").html("<tr><th>Nombre</th><th>Tel&eacute;fono</th></tr>");
                                 
                                //Recorremos los campos ocultos del formulario para coger los datos y visualizarlos en nuestra tabla de arriba
                                $("#form").find(':input').each(function() {
                                      var entradaAgenda= this;
                                        if(entradaAgenda.type==="hidden"){
                                           $("#agenda").append("<tr><td>"+entradaAgenda.name+"</td><td> "+entradaAgenda.value+"</td></tr>");
                                        }
                                 });
                      }).error(function(){

                      });
                      //Limpiamos los camopos nombre y telefono y ponemos el foco en nombre
                      $("#nombre").val("");
                      $("#telefono").val("");
                      $("#nombre").focus();
        },
        highlight: function(element) {
           $(element).css({ backgroundColor: 'Red' });
        },
        unhighlight: function(element) {
           $(element).css({ backgroundColor: '#FF9' });
        }

    });

});