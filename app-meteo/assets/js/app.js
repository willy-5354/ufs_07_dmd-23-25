// option + 9 per backlink

// creiamo le variabili di lettura e scrittura
const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");

/* creiamo la varibile apikey per implementare le nostre API di OpenWeatherMap*/
const apiKey = "48569450a561173e66c202810ca7fe2a"; 

form.addEventListener("submit", event => {
    /* serve per bloccare gli eventi base dell'elemento form. In questo caso dell'aggiornamento della pagina all'invio della richiesta per il meteo */ 
    event.preventDefault(); 
    // creiamo la variabile inputVal = rappresenta l'inserimento di dati effettuati dall'utente
    let inputVal = input.value;
    // stiamo costruendo la richiesta dell'utente al meteo di una città
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
    // il fetch serve per gestire le richieste(domanda). Il then, introducibile solo con fecth serve per gestire le risposte in uscita a monte di una richiesta(domanda). 
    fetch(url)
    // prendi la risposta e trasformala in un file json
    .then(response => response.json())
    // prendi la risposta e trasformalo in data(data sarebbe il nostro oggetto)
    .then(data => {
        console.log(data);
    // vado a definire le etichette del mio oggetto(data)
    const {main, name, sys, weather, wind, dt } = data;
    const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
    const caption = weather[0]["description"];
    // contiene l'oggetto document con la quale
    const li = document.createElement("li");
    // leggiamo la variabile li e usiamo il metodo add per aggiungere la classe città 
    li.classList.add("city");
    const markup = `
        <div class = "city-time">Date time:
        <time>${dt}</time>
        </div>
        <h2 class= "city-name">
        <span>${name}</span> 
        <sup>${sys.country}</sup>
        </h2> 
        <div class="city-temp">
        <span>${Math.round(main.temp)}</span>
        <sup>°C</sup>
        </div>
        <div class="city-wind">Wind:
        <span>${wind.speed}</span>
        </div>
        <div class="city-deg">
        <span>${wind.deg}</span>
        </div>
        <figure>
        <img src="${icon}" alt"${caption}"  class = "city-icon"
        <figcaption>${caption}</figcapition>
        </figure>
        `;

        // metti dentro "li" tutto ciò che abbiamo scritto in markup
        li.innerHTML = markup;
        list.appendChild(li);
    }) 
    .catch(() => {
        msg.textContent = "città non trovata, prova di nuovo"
    });
    msg.textContent = ""; 
    // con il metodo form.reset() = svuotiamo il form e togliamo tutto ciò che ha scritto
    form.reset();
    // con il metodo input.focus() = permette di mandare la richiesta direttamente dall'inpu della tastiera senza premere per forza con il mouse da submit
    input.focus();
});
