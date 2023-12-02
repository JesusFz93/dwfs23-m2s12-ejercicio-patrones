const inputNombre = document.getElementById("inputNombre");
const inputApellido = document.getElementById("inputApellido");
const inputEdad = document.getElementById("inputEdad");

const usuario = {
  nombre: "",
  apellido: "",
  edad: 0,
};

// let nombre = inputNombre.value;
// let apellido = inputApellido.value;
// let edad = inputEdad.value;

const agregarUsuario = () => {
  //   nombre = inputNombre.value;
  //   apellido = inputApellido.value;
  //   edad = inputEdad.value;
  usuario.nombre = inputNombre.value;
  usuario.apellido = inputApellido.value;
  usuario.edad = inputEdad.value;

  console.log(usuario);
  //   console.log("nombre: " + nombre + "apellido: " + apellido + " edad: " + edad);
};
