<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Agenda Trabajo DWES02</title>
        <link href="css/estiloForm.css" rel="stylesheet" type="text/css" media="screen" />
     </head>
    <body>
        <div class="group">
           <h1>Visualizaci&oacute;n AGENDA</h1>
            <table id="agenda">
                <tr>
                    <th>Nombre</th>
                    <th>Tel&eacute;fono</th>
                </tr>
            </table>
        </div>
        <div class="group">
            <h1>Introducci&oacute;n nuevo Contacto</h1>
           <form id="form" method="POST">
                <label for="nombre">Tu nombre:</label>
                <input class="form-input" type="text" name="nombre" id="nombre"><div id="mensajeNombre"></div>
                <br>
                <label for="telefono">Tu tel&eacute;fono:</label>
                <input class="form-input" type="text" name="telefono" id="telefono">
                <br>
                <input type="submit" class="form-btn" value="Enviar" id="comprobar">
                <input type="reset" class="form-btn" value="Limpiar" id="comprobar">
            </form>
        </div>
    <script src="js/jquery-2.2.0.js"></script>
    <script src="js/jquery.validate.min.js"></script> 
    <script src="js/additional-methods.min.js"></script>
    <script src="js/scriptForm.js"></script>   
    </body>
</html>

