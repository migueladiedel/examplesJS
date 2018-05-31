<?php
/* Smarty version 3.1.30, created on 2017-04-23 21:51:13
  from "C:\xampp\htdocs\TiendaProductos2\UT7_DWES\web\smarty\tarea\templates\ordenador.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_58fd05b1b779f4_02657436',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '9fdd4dc0fd059ac96b78f3d0b2abb567801721fc' => 
    array (
      0 => 'C:\\xampp\\htdocs\\TiendaProductos2\\UT7_DWES\\web\\smarty\\tarea\\templates\\ordenador.tpl',
      1 => 1492977051,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_58fd05b1b779f4_02657436 (Smarty_Internal_Template $_smarty_tpl) {
?>
<html>
    <head>
      <meta http-equiv="content-type" content="text/html; charset=UTF-8">
      <title>Ordenador <?php echo $_smarty_tpl->tpl_vars['ordenador']->value->getcodigo();?>
</title>
      <link href="css/tienda.css" rel="stylesheet" type="text/css">
    </head>

    <body class="pagproductos">
        <div id="contenedor" style="background-color: #df8;">
          <div id="encabezado">
            <h1><?php echo $_smarty_tpl->tpl_vars['ordenador']->value->getnombrecorto();?>
</h1>
                        <p><b>C&oacute;digo: <?php echo $_smarty_tpl->tpl_vars['ordenador']->value->getcodigo();?>
</b></p>
          </div>
          <div class="ordenador">
                <h2>Caracter&iacute;sticas:</h2>
                <p><b>Procesador:</b> <?php echo $_smarty_tpl->tpl_vars['ordenador']->value->getprocesador();?>
</p>
                <p><b>RAM:</b> <?php echo $_smarty_tpl->tpl_vars['ordenador']->value->getram();?>
 GB</p>
                <p><b>Tarjeta gr&aacute;fica:</b> <?php echo $_smarty_tpl->tpl_vars['ordenador']->value->getgrafica();?>
</p>
                <p><b>Unidad &oacute;ptica:</b> <?php echo $_smarty_tpl->tpl_vars['ordenador']->value->getunidadoptica();?>
</p>
                <p><b>Sistema Operativo:</b> <?php echo $_smarty_tpl->tpl_vars['ordenador']->value->getso();?>
</p>		
                <p><b>Otros:</b> <?php echo $_smarty_tpl->tpl_vars['ordenador']->value->getotros();?>
</p>
                <p><b>PVP:</b> <?php echo $_smarty_tpl->tpl_vars['ordenador']->value->getpvp();?>
</p>
                <h2>Descripci&oacute;n:</h2>
                <p><?php echo $_smarty_tpl->tpl_vars['ordenador']->value->getdescripcion();?>
</p>
            </div>
            <div id="pie" style="height: 25px">
                <form action="productos.php" method="post">
                    <input type='submit' name='' value='Volver' class='izq boton' />
                    <input type='hidden' name='cod' value='<?php echo $_smarty_tpl->tpl_vars['ordenador']->value->getcodigo();?>
' />
                    
                    <input type='hidden' name='numAle' id='numAle' value='<?php echo $_smarty_tpl->tpl_vars['codigoAleatorio']->value;?>
'/>
                    <input type='submit' name='enviar' value='Comprar' class='dch boton' />
                </form>
            </div>
        </div>
    </body>
</html><?php }
}
