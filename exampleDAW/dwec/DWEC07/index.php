<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>SOLUCION TAREA DWEC07</title>

        <link rel="stylesheet" type="text/css" href="css/estilos.css" />
        <script type="text/javascript" src="js/jquery.js"></script>
        <script type="text/javascript" src="js/funciones.js"></script>
        <script type="text/javascript" src="js/index.js"></script>
    </head>
    <body>
        <form name="formulario" action="">
            <div id="principal">

                <div id="cabecera">
                    <div id="indicador"></div>
                    <div id="titulo">Lector de Titulares RSS con AJAX y jQuery</div>
                </div>

                <div id="seccionFeeds">
                    <div id="noticias">
                        Cargando Contenido...
                    </div>

                </div>

                <div id="controles">
                    <input type="button" name="anterior" id="anterior" value="&#60; ANTERIOR" />
                    <input type="button" name="siguiente" id="siguiente" value="SIGUIENTE &#62;" />
                    <hr/>
                    <select name="campoSelect" id="campoSelect"></select>
                    <input type="button" name="crearRSS" id="crearRSS" value="Añadir RSS" />
                    <input type="button" name="borrarRSS" id="borrarRSS" value="Eliminar RSS" />
                </div>

            </div>
        </form>
    </body>
</html>