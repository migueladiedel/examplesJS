$(function () {

});
$(document).on('click', 'input[type="submit"]', function () {
    var name = $(this).attr("name");
     //Abrimas la ventana nueva 
    if (name==="enviar"){
        var user=$("#usuario").val();
        var pass=$("#password").val();
        $.post('consultas/validar.php',
        '&usuario=' + user+'&pass=' + pass,function(datos) {
                    if (datos==="Error"){
                        alert(datos);
                    }
                    if (datos==="Correcto"){
                        window.open("pagina.php");
                    }
                    if (datos==="Mod"){
                       $("#cambio_clave").attr("id", "cambio_clave_correcto");
                        //Cambio el campo name del boton enviar a enviar2
                        $("input[type='submit']").attr("name", "enviar2");
                        //Limpiamos los dos campos usados anteriormente
                        $("#usuario").val("");
                        $("#password").val("");
                        $("#usuario").focus();
                    }
        }).error(
            function(){
                console.log('Error al ejecutar la petición');
            }
        );
    }else{
        var user=$("#usuario").val();
        var pass=$("#password").val();
        var newpassword=$("#newpassword").val();
        var repeatnewpassword=$("#repeatnewpassword").val();
        $.post('consultas/validar2.php',
        '&usuario=' + user+'&pass=' + pass +'&newpassword=' + newpassword+'&repeatnewpassword=' + repeatnewpassword,function(datos) {
              if(datos==="Correcta"){
                windows.open("pagina.php");
              }
            
        }).error(
            function(){
                console.log('Error al ejecutar la petición');
            }
        );
    }
});