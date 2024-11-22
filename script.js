// Countdown Timer
function updateCountdown() {
    const eventDate = new Date("Dec 28, 2024 20:00:00").getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = 
        days + " hari " + hours + " jam " + minutes + " menit " + seconds + " detik ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Acara Telah Dimulai!";
    }
}

let x = setInterval(updateCountdown, 1000);
updateCountdown();
