<h3><img src='img/cesta.png' alt='Cesta' width='24' height='21'> Cesta</h3>
<hr />
{if empty($c)}
    <p>Cesta vacía</p>
{else}
    {foreach from=$c item=producto}
        <p>{$producto->getcodigo()}</p>
    {/foreach}
{/if}

{*Cuando pulsemos el boton vaciar se llamará a la función xajax 'vaciaCesta'*}
<form id='vaciar' action='productos.php' method='post' onsubmit='return vaciaCesta();'>
    {if empty($c)}
        <input type='submit' name='vaciar' class='boton' value='Vaciar Cesta' disabled='true' />
    {else}
        <input type='submit' name='vaciar' class='boton' value='Vaciar Cesta' />
    {/if}
</form>

{*Cuando pulsemos sobre el botón de 'comprar' se llamará a la función xajax 'muestraCesta'*}
<form id='comprar' action='cesta.php' method='post' onsubmit='return muestraCesta();'>
    {if empty($c)}
        <input type='submit' name='comprar' class='boton' value='Comprar' disabled='true' />
    {else}
        <input type='submit' name='comprar' class='boton' value='Comprar' />
    {/if}
</form> 
