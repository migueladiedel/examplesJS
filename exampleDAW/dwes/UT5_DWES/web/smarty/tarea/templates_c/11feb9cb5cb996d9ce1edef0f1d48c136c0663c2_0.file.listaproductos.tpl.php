<?php
/* Smarty version 3.1.30, created on 2017-04-13 13:50:16
  from "C:\xampp\htdocs\TiendaProductos\UT5_DWES\web\smarty\tarea\templates\listaproductos.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_58ef65f8522599_91200752',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '11feb9cb5cb996d9ce1edef0f1d48c136c0663c2' => 
    array (
      0 => 'C:\\xampp\\htdocs\\TiendaProductos\\UT5_DWES\\web\\smarty\\tarea\\templates\\listaproductos.tpl',
      1 => 1362014262,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_58ef65f8522599_91200752 (Smarty_Internal_Template $_smarty_tpl) {
?>
    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['productos']->value, 'producto');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['producto']->value) {
?>
      <p><form id='<?php echo $_smarty_tpl->tpl_vars['producto']->value->getcodigo();?>
' action='productos.php' method='post'>
      <input type='hidden' name='cod' value='<?php echo $_smarty_tpl->tpl_vars['producto']->value->getcodigo();?>
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
