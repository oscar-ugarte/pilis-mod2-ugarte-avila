const apiClima = document.getElementById('ApiClima');

//Aqui se hace la llamada a la API del Clima.
async function llamarApi()
{
    try {
        let respuesta = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=-24.18334987471809&lon=-65.33129361050375&appid=7795b3a81c68c866934d35cd61aa6a49&lang=es&units=metric');
        let data = await respuesta.json();
        let descripcion = JSON.stringify(data.weather[0].description);
        descripcion = descripcion.substr(1,descripcion.length-2); //para quitar las dos " al comienzo y al final.
        let temperatura = JSON.stringify(data.main.temp);
        let sensacion = JSON.stringify(data.main.feels_like);
        let temp_min = JSON.stringify(data.main.temp_min);
        let temp_max = JSON.stringify(data.main.temp_max);
        let elementos = new Array(); 
        elementos.push(descripcion.charAt(0).toUpperCase() + descripcion.slice(1));
        elementos.push("Temperatura de " +temperatura + " °C");
        elementos.push("Sensación de " + sensacion + " °C");
        elementos.push("Temperatura Maxima : " + temp_max + " °C");
        elementos.push("Temperatura Minima : " + temp_min + " °C");
        visualizarContenidoDeLaAPI(elementos);//Los Elementos se pansan a una función que los creara en el html.
    } catch (error)
    {
        console.error(error);
    }
}

const visualizarContenidoDeLaAPI = (elementos) =>
{
    const subTitulo = document.createElement("h4");
    subTitulo.textContent = "¡Así esta el clima en el lugar del evento!";
    apiClima.appendChild(subTitulo);
    for (let i = 0 ; i < elementos.length ; i++ )
    {
        const mensaje = document.createElement("p");
        mensaje.textContent = elementos[i];
        apiClima.appendChild(mensaje);
    }
}

llamarApi();