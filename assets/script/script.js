/* -- Variables -- */

/* -- Audio -- */
/* Help from  https://www.youtube.com/watch?v=wffK2OIt8u0 */
const backgroundAudio = new Audio('assets/audio/background.mp3')
backgroundAudio.loop = true;
backgroundAudio.volume = 0.3;
var playPauseIcon = document.getElementById('play-pause')
var count = 0;

const flipAudio = new Audio('assets/audio/acardflip.wav')
flipAudio.volume = 0.5;
const matchAudio = new Audio('assets/audio/match.wav')
matchAudio.volume = 0.5;
const winnerAudio = new Audio('assets/audio/winner.mp3')
winnerAudio = 0.6;

/* -- Functions for game template -- */

function startGame(){
    
}

function flipCard(){
    
}


function shuffleCards(){
    
}

function checkMatch(){
    
}

function matchedCards(){

}

function unmatchedCards(){
    
}

function winner(){
    
}



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