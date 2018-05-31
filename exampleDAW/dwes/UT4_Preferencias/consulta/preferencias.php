<?php

$operacion = "insertarPreferencias";
if (isset($_POST['operacion']))
{
    $operacion = $_POST['operacion'];
}

switch ($operacion)
{
    case 'borrarPreferencias':
        borrarPreferencias();
        break;
    case 'ConsultarPreferencias':
        consultarPreferencias();
        break;
    default:
        insertarPreferencias();
}

function consultarPreferencias()
{
    // Iniciamos la sesión o recuperamos la anterior sesión existente
    session_start();
    // Creamos un array con los datos de las preferencias enviadas en el formulario
    $Preferencias = $_SESSION['preferencias'];
    foreach ($Preferencias as $clave => $valor)
    {
        $Preferencias[$clave] = $valor;
    }
    //Devolvemos el array con las preferencias guardadas 
    echo json_encode($Preferencias, JSON_UNESCAPED_UNICODE);
}

function borrarPreferencias()
{
    // Iniciamos la sesión o recuperamos la anterior sesión existente
    session_start();
    // Destruir todas las variables de sesión.
    $_SESSION = array();

    // Finalmente, destruir la sesión.
    session_destroy();
    //Devolvemos la cadena con el texto a mostrar
    echo "Información de la sesión eliminada";
}

function insertarPreferencias()
{
    // Iniciamos la sesión o recuperamos la anterior sesión existente
    session_start();

	// Creamos un array con los datos de las preferencias enviadas en el formulario
    $Preferencias = $_POST;
    foreach ($Preferencias as $clave => $valor)
    {
        $Preferencias[$clave] = $valor;
    }
    // y lo añadimos a la sesion
    // Comprobamos si la variable ya existe
    $_SESSION['preferencias'] = $Preferencias;


    //Devolvemos el array con las preferencias guardadas 
    echo json_encode($Preferencias, JSON_UNESCAPED_UNICODE);
}
