$(document).ready( function () {
    $('#miscursos_').DataTable({
        "language": {
            "url": "../idioma/Spanish.json"}
    });
} );

function seleccionarBoton(botonSeleccionado) {
    // Ocultar todos los botones
    var botones = document.querySelectorAll('.boton-asistencia .btn');
    botones.forEach(function(boton) {
        if (boton !== botonSeleccionado) {
            boton.classList.add('hidden');
        }
    });

    // Mostrar el botón seleccionado en el centro
}


function registrarasistencia() {
    $('.btn-guardar').off('click').on('click', function() {
        // Redirigir a la página de tomar asistencia
        window.location.href='historialasistencia.html';
    });

  
}
registrarasistencia();

