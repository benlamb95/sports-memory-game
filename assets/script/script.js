/* -- Variables -- */

/* -- Audio -- */
const backgroundAudio = new Audio('assets/audio/background.mp3')
backgroundAudio.loop = true;
backgroundAudio.volume = 0.3;
var playPauseIcon = document.getElementById('play-pause')

const flipAudio = new Audio('assets/audio/acardflip.wav')
flipAudio.volume = 0.5;
const matchAudio = new Audio('assets/audio/match.wav')
matchAudio.volume = 0.5;
const winnerAudio = new Audio('assets/audio/winner.mp3')
winnerAudio = 0.6;


/* -- Modal Script -- */
/* -- Help from W3 schools -- */
var modal = document.getElementById("playModal")

var button = document.getElementById("how-to-play")

var span = document.getElementsByClassName("close")[0]

button.onclick = function () {
    modal.style.display = "block"
}

span.onclick = function () {
    modal.style.display = "none"
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}