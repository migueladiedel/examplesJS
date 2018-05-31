    {foreach from=$productos item=producto}
      <p><form id='{$producto->getcodigo()}' action='productos.php' method='post' onsubmit='return anadeCesta();'>
      <input type='hidden' name='cod' value='{$producto->getcodigo()}'/>
      {* enviamos también el código generado para esta sesión *}
      <input type='hidden' name='numAle' id='numAle' value='{$codigoAleatorio}'/>
      <input type='submit' name='enviar' class='boton' value='Añadir'/>
      {if $producto->getfamilia()!="ORDENA"}
        {$producto->getnombrecorto()}
      {else}
        <a href="ordenador.php?codigo={$producto->getcodigo()}">{$producto->getnombrecorto()}</a>
      {/if}
      : {$producto->getPVP()} euros.</form></p>
    {/foreach}
