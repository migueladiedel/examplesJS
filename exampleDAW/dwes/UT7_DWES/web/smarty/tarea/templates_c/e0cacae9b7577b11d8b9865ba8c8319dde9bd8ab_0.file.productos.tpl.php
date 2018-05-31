<?php
/* Smarty version 3.1.30, created on 2017-04-23 20:19:01
  from "C:\xampp\htdocs\TiendaProductos2\UT7_DWES\web\smarty\tarea\templates\productos.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_58fcf015e68897_69956318',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'e0cacae9b7577b11d8b9865ba8c8319dde9bd8ab' => 
    array (
      0 => 'C:\\xampp\\htdocs\\TiendaProductos2\\UT7_DWES\\web\\smarty\\tarea\\templates\\productos.tpl',
      1 => 1492971538,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:productoscesta.tpl' => 1,
    'file:listaproductos.tpl' => 1,
  ),
),false)) {
function content_58fcf015e68897_69956318 (Smarty_Internal_Template $_smarty_tpl) {
?>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <title>Tarea 5: Listado de Productos con Plantillas</title>
    <link href="css/tienda.css" rel="stylesheet" type="text/css">
    
    <?php echo $_smarty_tpl->tpl_vars['xajax']->value->printJavascript();?>

    <?php echo '<script'; ?>
 type="text/javascript" src="fcesta.js"><?php echo '</script'; ?>
>
  </head>

  <body class="pagproductos">
    <div id="contenedor">
      <div id="encabezado">
        <h1>Listado de productos</h1>
      </div>
    
      <!-- Dividir en varios templates -->
      <div id="cesta" style="text-align:center">      
        <?php $_smarty_tpl->_subTemplateRender("file:productoscesta.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

      </div>
    
      <div id="productos">
        <?php $_smarty_tpl->_subTemplateRender("file:listaproductos.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

      </div>
  
      <br class="divisor" />
      <div id="pie">
        <form action='logoff.php' method='post'>
          <input type='submit' name='desconectar' class='boton' style='width:100%;' value='Desconectar usuario <?php echo $_smarty_tpl->tpl_vars['usuario']->value;?>
'/>
        </form>        
      </div>
    </div>
  </body>
</html><?php }
}
