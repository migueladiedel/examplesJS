$(document).on('click', 'input[type="button"]', function () {
    var idProducto = $(this).attr("id");
   //esto es para compartir la id del producto pulsado, se podría hacer 
   //mediante GET o POST pero me parece más seguro pasar la id y luego hacer un POST desde el script de la otra página
    localStorage.setItem("idProducto",idProducto);
     //Abrimas la ventana nueva 
     window.location='editar.php';
});

$(function () {
    $("#familia").focus();
    $.post('consultas/productos.php',function(respuesta) {
                    // Convertir la cadena enviada desde PHP a un vector de objetos en JavaScript
                    var listaFamilias = JSON.parse(respuesta);
                    // Cargamos desplegable y situamos el elemento
                    // Recorrer el vector de objetos y cargar el desplegable
                    for(var i in listaFamilias){
                        $('#familia').append(new Option(listaFamilias[i].cod));
                    }
            }).error(
                function(){
                    console.log('Error al ejecutar la petición');
                }
            );
    $("#form").validate({
        submitHandler: function () {
            $.post('consultas/productos.php', $("#form").serialize() + '&operacion=' + "consultarProductos",
                    function (datos) {
                        //Parseamos el array a un objeto JSON para poder recorrerlo sin problemas
                        datos=JSON.parse(datos);
                        var cadenaDatos="";
                        for(var i in datos){
                            cadenaDatos+="<p><label>Producto "+datos[i].nombre_corto+": "+datos[i].PVP+" euros. </label>"+
                                    "<input name='edit' type='button' id='"+datos[i].cod+"' value='Editar'></p>";
                        }
                        $('#contenido').html("<h2>Productos de la familia:</h2><br>"+cadenaDatos);
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
