<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Preferencias Trabajo DWES04</title>
        <link href="css/estilos.css" rel="stylesheet" type="text/css" media="screen" />
    </head>
    <body>
        <fieldset>
            <legend>Preferencias</legend>
            <form id="form" method="POST">
                <span class="mensaje"></span>
                <br>
                <label class="etiqueta" for="idioma">Idioma:</label>
                <select id="idioma" name="idioma">
                    <option value="español">español</option>
                    <option value="inglés">ingl&eacute;s</option>
                </select>
                <br>
                <label class="etiqueta" for="perfil">Perfil p&uacute;blico:</label>
                <select id="perfil" name="perfil">
                    <option value="si">s&iacute;</option>
                    <option value="no">no</option>
                </select>
                <br>
                <label class="etiqueta" for="zonHoraria">Zona horaria:</label>
                <select id="zonHoraria" name="zonHoraria">
                    <option value="GMT-2">GMT-2</option>
                    <option value="GMT-2">GMT-1</option>
                    <option value="GMT-2">GMT</option>
                    <option value="GMT-2">GMT+1</option>
                    <option value="GMT-2">GMT+2</option>
                </select>
                <br>
                <br>
                <br>
               <input type="submit" value="Establecer preferencias">
                <br>
                <a href="mostrar.php">Mostrar preferencias</a>

            </form>
        </fieldset>
        <script src="js/jquery-2.2.0.js"></script>
        <script src="js/jquery.validate.min.js"></script> 
        <script src="js/scriptForm.js"></script>   
    </body>
</html>

