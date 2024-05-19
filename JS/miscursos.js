$(document).ready( function () {
    $('#miscursos_').DataTable({
        "language": {
            "url": "../idioma/Spanish.json"}
    });
} );

function cambio() {
    $('.gestionar').off('click').on('click', function() {
        // Redirigir a la página de tomar asistencia
        window.location.href='gestionarcurso.html';
    });

}

cambio();