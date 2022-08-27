export function onClick(event) {
  event.preventDefault();
  this.style.backgroundColor = "black";
  console.log("click...");
  console.log(event);

  const mensaje = {
    comercio: document.getElementById('comercio').value,
    titular: document.getElementById('titular').value,
    celular: document.getElementById('celular').value,
    email: document.getElementById('email').value,
    descripcion: document.getElementById('descripcion').value
  }
  console.log(mensaje);

  let a = fetch("https://jsonplaceholder.typicode.com/posts", {
    // let a = fetch("https://swapi.dev/api/people/1", {
    method: "POST",
    body: JSON.stringify(mensaje),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => {
      if (validacionDateIngresados(json)) throw "error no se ingreso nombre del comercio"
      console.log(json);
      Swal.fire(
        'Enviado',
        'Gracias por registrarte',
        'success'
      );
      cleanForm();
    })
    .catch((err) => {
      console.log("ha habido un erros")
      Swal.fire(
        'Error',
        'Tus datos no fueron registrados',
        'error'
      );
      cleanForm();
      console.log(err);
    })
}


function cleanForm() {
  let formulario = document.getElementById('formulario');
  formulario.reset();
}


function validacionDateIngresados(json) {
  if (json.comercio === "") return true
  if (json.titular === "") return true
  if (json.celular.length < 10) return true
  const validarGmail = /([a-zA-Z0-9]+)([.{1}])?([a-zA-Z0-9]+)@gmail([.])com/g
  let isGmail = validarGmail.test(json.email)
  if (!isGmail) return true

  return false
}

