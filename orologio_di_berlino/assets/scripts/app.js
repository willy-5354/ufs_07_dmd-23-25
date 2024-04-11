setInterval(() => {
    // variabili
    let hour = document.getElementById("hour");
    let minute = document.getElementById("minute");
    let second = document.getElementById("second");

    // ogetto per date
    let date = new Date();
    // method
    let = date.getHours();
    let = date.getMinutes();
    let = date.getSeconds();

    let hr_rotate = 30 * hr + min /2; //converting current time
    let mn_rotate = 6 * min;
    let sec_rotate = sec;

    hour.style.transform = `rotate(${hr_rotate}deg)`;
    minute.style.transform = `rotate(${mn_rotate}deg)`;
    second.style.transform = `rotate(${sec_rotate}deg)`;
},1000);