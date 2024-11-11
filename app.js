window.onload=() =>{

function toUpperCase(){
    let texto=document.getElementById("texto").value;git log
    console.log(texto)
    //cambiamos el texto a mayusculas
    document.getElementById("texto").value=texto.toUpperCase();
}
function toUpperCasePropioElemento(element){
    //cambiamos el texto a mayusculas
    element.value=element.value.toUpperCase();
}


let elemento=document.getElementById("texto");
/*elemento.addEventListener("keyup",function(){
    toUpperCase();
});
*/
elemento.addEventListener("keyup",(event) =>{
event.target.value=event.target.value.toUpperCase();
});
}