<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8">
        <title>Ejercicios Tema 3 Productos DWES</title>
        <link href="css/estilos.css" rel="stylesheet" type="text/css" media="screen" />
    </head>

    <body>

        <div id="encabezado">
            <h1>Tarea:Edici&oacute;n de un producto</h1>
        </div>

        <div id="contenido">
            <h2>Producto:</h2>
            <form id="formMod" method="POST">
                <label for="nomCorto">Nombre corto:</label>
                <input  class="form-input" type="text" name="nomCorto" id="nomCorto"><br>
                <br>
                <label for="nomTextArea">Nombre:</label><br>
                <textarea rows="4" cols="50" id="nomTextArea" name="nomTextArea"> </textarea><br>
                <br>
                
                <br>
                <label for="descripcion">Descripci&oacute;n::</label><br>
                <textarea rows="4" cols="50" id="descripcion" name="descripcion"> </textarea><br>
                <br>

                <label for="PVP">PVP:</label>
                <input  class="form-input" type="text" name="PVP" id="PVP">
                <br>
                <br>
                <br>
                <input type="submit" class="form-btn" value="Actualizar" id="actualizar">
               <input type='button' id="cancelar" value='Cancelar' />
              

            </form>
        </div>

        <div id="pie">
        </div>

        <script src="js/jquery-2.2.0.js"></script>
        <script src="js/jquery.validate.min.js"></script> 
        <script src="js/additional-methods.min.js"></script>
        <script src="js/scriptEdit.js"></script>   



    </body>
</html>
