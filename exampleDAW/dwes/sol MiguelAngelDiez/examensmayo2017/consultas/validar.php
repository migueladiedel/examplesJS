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
$passCod=password_hash ($passSinCod, PASSWORD_DEFAULT, $op );



$sql = "SELECT usuario,clave,fecha FROM usuarios WHERE usuario='".$user."' AND clave='".$passCod."';";
$stmt = $db->prepare($sql);
$stmt->execute();
$resultado = $stmt->fetchAll(PDO::FETCH_CLASS, "usuarios");






if (count($resultado)>0){
    $campoFecha=$resultado[0]->fecha;
    $campoNombre=$resultado[0]->nombre;
    if (esMayorQueUnAnyo($campoFecha)) {
        //Modificamos la página
        echo "Mod";
    }else{
        echo "Correcto";
        session_start();
        if (!isset($_SESSION['validado'])){
            $_SESSION['validado'] = true;
        }
        if (!isset($_SESSION['nombre'])){
            $_SESSION['nombre'] = $campoNombre;
        }
    }
}else{
    echo "Error";
}

function esMayorQueUnAnyo($fechaOne){
    $esMayor=false;
    $datetime1 = date_create($fechaOne);
    $datetime2 = date_create(date("y-m-d"));
    $interval = date_diff($datetime1,$datetime2);
    $anyo=$interval->format("%y");
    $meses=$interval->format("%m");
    $dias=$interval->format("%d");
    settype($anyo, "integer");
    settype($meses, "integer");
    settype($dias, "integer");
    
    if($anyo>=1){
       if($meses>0 || $dias>0){
           $esMayor=true; 
           
       }
        
    }
   return $esMayor;
}