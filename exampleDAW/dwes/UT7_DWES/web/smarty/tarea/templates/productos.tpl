<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <title>Tarea 5: Listado de Productos con Plantillas</title>
    <link href="css/tienda.css" rel="stylesheet" type="text/css">
    {* Llamamos al método que permite escribir todo el código xajax en el documento *}
    {$xajax->printJavascript()}
    <script type="text/javascript" src="fcesta.js"></script>
  </head>

  <body class="pagproductos">
    <div id="contenedor">
      <div id="encabezado">
        <h1>Listado de productos</h1>
      </div>
    
      <!-- Dividir en varios templates -->
      <div id="cesta" style="text-align:center">      
        {include file="productoscesta.tpl"}
      </div>
    
      <div id="productos">
        {include file="listaproductos.tpl"}
      </div>
  
      <br class="divisor" />
      <div id="pie">
        <form action='logoff.php' method='post'>
          <input type='submit' name='desconectar' class='boton' style='width:100%;' value='Desconectar usuario {$usuario}'/>
        </form>        
      </div>
    </div>
  </body>
</html>