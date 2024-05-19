$(document).ready( function () {
    $('#miscursos_').DataTable({
        "language": {
            "url": "../idioma/Spanish.json"}
    });
} );

function cambio() {
    $('.tomar-asistencia').off('click').on('click', function() {
        // Redirigir a la página de tomar asistencia
        window.location.href='tomarsistencia.html';
    });

    $('.ver-historial').off('click').on('click', function() {
        // Redirigir a la página de ver historia
        window.location.href='historialasistencia.html';
    });
}

cambio();

