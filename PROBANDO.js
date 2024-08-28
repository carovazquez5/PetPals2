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