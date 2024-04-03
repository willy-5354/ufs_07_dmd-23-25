// creare un commento su una riga sola

/* 
    creare un
    commento su più 
    righe
*/ 

// le prime tre tipologie basi che potremmo incontrare per le variabili: 

// variabile di sola lettura
const name = 'william'; 

// variabile di lettura e scrittura(ovvero posso leggerla e modificarla) [NB: let e var sono la stessa cosa] 
let age = 21; 
let isWorking = true;
let ISworking = "certo";

/* implemento un oggetto: considerando che un oggetto ha prorietà/attributi e metodi scriviamo: "oggetto(console).metodo(log)"
console.log(1);
*/

const body = document.getElementById("theBody");
const btn = document.getElementById("hamburger");

// "classlist" significa = dammi tutte le classi contententi a body / toggle = se ce quella classe prendila altrimenti aggiungila al tag "body"
function togglemenu(){
    body.classList.toggle("menu-is-open");
}

btn.addEventListener("click", togglemenu);