<?php
/* Smarty version 3.1.30, created on 2017-04-23 19:41:43
  from "C:\xampp\htdocs\TiendaProductos2\UT7_DWES\web\smarty\tarea\templates\listaproductos.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_58fce757686b67_14801759',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '1e8d1329836beb7477c99019fadd206c2a582e7b' => 
    array (
      0 => 'C:\\xampp\\htdocs\\TiendaProductos2\\UT7_DWES\\web\\smarty\\tarea\\templates\\listaproductos.tpl',
      1 => 1492969298,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_58fce757686b67_14801759 (Smarty_Internal_Template $_smarty_tpl) {
?>
    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['productos']->value, 'producto');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['producto']->value) {
?>
      <p><form id='<?php echo $_smarty_tpl->tpl_vars['producto']->value->getcodigo();?>
' action='productos.php' method='post' onsubmit='return anadeCesta();'>
      <input type='hidden' name='cod' value='<?php echo $_smarty_tpl->tpl_vars['producto']->value->getcodigo();?>
'/>
      
      <input type='hidden' name='numAle' id='numAle' value='<?php echo $_smarty_tpl->tpl_vars['codigoAleatorio']->value;?>
'/>
      <input type='submit' name='enviar' class='boton' value='Añadir'/>
      <?php if ($_smarty_tpl->tpl_vars['producto']->value->getfamilia() != "ORDENA") {?>
        <?php echo $_smarty_tpl->tpl_vars['producto']->value->getnombrecorto();?>

      <?php } else { ?>
        <a href="ordenador.php?codigo=<?php echo $_smarty_tpl->tpl_vars['producto']->value->getcodigo();?>
"><?php echo $_smarty_tpl->tpl_vars['producto']->value->getnombrecorto();?>
</a>
      <?php }?>
      : <?php echo $_smarty_tpl->tpl_vars['producto']->value->getPVP();?>
 euros.</form></p>
    <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

<?php }
}
