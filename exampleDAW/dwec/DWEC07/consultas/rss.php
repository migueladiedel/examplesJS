<?php

/*
  Esta página realiza las siguientes acciones según los parámetros recibidos:

  Parámetros:	accion=nueva&url=xxxxx&titulo=xxxxx
  Acción:		Insertará la url xxxxx en la tabla MySQL de RSS.
  Salida:		Imprimirá el ID del último recurso añadido.
  Formato:	Texto

  Parámetros:	accion=borrar&id=xx
  Acción:		Borrará la url con id x de la tabla de RSS.
  Salida:		Imprimirá mensaje de el borrado es OK
  Formato:	Texto

  Parámetros:	accion=recursosRSS
  Acción:		Devuelve todos los datos de la tabla rss.
  Salida:		Un array con los campos id, titulo, url en formato JSON.
  Formato: 	JSON
 */

// Cabecera para indicar que vamos a enviar datos JSON y que no haga caché de los datos.
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

/* 	Utilizar el fichero dbcreacion.sql incluído en la carpeta para crear la base de datos, usuario y tabla en tu servidor MySQL.
  Si fuera necesario modifica los datos de la configuración y adáptalos a tu entorno de trabajo. */

// Configuración BASE DE DATOS MYSQL
$servidor = "127.0.0.1";
$basedatos = "ajax";
$usuario = "root";
$password = "";

// Creamos la conexión al servidor.
try {
    $opciones = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8");
    $db = new PDO('mysql:host=localhost;dbname=ajax', 'root', '', $opciones);
} catch (PDOException $ex) {
    echo 'Error conectando a la BBDD. ' . $ex->getMessage();
}

switch ($_GET['accion']) {
    case 'insertar':
        // Consulta SQL para obtener los datos 
        $tit = $_GET["nombreRSS"];
        $url = $_GET["urlRSS"];
        $sql = "insert into rss(titulo,url) values('$tit','$url')";
        $stmt = $db->prepare($sql);
        $stmt->execute();
        echo "la insercion es correcta";
        break;

    case 'borrar':
        // Consulta SQL para obtener los datos 
        $id = $_GET["idRSS"];
        $sql = "delete from rss where id='$id';";
        $stmt = $db->prepare($sql);
        $stmt->execute();
        echo "el borrado es OK";
        break;
    case 'recursosRSS':
        // Consulta SQL para obtener los datos 
        $sql = "select * from rss;";
        $stmt = $db->prepare($sql);
        $stmt->execute();
        $registros = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $arrayRSS= array();
        foreach ($registros as $clave => $valor) {
            $doc = new DOMDocument();
            $url = $registros[$clave]['url'];
            $titulo = $registros[$clave]['titulo'];
            $id = $registros[$clave]['id'];
            $doc->load($url);
            $noticias = array();
            array_push($noticias,$titulo,$id);
            foreach ($doc->getElementsByTagName('item') as $node) {
                $itemRSS = array(
                    'titulo' => $node->getElementsByTagName('title')->item(0)->nodeValue,
                    'descripcion' => $node->getElementsByTagName('description')->item(0)->nodeValue,
                    'url' => $node->getElementsByTagName('link')->item(0)->nodeValue,
                    'fecha' => $node->getElementsByTagName('pubDate')->item(0)->nodeValue
                );
                array_push($noticias,$itemRSS);
            }
            array_push($arrayRSS,$noticias);
        }
        //devolvemos un array con las noticias de cada RSS
        echo json_encode($arrayRSS);
        $db = null; // Libera el objeto conexion PDO
        break;

    case 'numRSS': // Devuelve el número total de RSS que tenemos en la base de datos.
        //No lo uso
        $sql = "select * from rss order by id";
        $stmt->execute();
        $numFilas = $stmt->rowCount();
        echo $numFilas;
        break;
}