<?php
/* Smarty version 3.1.30, created on 2017-04-13 16:06:31
  from "C:\xampp\htdocs\TiendaProductos\UT5_DWES\web\smarty\tarea\templates\productoscesta.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_58ef85e7c22a53_57011110',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '9df91bb085fa75231a42a1c24d92316c21eef3fe' => 
    array (
      0 => 'C:\\xampp\\htdocs\\TiendaProductos\\UT5_DWES\\web\\smarty\\tarea\\templates\\productoscesta.tpl',
      1 => 1492092367,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_58ef85e7c22a53_57011110 (Smarty_Internal_Template $_smarty_tpl) {
?>
<h3><img src='img/cesta.png' alt='Cesta' width='24' height='21'> Cesta</h3>
<hr />
<?php if (empty($_smarty_tpl->tpl_vars['productoscesta']->value)) {?>
    <p>Cesta vacía</p>
<?php } else { ?>
    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['productoscesta']->value, 'producto');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['producto']->value) {
?>
        <p><?php echo $_smarty_tpl->tpl_vars['producto']->value->getcodigo();?>
</p>
    <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

<?php }?>

<form id='vaciar' action='productos.php' method='post'>
    <?php if (empty($_smarty_tpl->tpl_vars['productoscesta']->value)) {?>
        <input type='submit' name='vaciar' class='boton' value='Vaciar Cesta' disabled='true' />
    <?php } else { ?>
        <input type='submit' name='vaciar' class='boton' value='Vaciar Cesta' />
    <?php }?>
</form>
<form id='comprar' action='cesta.php' method='post'>
    <?php if (empty($_smarty_tpl->tpl_vars['productoscesta']->value)) {?>
        <input type='submit' name='comprar' class='boton' value='Comprar' disabled='true' />
    <?php } else { ?>
        <input type='submit' name='comprar' class='boton' value='Comprar' />
    <?php }?>
</form> 
<?php }
}
