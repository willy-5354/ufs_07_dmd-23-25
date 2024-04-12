setInterval(() => {
    // variabili
    let hour = document.getElementById("hour");
    let minute = document.getElementById("minute");
    let second = document.getElementById("second");


    // ogetto per date
    let date = new Date();
    
    // method
    let hr = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hr_rotate = (hr % 12) * 30 + mm / 2; // Calcola l'angolo per l'ora (12 ore => 360 gradi)
    let mn_rotate = mm * 6 + ss / 10; // Calcola l'angolo per il minuto (60 minuti => 360 gradi)
    let sec_rotate = ss * 6; // Calcola l'angolo per il secondo (60 secondi => 360 gradi) 

    hour.style.transform = `rotate(${hr_rotate}deg)`;
    minute.style.transform = `rotate(${mn_rotate}deg)`;
    second.style.transform = `rotate(${sec_rotate}deg)`;
}, 1000);