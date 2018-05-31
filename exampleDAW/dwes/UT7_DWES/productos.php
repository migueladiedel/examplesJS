<?php

// Incluimos la librería Xajax
require_once('include/xajax_core/xajax.inc.php');

//Incluimos ficheros de clases, smarty y BD
require_once('include/DB.php');
require_once('include/CestaCompra.php');
require_once('web/smarty/libs/Smarty.class.php');

// Recuperamos la información de la sesión
session_start();

// Creamos el objeto xajax
$xajax = new xajax('fcesta.php','xajax_','utf-8',true);

// Registramos la función que vamos a llamar desde JavaScript
$xajax->register(XAJAX_FUNCTION,"anadirCesta");
$xajax->register(XAJAX_FUNCTION,"vaciarCesta");
$xajax->register(XAJAX_FUNCTION,"mostrarCesta");

// Configuramos la ruta en que se encuentra la carpeta xajax_js
$xajax->configure('javascript URI','./include/');

// Configuramos el lenguage que utilizará xajax
$xajax->configure('language','es');

//Comprobacion de la sesion 
if (!isset($_SESSION['usuario'])){
    die("Error - debe <a href='login.php'>identificarse</a>.<br />");
}

// Recuperamos la cesta de la compra
$cesta = CestaCompra::carga_cesta();

// Cargamos la librería de Smarty
$smarty = new Smarty;
$smarty->template_dir = 'web/smarty/tarea/templates/';
$smarty->compile_dir = 'web/smarty/tarea/templates_c/';
$smarty->config_dir = 'web/smarty/tarea/configs/';
$smarty->cache_dir = 'web/smarty/tarea/cache/';

// Comprobamos si se ha enviado el formulario de vaciar la cesta
if (isset($_POST['vaciar'])) {
    unset($_SESSION['cesta']);
    $cesta = new CestaCompra();
}

// Comprobamos si se quiere añadir un producto a la cesta
if (isset($_POST['enviar'])) {
   // Si coincide el número aleatorio de esta sesión con el recibido...
    if(intval($_SESSION['codigoAleatorio'])===intval($_POST['numAle'])){
        // Se genera un nuevo número aleatorio de sesión con el fin que si ahora
        // se refresca la página no coincidirá el nuevo número con el recibido
        $_SESSION['codigoAleatorio']=creaNumero();
        $cesta->nuevo_articulo($_POST['cod']);
        unset($_POST['enviar']);
        $cesta->guarda_cesta();
    }
}else{
    $_SESSION['codigoAleatorio']=creaNumero();
}

// Función que nos genera números aleatorios entre 1 y 100000
function creaNumero(){
    $codigoAle=rand(1,100000);
    return $codigoAle;
}

// Ponemos a disposición de la plantilla los datos necesarios
$smarty->assign('usuario', $_SESSION['usuario']);
$smarty->assign('codigoAleatorio', $_SESSION['codigoAleatorio']);
$smarty->assign('productos', DB::obtieneProductos());
$smarty->assign('c', $cesta->get_productos());
$smarty->assign('xajax', $xajax);

// Mostramos la plantilla
$smarty->display('productos.tpl');
