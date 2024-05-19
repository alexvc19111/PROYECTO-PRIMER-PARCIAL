$(document).ready(function () {
    $('#estudiantes_').DataTable({
        "language": {
            "url": "../idioma/Spanish.json"
        }
    });
});


document.querySelector("#agregarEstudianteBtn").addEventListener('click', function () {
    document.querySelector('.form__agregar').classList.add('active')
});
document.querySelector(".form__agregar .close__btn-agg").addEventListener('click', function () {
    document.querySelector('.form__agregar').classList.remove('active')
});


const formulario = document.getElementById('agg__estudiante');
const inputs = document.querySelectorAll('#agg__estudiante input');

const expresiones = {
    nombres: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    correoinst: /^[eE]\d{10}@live\.uleam\.edu\.ec$/,//correo de formato de la uleam
}

const campos = {
    nombres: false,
    correoinst: false,
}

const ValidarFormulario = (e) => {
    switch (e.target.name) {
        case "nombres":
            validarCampo(expresiones.nombres, e.target, "nombres");
            break;
        case "correoinst":
            validarCampo(expresiones.correoinst, e.target, 'correoinst');
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
      document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
      document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
      document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
      campos[campo] = true;
  
    } else {
      document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
      document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
      document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
      campos[campo] = false;
    }
  }
  
  inputs.forEach((input) => {
    input.addEventListener('keyup', ValidarFormulario)
    input.addEventListener('blur', ValidarFormulario)
  
  });


  agg__estudiante.addEventListener('submit', (e) => {
    e.preventDefault();
    if (campos.nombres && campos.correoinst ) {
      formulario.reset();
      document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo");
      setTimeout(() => {
        document.getElementById("formulario__mensaje-exito").classList.remove("formulario__mensaje-exito-activo");
      }, 3000);
  
      document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
              icono.classList.remove('formulario__grupo-correcto');
      });

      setTimeout(() => {
        document.querySelector('.form__agregar').classList.remove('active')
            }, 4000);
  
    }
    else{
      document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
      setTimeout(() => {
        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
      }, 3000);
  
    }
  
  });