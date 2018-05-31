<?php
/* Smarty version 3.1.30, created on 2017-04-23 20:30:07
  from "C:\xampp\htdocs\TiendaProductos2\UT7_DWES\web\smarty\tarea\templates\cesta.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_58fcf2af650638_50790576',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'acee5bb80566dfa9dab76e872029aab60e44f2a6' => 
    array (
      0 => 'C:\\xampp\\htdocs\\TiendaProductos2\\UT7_DWES\\web\\smarty\\tarea\\templates\\cesta.tpl',
      1 => 1492964105,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_58fcf2af650638_50790576 (Smarty_Internal_Template $_smarty_tpl) {
?>
<html>
<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <title>Tarea 5: Cesta de la Compra con Plantillas</title>
  <link href="css/tienda.css" rel="stylesheet" type="text/css">
</head>

<body class="pagcesta">

<div id="contenedor">
  <div id="encabezado">
    <h1>Cesta de la compra Tarea DWES07</h1>
  </div>
  <div id="productos">

    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['productoscesta']->value, 'producto');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['producto']->value) {
?>
        <p>
            <span class='codigo'><?php echo $_smarty_tpl->tpl_vars['producto']->value->getcodigo();?>
</span>
            <span class='nombre'><?php echo $_smarty_tpl->tpl_vars['producto']->value->getnombre();?>
</span>
            <span class='precio'><?php echo $_smarty_tpl->tpl_vars['producto']->value->getPVP();?>
</span>
        </p>
    <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

    <hr />
    <p><span class='pagar'>Precio total: <?php echo $_smarty_tpl->tpl_vars['coste']->value;?>
 €</span></p>
    <form action='pagar.php' method='post'>
        <p><span class='pagar'>
            <input type='submit' name='pagar' class='boton' value='Pagar'/>
        </span></p>
    </form>
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
</html>
<?php }
}
