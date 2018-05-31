<h3><img src='img/cesta.png' alt='Cesta' width='24' height='21'> Cesta</h3>
<hr />
{if empty($productoscesta)}
    <p>Cesta vacía</p>
{else}
    {foreach from=$productoscesta item=producto}
        <p>{$producto->getcodigo()}</p>
    {/foreach}
{/if}

<form id='vaciar' action='productos.php' method='post'>
    {if empty($productoscesta)}
        <input type='submit' name='vaciar' class='boton' value='Vaciar Cesta' disabled='true' />
    {else}
        <input type='submit' name='vaciar' class='boton' value='Vaciar Cesta' />
    {/if}
</form>
<form id='comprar' action='cesta.php' method='post'>
    {if empty($productoscesta)}
        <input type='submit' name='comprar' class='boton' value='Comprar' disabled='true' />
    {else}
        <input type='submit' name='comprar' class='boton' value='Comprar' />
    {/if}
</form> 
