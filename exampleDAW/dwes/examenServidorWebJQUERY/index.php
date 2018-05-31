<?php
/*
  ......................................
 */
?>
<!doctype html>
<html lang="es">
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" type="text/css" href="css/css.css" media="screen" />
        <script src="js/jquery-2.2.0.js"></script>
        <script src="js/jquery.validate.min.js"></script> 
        <script src="js/scriptForm.js"></script>   
        <title>Ejercicio 2015/16</title>
    </head>
    <body>
        <header>
            Desarrollo de Aplicaciones Web en Entorno Servidor. Febrero 2016
        </header>
        <section>
            <article>

                <!--Modificar action para asignarle un script -->

                <form action="" method="post" id="generar">
                    Continente: <input type="text" size="10" maxlength="10" name="continente" id="continente" />
                    País: <input type="text" size="20" maxlength="20" name="pais" id="pais" />
                    Capital: <input type="text" size="20" maxlength="20" name="capital" id="capital" />
                    <br />
                    <fieldset>
                        Superficie: <input type="numeric" size="10" maxlength="10" name="superficie" id="superficie" /> 
                        <fieldset>
                            = <input type="radio" name="cmp_super" id="cmp1" checked="checked" value="=" />&nbsp;&nbsp;
                            &gt; <input type="radio" name="cmp_super" id="cmp2" value=">" />&nbsp;&nbsp;
                            &lt; <input type="radio" name="cmp_super" id="cmp3" value="<" />
                        </fieldset>
                    </fieldset>
                    <fieldset>
                        Población: <input type="numeric" size="12" maxlength="12" name="poblacion" id="poblacion" /> 
                        <fieldset>
                            = <input type="radio" name="cmp_pob" id="cmp4" checked="checked" value="=" />&nbsp;&nbsp;
                            &gt; <input type="radio" name="cmp_pob" id="cmp5" value=">" />&nbsp;&nbsp;
                            &lt; <input type="radio" name="cmp_pob" id="cmp6" value="<" />
                        </fieldset>
                    </fieldset>
                    <br />
                    Idioma: <input type="text" size="15" maxlength="15" name="idioma" id="idioma" />
                    Religión: <input type="text" size="20" maxlength="20" name="religion" id="religion" />
                    <br />
                    <input type="submit" value="Generar" />
                </form>
            </article>
            <article>

                <!--Modificar action para asignarle un script -->

                <form action="" method="post" id="guardar">
                    <input type="text" size="100" maxlength="100" readonly="readonly" name="sentencia" id="sentencia" value="<?php /* MUESTRA LA SENTENCIA GENERADA */ ?>" />
                    <input type="submit" value="Guardar" />
                </form>
            </article>
            <article id="sentenciasGuardadas" class="lineas">
                <?php
                /* .....................
                  AQUÍ SE MUESTRAN LAS SENTENCIAS SQL GUARDADAS
                 */
                ?>
            </article>
            <article class="lineas">
                <table id="presenta">
                    <tr>
                        <th>Continente</th><th>País</th><th>Capital</th><th>Superficie</th><th>Población</th><th>Idioma</th><th>Religión</th>
                    </tr>
                    <?php
                    /* F
                      EL RESULTADO DE LA CONSULTA SE MUESTRA AQUÍ
                     */
                    ?>

                </table>
            </article>
        </section>
    </body>
</html>