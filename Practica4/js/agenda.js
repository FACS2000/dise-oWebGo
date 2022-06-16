
function guardarDato(){
    const nombre = document.getElementById("nombre").value;
    const celular = document.getElementById("celular").value;
    const email = document.getElementById("email").value;

    const datos = {
        'celular': celular,
        'email': email,
    }



    localStorage.setItem(nombre, JSON.stringify(datos));


    document.getElementById("nombre").value = "";
    document.getElementById("celular").value = "";
    document.getElementById("email").value = "";

    actualizarDatos();
}

function recuperarDato(){
    var nombre = prompt("Ingresar nombre", "");

    var datos= JSON.parse(localStorage.getItem(nombre));
    
    
    document.getElementById("nombre").value = nombre;
    document.getElementById("celular").value = datos.celular;
    document.getElementById("email").value = datos.email;
}
function eliminarDato(){

    var nombre = prompt("Ingresar nombre", "");

   // var nombre = document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
}

function eliminarTodo(){
    localStorage.clear();
    actualizarDatos();
}

function actualizarDatos(){
    var registro = "";
    if(localStorage.length === 0){
        registro+= '<li>Vacío</li>';

    }else{
        for (var i=0; i <=localStorage.length-1; i++){
            var key = localStorage.key(i);
            var datos= JSON.parse(localStorage.getItem(key));
            registro += '<li>' + '<span class="nom" id="nomt">' + key + '</span>' 
            + '<span class = "nom" id="celt">' + datos.celular + '</span>' + 
            '<span class = "nom" id="emailt">' + datos.email + '</span>' +'</li><br>'; 
        }
    }
    document.getElementById('contactos').innerHTML= registro;
}