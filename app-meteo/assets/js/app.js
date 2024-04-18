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
    const {main, name, sys, weather } = data;
    });
});
