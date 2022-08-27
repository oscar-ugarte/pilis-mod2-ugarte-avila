import { onClick } from "./form-event-click.js";

let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);


// evento se desencadena cuando se hace click en al ancla registrar del menu de navegacion
let anchor = document.getElementById("anchor-registro")
anchor.addEventListener("click", seccionRegistro)



const cartelOne = ".registro-title .h2-sumate-al-evento"
const cartelTwo = ".registro-title .h2-luego-te-contact"

// efecto que mueve las letras a la derechas
const cartel = (n) => {
    return new Promise((resolve) => {

        const posLetter = document.querySelector(n)
        posLetter.style.left = "-600px"
        let posX = -600
        let b = setInterval(function () {
            posLetter.style.left = "" + posX + "px"
            posX = posX + 10
            if (posX === 0) {
                clearInterval(b);
                resolve()
            }
        }, 10)

    })
}

function seccionRegistro() {

    document.querySelector(cartelOne).style.left = "-600px"
    document.querySelector(cartelTwo).style.left = "-600px"

    cartel(cartelOne).then(() => cartel(cartelTwo))
}


document.querySelector(cartelOne).style.left = "-600px"
document.querySelector(cartelTwo).style.left = "-600px"

cartel(cartelOne).then(() => cartel(cartelTwo))
