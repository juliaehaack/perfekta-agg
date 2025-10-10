let timer;

function startTimer(minutes) {
    clearInterval(timer); 
    let time = minutes * 60;
    const display = document.getElementById("display");

    // Visa starttid direkt
    display.textContent = `🥚 ${minutes}:00`;

    timer = setInterval(() => {
        const min = Math.floor(time / 60);
        const sec = time % 60;
        display.textContent = `🥚 ${min}:${sec.toString().padStart(2,'0')}`;
        time--;

        if (time < 0) {
            clearInterval(timer);
            display.textContent = "🥚 Ägget är klart! Njut!";
            // alert tas bort
        }
    }, 1000);
}
