function guardarDatos(){
localStorage.nombre = document.getElementById("nombre").value;
localStorage.celular = document.getElementById("celular").value;

}
function recuperarDatos(){
if(localStorage.nombre != undefined &&  localStorage.celular != undefined){
    document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + "<br> Num de celular: "+  localStorage.celular;
} else{
    document.getElementById("datos").innerHTML = "No has ingresado datos" 
}
}