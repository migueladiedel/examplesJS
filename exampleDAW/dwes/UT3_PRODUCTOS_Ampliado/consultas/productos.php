<?php

try {
    $opciones = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8");
    $db = new PDO('mysql:host=localhost;dbname=dwes', 'root', '',$opciones);
} catch (PDOException $ex) {
    echo 'Error conectando a la BBDD. ' . $ex->getMessage();
}
 //Modelo Producto para recoger  un array cogiendo de modelo y sus respectivas columnas la consulta deseada 
class producto {
        public $cod;
        public $nombre_corto;
        public $nombre;
        public $descripcion;
        public $PVP;
    }
     //Modelo familia para recoger  un array cogiendo de modelo y sus respectivas columnas la consulta deseada 
     class familia {
        public $cod;
    }
    
$version = $db->getAttribute(PDO::ATTR_SERVER_VERSION);
    
$operacion = "consultarFamilia";
if (isset($_POST['operacion'])){
    $operacion = $_POST['operacion'];
}

switch ($operacion)
{
    case 'actualizarProductos':
        actualizarProductos($db);
        break;
    case 'consultarProductos':
        consultarProductos($db);
        break;
    case 'consultarProductosByID':
        consultarProductosByID($db);
        break;
    default:
        consultarFamilia($db);
}

function consultarProductos($db){
    $sql = "SELECT cod,nombre_corto,PVP FROM producto WHERE familia='".$_POST['familia']."';";
    
    $stmt = $db->prepare($sql);
    $stmt->execute();
    $resultado = $stmt->fetchAll(PDO::FETCH_CLASS, "producto");
    //Enviamos la lista de objetos con JSON
    echo json_encode($resultado,JSON_UNESCAPED_UNICODE);
   
    $stmt = null; // Libera el objeto PDOStatment
    $db = null; // Libera el objeto conexion PDO
    
}

function consultarProductosByID($db){
    
    // $sql = "SELECT nombre_corto,nombre,descripcion,PVP FROM producto WHERE cod='".$_POST['idProducto']."';";
    $sql = "SELECT nombre_corto,nombre,descripcion,PVP FROM producto WHERE cod='".$_POST['idProducto']."';";
    $stmt = $db->prepare($sql);
    $stmt->execute();
    $resultado = $stmt->fetchAll(PDO::FETCH_CLASS, "producto");
    //Enviamos la lista de objetos con JSON
    echo json_encode($resultado);
   
    $stmt = null; // Libera el objeto PDOStatment
    $db = null; // Libera el objeto conexion PDO
    
}

function consultarFamilia($db){
   

    $sql = "SELECT cod FROM familia;";
    $stmt = $db->prepare($sql);
    $stmt->execute();
    $resultado = $stmt->fetchAll(PDO::FETCH_CLASS, "familia");
    //Enviamos la lista de objetos con JSON
    echo json_encode($resultado,JSON_UNESCAPED_UNICODE);
   
    $stmt = null; // Libera el objeto PDOStatment
    $db = null; // Libera el objeto conexion PDO
}

function actualizarProductos($db){
    $idProducto=$_POST["idProducto"];
    $nombre_corto=$_POST["nomCorto"];
    $nombre=$_POST["nomTextArea"];
    $descripcion=$_POST["descripcion"];
    $PVP=$_POST["PVP"];    

    $consulta="UPDATE producto ";
    $consulta.="SET nombre='$nombre',";
    $consulta.="nombre_corto='$nombre_corto',";
    $consulta.="descripcion='$descripcion',";
    $consulta.="PVP='$PVP' ";
    $consulta.="WHERE cod='$idProducto';"; 
    
      $db->exec($consulta);//Esto nos devuelve el numero de registros afectados aunque en mi caso no lo quiero para nada
    
    echo json_encode('Correcta',JSON_UNESCAPED_UNICODE);
    $db = null; // Libera el objeto conexion PDO
}