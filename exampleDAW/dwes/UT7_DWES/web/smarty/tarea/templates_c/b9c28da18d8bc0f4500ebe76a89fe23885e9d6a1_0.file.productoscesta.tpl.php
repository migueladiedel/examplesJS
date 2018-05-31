<?php
/* Smarty version 3.1.30, created on 2017-04-23 20:29:57
  from "C:\xampp\htdocs\TiendaProductos2\UT7_DWES\web\smarty\tarea\templates\productoscesta.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_58fcf2a50ce922_60399548',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'b9c28da18d8bc0f4500ebe76a89fe23885e9d6a1' => 
    array (
      0 => 'C:\\xampp\\htdocs\\TiendaProductos2\\UT7_DWES\\web\\smarty\\tarea\\templates\\productoscesta.tpl',
      1 => 1492972194,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_58fcf2a50ce922_60399548 (Smarty_Internal_Template $_smarty_tpl) {
?>
<h3><img src='img/cesta.png' alt='Cesta' width='24' height='21'> Cesta</h3>
<hr />
<?php if (empty($_smarty_tpl->tpl_vars['c']->value)) {?>
    <p>Cesta vacía</p>
<?php } else { ?>
    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['c']->value, 'producto');
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


<form id='vaciar' action='productos.php' method='post' onsubmit='return vaciaCesta();'>
    <?php if (empty($_smarty_tpl->tpl_vars['c']->value)) {?>
        <input type='submit' name='vaciar' class='boton' value='Vaciar Cesta' disabled='true' />
    <?php } else { ?>
        <input type='submit' name='vaciar' class='boton' value='Vaciar Cesta' />
    <?php }?>
</form>


<form id='comprar' action='cesta.php' method='post' onsubmit='return muestraCesta();'>
    <?php if (empty($_smarty_tpl->tpl_vars['c']->value)) {?>
        <input type='submit' name='comprar' class='boton' value='Comprar' disabled='true' />
    <?php } else { ?>
        <input type='submit' name='comprar' class='boton' value='Comprar' />
    <?php }?>
</form> 
<?php }
}
