<?php

$operacion = "generarConsulta";
if (isset($_POST['operacion']))
{
    $operacion = $_POST['operacion'];
}

switch ($operacion)
{
    case 'consultarSesion':
        consultarSesion();
        break;
    default:
        generarConsulta();
}

function consultarSesion(){
    // Iniciamos la sesión
    session_start();
    
    //Recuperamos la sentencia pasada por parametro
    $sentenciaRecibida=$_POST["sentencia"];
//    $tamanyo=count($_SESSION['sentencias']);
//    $existe=false;
    $_SESSION['sentencias']=$sentenciaRecibida;
    $sentencias=$_SESSION;
    
    
//    if ($tamanyo>1){
//       foreach ($_SESSION['sentencias'] as $clave => $valor)    {
//            if ($valor===$sentenciaRecibida) {
//                $existe=true;
//            }else{
//                $sentencias['sentencias'+$tamanyo]=$valor;
//            }
//        }
//       
//    }else{
//        $sentencias['sentencias'+$tamanyo]=$sentenciaRecibida;        
//    }
    
    
    
    echo json_encode($sentencias, JSON_UNESCAPED_UNICODE);
}

function generarConsulta(){
    $elementos=array();
    $comparador=array();

    if (isset($_POST['continente']) && !empty($_POST['continente'])){
        $elementos['continente']="%".trim($_POST['continente'])."%";
    }
    if (isset($_POST['pais']) && !empty($_POST['pais'])){
        $elementos['pais']="%".trim($_POST['pais'])."%";
    }
    if (isset($_POST['capital']) && !empty($_POST['capital'])){
        $elementos['capital']="%".trim($_POST['capital'])."%";
    }
    if (isset($_POST['superficie']) && !empty($_POST['superficie'])){
        $elementos['superficie']=(int)$_POST['superficie'];
        $comparador['superficie']=$_POST['cmp_super'];
    }
    if (isset($_POST['poblacion']) && !empty($_POST['poblacion'])){	
        $elementos['poblacion']=(int)$_POST['poblacion'];
        $comparador['poblacion']=$_POST['cmp_pob'];
    }
    if (isset($_POST['idioma']) && !empty($_POST['idioma'])){
        $elementos['idioma']="%".trim($_POST['idioma'])."%";
    }
    if (isset($_POST['religion']) && !empty($_POST['religion'])){
        $elementos['religion']="%".trim($_POST['religion'])."%";
    }

    $sentencia="SELECT * FROM PAISES";

    $primeraVez=false;

    foreach($elementos as $clave => $valor){
        if (!$primeraVez){
                $primeraVez=true;
                $sentencia.=" WHERE ";
        }else {
                $sentencia.=" AND ";
        }
        $sentencia.= $clave." ";
        if ($clave=="superficie" || $clave=="poblacion"){
                $sentencia.=$comparador[$clave]." ";
        }else{
                $sentencia.="LIKE"." ";
        }
        if ($clave=="superficie" || $clave=="poblacion"){
                $sentencia.=$valor;
        }else{
                $sentencia.="'".$valor."'";
        }
    }
    $sentencia.=" ORDER BY PAIS";
    echo $sentencia;
}

