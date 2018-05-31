<?php

$Agenda=$_POST;

$nombre=$_POST["nombre"];
$telefono=$_POST["telefono"];
foreach ($Agenda as $clave=>$valor){
    if ($nombre===$clave) {
        //Si existe el nombre modificamos el teléfono sino esta vacio
        if(!empty($telefono)) {
          $Agenda[$clave]=$telefono;
        }
    }else{
       if(!empty($telefono)) {
           //Si no existe el nombre añadimos el teléfono sino esta vacio
           $Agenda[$nombre]=$telefono;
        }else{
            //Si  existe el nombre y no indicamos el teléfono borramos la entrada
            unset($Agenda[$nombre]);
            
        }
    }   
}


$i=0;
$entradaAgenda="";
//Recorremos el array $Agenda para guardarlo en una cadena 
foreach ($Agenda as $clave=>$valor){
    if ($i>1){
        $entradaAgenda.="<input type='hidden'  name='$clave' value='$valor' /><br/>";
    }
    $i++;
}

//Devolvemos la cadena con los atributos ocultos para añadirlo al formulario
echo $entradaAgenda;


