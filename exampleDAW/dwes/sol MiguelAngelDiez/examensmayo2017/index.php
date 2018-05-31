<!doctype html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Mayo 2017</title>
  <link href="css/css.css" rel="stylesheet" type="text/css">
</head>

<body>
    <div id='login'>
    <fieldset >
        <legend>Login</legend>
        <div><span id="mostrar" class='error'></span></div>
        <div class='campo'>
            <label for='usuario' >Usuario:</label><br/>
            <input type='text' name='usuario' id='usuario' maxlength="50" /><br/>
        </div>
        <div class='campo'>
            <label for='password' >Contraseña:</label><br/>
            <input type='password' name='password' id='password' maxlength="50" /><br/>
        </div>
		<div id="cambio_clave" class="campo">
			<label for='newpassword' >Nueva contraseña:</label><br/>
			<input type="text" id="newpassword" maxlength="50"/><br />
			<label for='repeatnewpassword' >Repite:</label><br/>
			<input type="text" id="repeatnewpassword" maxlength="50" /><br />
		</div>
        <div class='campo'>
            <input type='submit' name='enviar' value='Enviar' />
        </div>
		
    </fieldset>
    </div>
        <script src="js/jquery-2.2.0.js"></script>
        <script src="js/jquery.validate.min.js"></script> 
        <script src="js/script.js"></script>   
</body>
</html>