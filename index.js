const time = document.getElementById("time");
let [hr, min, cs] = ["00", "00", "00"],
    isPaused = true,
    cronoStart,
    counter;
function crono() {
    cs++;
    if (cs < 10) {
        counter = "00000" + cs;
    } else if (cs < 100) {
        counter = "0000" + cs;
    } else if (cs < 1000) {
        counter = "000" + cs;
    } else if (cs < 6000) {
        counter = "00" + cs;
    } else if (cs < 600000) {
        cs = "00";
        min++;
        min = min < 10 ? "0" + min : min;
    }
    if (min == 60) {
        min = "00";
        hr++;
        hr = hr < 10 ? "0" + hr : hr;
    }
    const timer = counter.match(/.{2}/g);
    time.innerText = `${hr}:${min}:${timer[1]}:${timer[2]}`;
}
control.onclick = () => {
    isPaused = !isPaused;
    event.target.classList.replace("play", "pause");
    if (isPaused) {
        pause();
        return;
    }
    isPaused && clearInterval(cronoStart);
    cronoStart = setInterval(crono, 10);
    function pause() {
        clearInterval(cronoStart);
        event.target.classList.replace("pause", "play");
    }
};
function handleReset() {
    [hr, min, cs] = ["00", "00", "00"];
    time.innerText = `00:00:00:00`;
}
