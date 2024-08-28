function validarFomrulario(){
    var nombreUsuario = document.getElementById("Usuario").value;
    var contraseñaUsuario = document.getElementById("Contraseña").value;
    var formulario = document.getElementById("Fomrulario");
    var validador = true;
    contraseñaUsuario.length
    if (nombreUsuario.length>1) {
        console.log("Nombre correcto");
        document.getElementById("errorNombre").style="visibility:hidden";
    } else {
        validador = false;
        document.getElementById("errorNombre").style="visibility:visible";
    }
    if (validador==true) {
        formulario.submit();
    }
}


/*tarjeta emergente*/

var modal = document.getElementById ("miModal");
var btn = document.getElementById ("abirModal");
var span = document.getElementsByClassName ("cerrar") [0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}