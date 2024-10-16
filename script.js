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



/*RECUPERAR INFO FORMULARIOS*/ 
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 


    const formData = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        nacimiento: document.getElementById('nacimiento').value,
        localidad: document.getElementById('localidad').value,
        email: document.getElementById('email').value,
        contrasena: document.getElementById('contrasena').value,
        confirmarContrasena: document.getElementById('confirmar-contrasena').value
    };

    const formDataJSON = JSON.stringify(formData);

    console.log(formDataJSON);
});



/*INFO FORMULARIO MASCOTAS  y duenio*/ 
document.querySelector('.formu-registro form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const emailDuenio = document.getElementById('email').value;

    localStorage.setItem('emailDuenio', emailDuenio);
    this.submit();
});


// Manejar el formulario de registro de la mascota
document.querySelector('.formu-registro form').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailDuenio = localStorage.getItem('emailDuenio');

    if (emailDuenio) {
        const formData = {
            nombreMascota: document.getElementById('nombre-mascota').value,
            especie: document.getElementById('especie').value,
            raza: document.getElementById('raza').value,
            tamanio: document.getElementById('tamanio').value,
            emailDuenio: emailDuenio // Asociar el email del dueño
        };

        const formDataJSON = JSON.stringify(formData);

        console.log(formDataJSON);
        this.submit();
    } else {
        console.log("No se encontró el email del dueño.");
    }
});
