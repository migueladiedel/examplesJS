$(function () {
    $("#idioma").focus();
    $("#form").validate({
        rules: {
            idioma: {
                required: true //Obligamos a que el idioma sea obligatorio - Siempre va coger por defecto la primera opcion si nos interesa que eligieran una habia que hacer una regla personalizada
            },
            perfil: {
                required: true
            },
            zonHoraria: {
                required: true
            }
        },
        messages: {
            idioma: {
                required: "El campo idioma es obligatorio"
            },
            perfil: {
                required: "El campo perfil es obligatorio"
            },
            zonHoraria: {
                required: "El campo zona horaria es obligatorio"
            }
        },
        submitHandler: function () {
            $.post('consulta/preferencias.php', $("#form").serialize(),
                    function (datos) {
                        //Parseamos el array a un objeto JSON para poder recorrerlo sin problemas
                        datos=JSON.parse(datos);
                        //Recorremos el array devuelto y lo recorremos para almacenar en los select aunque en este caso como es la misma página no haria falta
                        $.each(datos, function (key, value) {
                              var selector = $("select#"+key);
                              selector.val(value).attr("selected","selected");
                        });
                       

                        if (datos.length!==0){
                            $(".mensaje").html("Información guardada en la sesión");
                        }
                         
                    }).error(function () {

            });

        },
        highlight: function (element) {
            $(element).css({backgroundColor: 'Red'});
        },
        unhighlight: function (element) {
            $(element).css({backgroundColor: '#FF9'});
        }

    });

});