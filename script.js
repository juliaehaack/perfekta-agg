let timer;
function startTimer(minutes) {
    clearInterval(timer); // Stoppa ev. tidigare timer
    let time = minutes * 60;
    const display = document.getElementById("display");

    timer = setInterval(() => {
        const min = Math.floor(time / 60);
        const sec = time % 60;
        display.textContent = `${min}:${sec.toString().padStart(2, '0')}`;
        time--;

        if (time < 0) {
            clearInterval(timer);
            display.textContent = "Ägget är klart! Njut!";
            alert("Ditt ägg är färdigt!");
        }
    }, 1000);
}
