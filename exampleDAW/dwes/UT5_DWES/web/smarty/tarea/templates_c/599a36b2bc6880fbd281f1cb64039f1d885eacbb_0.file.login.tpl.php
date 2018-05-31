<?php
/* Smarty version 3.1.30, created on 2017-04-13 16:14:31
  from "C:\xampp\htdocs\TiendaProductos\UT5_DWES\web\smarty\tarea\templates\login.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_58ef87c75b3f03_03030167',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '599a36b2bc6880fbd281f1cb64039f1d885eacbb' => 
    array (
      0 => 'C:\\xampp\\htdocs\\TiendaProductos\\UT5_DWES\\web\\smarty\\tarea\\templates\\login.tpl',
      1 => 1492092825,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_58ef87c75b3f03_03030167 (Smarty_Internal_Template $_smarty_tpl) {
?>
<html>
<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <title>Tarea 5: Login Tienda Web con Plantillas</title>
  <link href="css/tienda.css" rel="stylesheet" type="text/css">
</head>

<body>
    <div id='login'>
    <form action='login.php' method='post'>
    <fieldset >
        <legend>Login</legend>
        <div><span class='error'><?php echo $_smarty_tpl->tpl_vars['error']->value;?>
</span></div>
        <div class='campo'>
            <label for='usuario' >Usuario:</label><br/>
            <input type='text' name='usuario' id='usuario' maxlength="50" /><br/>
        </div>
        <div class='campo'>
            <label for='password' >Contraseña:</label><br/>
            <input type='password' name='password' id='password' maxlength="50" /><br/>
        </div>

        <div class='campo' style='text-align: center'>
            
            <input type='submit' name='enviar' value='Enviar' />
        </div>
    </fieldset>
    </form>
    </div>
</body>
</html><?php }
}
