
var idTemporal=1;
var carruseles;

function activarMiCarousel(id,tiempo){
   var intervalo = setInterval (mostrar,tiempo);
   var imagenes = $("#"+carrusel).children("img").length;
    var intervalo = setInterval (mostrar, tiempo); 
     $("#"+carruseles).children("img")[0].style = "display: block";
    
}
    function mostrar(){
 
        console.log($("#"+carrusel).children("img")[0])
        $("#"+carrusel).children("img")[idTemporal].style = "display: none";    
        if(imagenes-1==idTemporal){
            idTemporal=0;
        } else{
            idTemporal++;
        }
        $("#"+carruseles).children("img")[idTemporal].style = "display: block"; 
    }
    
    
   


