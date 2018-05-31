$(document).on('click', '#cancelar', function () {
     //Abrimas la ventana nueva  que queremos que se habra al pulsar Cancelar
     window.location='index.php';
});

$(function () {
     var idProducto = localStorage.getItem("idProducto");
    $.post('consultas/productos.php', $("#form").serialize() + '&operacion=' + "consultarProductosByID" + '&idProducto=' + idProducto,
                    function (datos) {
                        //Parseamos el array a un objeto JSON para poder recorrerlo sin problemas
                        datos=JSON.parse(datos);
                        $('#nomCorto').val(datos[0].nombre_corto);
                        $('#nombre').val(datos[0].nombre);
                        $('#descripcion').val(datos[0].descripcion);
                        $('#PVP').val(datos[0].PVP);
                    }).error(function () {

            });
            
            $("#nomCorto").focus();
           $("#formMod").validate({
                submitHandler: function () {
                    $.post('consultas/productos.php', $("#formMod").serialize() + '&operacion=' + "actualizarProductos"+ '&idProducto=' + idProducto,
                            function (datos) {
                              datos=JSON.parse(datos);
                                if (datos==="Correcta"){
                                     //Abrimas la ventana nueva 
                                     window.location='actualizar.php';
                                }else{
                                    alert("Error al realizar la operacion de actualizacion");
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
