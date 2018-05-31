<?php

try {
    $opciones = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8");
    $db = new PDO('mysql:host=localhost;dbname=examensmayo2017', 'root', '',$opciones);
} catch (PDOException $ex) {
    echo 'Error conectando a la BBDD. ' . $ex->getMessage();
}

 //Modelo Producto para recoger  un array cogiendo de modelo y sus respectivas columnas la consulta deseada 
class usuarios {
    public $usuario;
    public $clave;
    public $nombre;
    public $fecha;
}

$version = $db->getAttribute(PDO::ATTR_SERVER_VERSION);

$user=$_POST['usuario'];
$op=array('salt'=>'01234567890123456789012');
$passSinCod=$_POST['pass'];
$passCod=password_hash ($passSinCod, PASSWORD_DEFAULT,$op);
$sql = "SELECT usuario,clave,fecha FROM usuarios WHERE usuario='".$user."' AND clave='".$passCod."';";
$stmt = $db->prepare($sql);
$stmt->execute();
$resultado = $stmt->fetchAll(PDO::FETCH_CLASS, "usuarios");
$db = null; // Libera el objeto conexion

$newpassword=$_POST['newpassword'];
$newpasswordCod=password_hash ($newpassword, PASSWORD_DEFAULT,$op);
$repeatnewpassword=$_POST['repeatnewpassword'];

//Comprobamos que la fecha sea distinta a la anterior
$cumplePasswordDistinta=false;
$clave=$resultado[0]->clave;
if($newpasswordCod!=$clave){
    $cumplePasswordDistinta=true;
}

//Comprobamos que tiene al menos 5 caracteres
$cumpleLongitud=false;
$longitud=strlen($newpassword);
if($longitud>=5){
    $cumpleLongitud=true;
}

//Comprobamos que la password antigua coincide con la de la BD
$coincidenConPassBD=false;
if($passCod===$clave){
    $coincidenConPassBD=true;
}

//La contraseña debe verificarse
$verificada=false;
if($newpassword===$repeatnewpassword){
    $verificada=true;
}

//Comrpobamso que se cumplen todos los valores antes de hacer el UPDATE
if($cumplePasswordDistinta && $cumpleLongitud && $coincidenConPassBD && $verificada){
    $consulta="UPDATE usuarios ";
    $consulta.="SET clave='$newpasswordCod',";
    $fecha = date_create(date("y-m-d"));
    $fechaActual=$fecha->format("Y-m-d");
    $consulta.="fecha='$fechaActual'";
    $consulta.=" WHERE usuario='".$user."' AND clave='".$passCod."';";
    try {
        $opciones = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8");
        $db = new PDO('mysql:host=localhost;dbname=examensmayo2017', 'root', '',$opciones);
        $db->exec($consulta);
    } catch (PDOException $ex) {
        echo 'Error conectando a la BBDD. ' . $ex->getMessage();
    }
   
    
    echo 'Correcta';
    $db = null; // Libera el objeto conexion PDO
    session_start();
    if (!isset($_SESSION['validado'])){
        $_SESSION['validado'] = true;
    }
    $campoNombre=$resultado[0]->nombre;
    if (!isset($_SESSION['nombre'])){
        $_SESSION['nombre'] = $campoNombre;
    }
}



