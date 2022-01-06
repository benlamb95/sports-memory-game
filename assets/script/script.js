/* -- Variables -- */

/* -- Audio -- */
/* Help from  https://www.youtube.com/watch?v=wffK2OIt8u0 */
var backgroundAudio = new Audio('assets/audio/background.mp3')
backgroundAudio.loop = true;
backgroundAudio.volume = 0.3;
var playPauseIcon = document.getElementById('play-pause')
var count = 0;

var flipAudio = new Audio('assets/audio/acardflip.wav')
flipAudio.volume = 0.5;
var matchAudio = new Audio('assets/audio/match.wav')
matchAudio.volume = 0.5;
var winnerAudio = new Audio('assets/audio/winner.mp3')
winnerAudio = 0.6;

/* ---------- Time variables ---------- */
/* Help from https://www.youtube.com/watch?v=_a4XCarxwr8 */

let timeHour = document.getElementById('timer');
let seconds = 0;

timeHour = `00:${seconds}`;

/* ---------- Game variables ---------- */

const cards = document.querySelectorAll('.memory-card')
let firstCard, secondCard;
let lockBoard = false;
let cardFlipped = false;
let matches = 0;

/* -- End of Variables -- */

/* -- Functions for background audio -- */

function playPause(){
    if (count == 0){
        count = 1;
        backgroundAudio.play()
        playPauseIcon.className = "fas fa-volume-up";
    } else {
        count = 0;
        backgroundAudio.pause()
        playPauseIcon.className = "fas fa-volume-mute";
    }

} 

/* -- Functions for game template -- */

function startGame(){
    
}

function flipCard(){
    this.classList.toggle('flip')
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

/* -- Event Listeners -- */

cards.forEach(card => card.addEventListener('click', flipCard));