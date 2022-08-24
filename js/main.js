import {onClick} from "./form-event-click.js";

let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);





// efecto que mueve las letras a la derechas del registro-title
let posLeter = document.querySelector(".registro-title")
posLeter.style.left = "-400px"
let posX = -400

let b = setInterval(function(){
    posLeter.style.left = ""+posX+"px"
    posX = posX + 10
    if(posX === 0){
        clearInterval(b);
    }
},10);
    
