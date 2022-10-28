
function envioDeDatos(){

let boton = document.getElementById("botonDatos")
boton.addEventListener("click", aviso)
}

function aviso(){
    alert("Datos enviados a ningun lado ✅")
}


window.addEventListener("load",envioDeDatos)