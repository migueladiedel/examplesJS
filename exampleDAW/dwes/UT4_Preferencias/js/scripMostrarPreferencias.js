$(function () {
    $("#idioma").focus();
    $.post('consulta/preferencias.php', $("#form").serialize() + '&operacion=' + "ConsultarPreferencias",
            function (datos) {
                if (datos.length !== 0) {
                    //Parseamos el array a un objeto JSON para poder recorrerlo sin problemas
                    datos = JSON.parse(datos);
                    //Recorremos el array devuelto y lo recorremos para almacenar en los label corresponidentes 
                    $.each(datos, function (key, value) {
                        var selector = $("label#" + key);
                        selector.text(value);
                    });
                }


            }).error(function () {

    });




    $("#form").validate({
        submitHandler: function (datos) {
            $.post('consulta/preferencias.php', $("#form").serialize() + '&operacion=' + "borrarPreferencias",
                    function () {
                        //fForzamos la recarga de la página
                        /*Recargamos desde caché*/
                        location.reload();
                        /*Forzamos la recarga*/
                        location.reload(true);
                        $(".mensaje").html(datos);
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

