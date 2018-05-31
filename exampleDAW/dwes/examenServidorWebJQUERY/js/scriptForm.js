$(function () {
    $("#continente").focus();
    $("#generar").validate({
        submitHandler: function () {
            $.post('consulta.php', $("#generar").serialize(),
                    function (datos) {
                        //Mostramos la sentencia generada en el campo 'sentencia'
                        $("#sentencia").val(datos);
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
    $("#guardar").validate({
        submitHandler: function () {
            $.post('consulta.php', $("#guardar").serialize()
                    +"&operacion="+"consultarSesion",
                    function (datos) {
                       datos = JSON.parse(datos);
                        //Recorremos el array devuelto y lo recorremos para 
                        //almacenar en el campo indicado
                        $.each(datos, function (key, value) {
                             var sentencia=value+"</br>";
                             $("#sentenciasGuardadas").append(sentencia);
                        });
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