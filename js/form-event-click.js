export function onClick (event) {   
  event.preventDefault();
  this.style.backgroundColor = "black";
  console.log("click...");
  console.log(event);
  
  const mensaje = {
    comercio: document.getElementById('comercio').value,
    titular: document.getElementById('titular').value,
    celular: document.getElementById('celular').value,
    email: document.getElementById('email').value,
  //   message: document.getElementById('message').value
  }
  console.log(mensaje);
 
  // fetch("https://jsonplaceholder.typicode.com/posts", {
    fetch("https://swapi.dev/api/people/1", {
      method: "POST",
      body: JSON.stringify(mensaje),
      headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => { 
        console.log(json);
        Swal.fire(
            'Enviado',
            'Gracias por tu comentario',
            'success'
            );
            cleanForm();
          })
          .catch((err) => console.log(err));  
}
        
export function cleanForm() {
    let formulario = document.getElementById('formulario');    
      formulario.reset();   
    }
