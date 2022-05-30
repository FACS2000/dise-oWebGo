
function escribir(){
    var heading = document.createElement("h1");
    var heading_text = document.createTextNode("Hola mundo");
    heading.appendChild(heading_text);
    document.body.appendChild(heading);
}