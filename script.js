function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
        closeModal();
    }
}







window.addEventListener('load', function() { 

    setTimeout(function() {
        document.getElementById('loaderContainer').style.display = 'none'; 
        document.getElementById('congratulations').style.display = 'block'; 
        
        document.body.style.overflow = 'auto'; 

    }, 1000); 
});





document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-center');

    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});




document.getElementById('loginForm').addEventListener('submit', function(event) {
    var usuario = document.getElementById('usuario').value;
    var contrasena = document.getElementById('contrasena').value;

    if (usuario.length < 5) {
        alert('El nombre de usuario debe tener al menos 5 caracteres.');
        event.preventDefault(); 
    }

    if (contrasena.length < 5) {
        alert('La contraseña debe tener al menos 5 caracteres.');
        event.preventDefault(); 
    }
});




// Obtener elementos
var modalNuevoTurno = document.getElementById("turnoNuevoModal");
var btnNuevoTurno = document.getElementById("abrirTurnoModal");
var spanCerrarTurno = document.getElementsByClassName("cerrar-turno")[0];

// Abrir el modal cuando se hace click en la frase
btnNuevoTurno.onclick = function() {
    modalNuevoTurno.style.display = "block";
}

// Cerrar el modal cuando se hace click en la 'x'
spanCerrarTurno.onclick = function() {
    modalNuevoTurno.style.display = "none";
}

// Cerrar el modal cuando se hace click fuera de la tarjeta/modal
window.onclick = function(event) {
    if (event.target == modalNuevoTurno) {
        modalNuevoTurno.style.display = "none";
    }
}
