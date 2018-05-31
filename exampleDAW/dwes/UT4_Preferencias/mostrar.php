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
                <span class="mensaje"></span><br>
                <label class="etiqueta">Idioma:</label><br>
                 <label id="idioma" class="texto"></label>
                <br>
                <label class="etiqueta" >Perfil p&uacute;blico:</label><br>
                 <label id="perfil" class="texto"></label>
                <br>
                <label class="etiqueta">Zona horaria:</label><br>
                <label id="zonHoraria" class="texto"></label>
                <br>
                <br>
                <input type="submit" value="Borrar preferencias"><br>
                <a href="index.php">Establecer preferencias</a>

            </form>
        </fieldset>
        <script src="js/jquery-2.2.0.js"></script>
         <script src="js/jquery.validate.min.js"></script> 
        <script src="js/scripMostrarPreferencias.js"></script>   
    </body>
</html>

