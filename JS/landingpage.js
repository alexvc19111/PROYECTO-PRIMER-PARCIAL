 document.querySelector("#show__lgn").addEventListener('click', function () {
  document.querySelector('.Login__popup').classList.add('active')
  document.querySelector('.Registro__popup').classList.remove('active')
});
document.querySelector(".Login__popup .close__btn-lgn").addEventListener('click', function () {
  document.querySelector('.Login__popup').classList.remove('active')
});

document.querySelector("#show__rgs").addEventListener('click', function () {
  document.querySelector('.Registro__popup').classList.add('active')
  document.querySelector('.Login__popup').classList.remove('active')
});
document.querySelector(".Registro__popup .close__btn-rgs").addEventListener('click', function () {
  document.querySelector('.Registro__popup').classList.remove('active')
});

document.querySelector(".Registro__popup .prg").addEventListener('click', function () {
  document.querySelector('.Login__popup').classList.add('active')
  document.querySelector('.Registro__popup').classList.remove('active')
});

document.querySelector(".Login__popup .lgn-").addEventListener('click', function () {
  document.querySelector('.Registro__popup').classList.add('active')
  document.querySelector('.Login__popup').classList.remove('active')
});


const formulario = document.getElementById('formulario__rgs');
const formulario2 = document.getElementById('formulario__ini');
const inputs = document.querySelectorAll('#formulario__rgs input');


//Expresiones regulares, 
const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^.{4,12}$/ // 4 a 12 digitos.
}

const campos = {
  nombre: false,
  email: false,
  password: false

}


const ValidarFormulario = (e) => {
  switch (e.target.name) {
    case "nombre":
      validarCampo(expresiones.nombre, e.target, "nombre");
      break;
    case "correo":
      validarCampo(expresiones.correo, e.target, "correo");
      break;
    case "password":
      validarCampo(expresiones.password, e.target, "password");
      validarPassword2();
      break;
    case "password2":
      validarPassword2();
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

const validarPassword2 = () => {
  const inputPassword1 = document.getElementById('password');
  const inputPassword2 = document.getElementById('password2');
  if (inputPassword1.value !== inputPassword2.value) {
    document.getElementById(`grupo__password2`).classList.add("formulario__grupo-incorrecto");
    document.getElementById(`grupo__password2`).classList.remove("formulario__grupo-correcto");
    document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add("formulario__input-error-activo");
    campos["password"] = false;
  } else {
    document.getElementById(`grupo__password2`).classList.remove("formulario__grupo-incorrecto");
    document.getElementById(`grupo__password2`).classList.add("formulario__grupo-correcto");
    document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove("formulario__input-error-activo");
    campos["password"] = true;
  }

}

inputs.forEach((input) => {
  input.addEventListener('keyup', ValidarFormulario)
  input.addEventListener('blur', ValidarFormulario)

});

formulario__rgs.addEventListener('submit', (e) => {
  e.preventDefault();
  if (campos.nombre && campos.correo && campos.password) {
    formulario.reset();
    document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo");
    setTimeout(() => {
      document.getElementById("formulario__mensaje-exito").classList.remove("formulario__mensaje-exito-activo");
    }, 5000);

    document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
      icono.classList.remove('formulario__grupo-correcto');
    });

  }
  else {
    document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    setTimeout(() => {
      document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
    }, 3000);

  }

});

formulario2.addEventListener("submit",  (e)=> {
  e.preventDefault();
  const emailInput = document.getElementById('email__lgn').value.trim();
  const passwordInput = document.getElementById('password__lgn').value.trim();
  const emailPermitido = 'alex@hotmail.com';
  const contrasenaPermitida = '1234';
    if (emailInput === emailPermitido && passwordInput === contrasenaPermitida) {
      // Credenciales correctas
      formulario2.reset();
      document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo");
      setTimeout(() => {
        document.getElementById("formulario__mensaje-exito").classList.remove("formulario__mensaje-exito-activo");
      }, 3000);

      setTimeout(() => {
        document.querySelector('.Login__popup').classList.remove('active')

      }, 3200);
    } else {
      document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
      setTimeout(() => {
        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
      }, 3000);
    }
  
}); 



