
var imagen=new Array();

function manejaflor(){
     
    imagen=document.getElementsByTagName("img");
    
    for (var i=0; i<imagen.length; i++){
    imagen[i].addEventListener("mouseover",crecer.bind(null,i),false);
    imagen[i].addEventListener("mouseout",menguar.bind(null,i),false);
    imagen[i].addEventListener("click",tipoflor.bind(null,i),false);    
  
  //  imagen[0].addEventListener("mouseover",function(){imagen[0].width=225;imagen[0].height=225;},false);
  //  imagen[0].addEventListener("mouseout",function(){imagen[0].width=200;imagen[0].height=200;},false);
  //  imagen[0].addEventListener("click",tipoflor,false);

}
}
function tipoflor(i){
    alert("Pensamientos");
}

function crecer(i){
    imagen[i].width=225;
    imagen[i].height=225;
}

function menguar(i){
    imagen[i].width=200;
    imagen[i].height=200;
    
}

 window.onload=manejaflor;

