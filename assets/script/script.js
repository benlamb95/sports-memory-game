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
winnerAudio.volume = 0.6;

/* ---------- Time variables ---------- */
/* https://sandraisrael.github.io/Memory-Game-fend/ */

let timer = document.querySelector("#timer");
var second = 0,
    minute = 0;
var interval;

/* ---------- Local storage ---------- */

/* https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage */

let scoreLocalStorage = localStorage.getItem("lastScore", timer.innerHTML);
$("#lastScore").text(scoreLocalStorage);

/* ---------- Game variables ---------- */

const cards = document.querySelectorAll('.memory-card')
let firstCard, secondCard;
let lockBoard = false;
let cardFlipped = false;
let matches = 0;
let counter = document.getElementById('moves');
let moves = 0;

let gameStatus = 'stall';
'start';
'end';

/* -- End of Variables -- */

/* -- Functions for background audio -- */
/* Help from  https://www.youtube.com/watch?v=wffK2OIt8u0 */

function playPause() {
    if (count == 0) {
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


/* Help from Marina Ferreira memory card game */

function flipCard() {
    if (gameStatus === 'stall') {
        second = 0;
        minute = 0;
        startTimer();
        gameStatus = 'started';
    }
    if (lockBoard) return;
    if (this === firstCard) return; // stops the action of clicking same card twice. 
    this.classList.toggle('flip')
    flipAudio.play();
    flipAudio.currentTime = 0;

    if (!cardFlipped) { // if first time clicking this card 
        cardFlipped = true;
        firstCard = this;
        return;
    }

    cardFlipped = false;
    secondCard = this;

    checkMatch();
    countMoves();
}

//check both cards
function checkMatch() {
    let isAMatch = firstCard.dataset.id === secondCard.dataset.id; // Checks both dataID set are the same 
    isAMatch ? matchedCards() : unmatchedCards(); // if they are will do either matched or unmatched function

    countMoves();
}


// Freezes matched cards
function matchedCards() {
    firstCard.removeEventListener('click', flipCard) // removes click function from matched cards
    secondCard.removeEventListener('click', flipCard)

    matchAudio.play(); // Plays match audio
    matches += 1;
    if (matches == 8) {
        gameStatus == 'gameOver';
        clearInterval(interval);
        localStorage.setItem("lastScore", timer.innerHTML);
        gameOver();
    }
}





// flips back over unmatched cards
/* Jquery https://learn.jquery.com/ */
function unmatchedCards() {
    lockBoard = true
    setTimeout(() => {
        $(firstCard).removeClass('flip');
        $(secondCard).removeClass('flip');
        boardReset();
    }, 1000); // will allow 1 second before cards flip back over

}

// Resets board when 2 cards dont match
function boardReset() {
    [cardFlipped, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

//count moves
/* Help from https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript#toc-3-moves */
function countMoves() {
    moves++;
    counter.innerHTML = moves;
}

function startTimer() {
    interval = setInterval(function () {
        timer.innerHTML = `${minute} mins ${second} secs`;
        second++;
        if (second == 60) {
            minute++;
            second = 0;
        }
    }, 1000);
}

// Cards shuffled and called straightaway
(function shuffleCards() {
    cards.forEach(card => {
        let randomNumber = Math.floor(Math.random() * 16);
        card.style.order = randomNumber;
    });
})();

/* -- Help from W3 schools -- */

function restartGame() {
    location.reload();
}


/* -- Modal Script -- */
/* -- Help from W3 schools -- */
let modal = document.getElementById("playModal")

let button = document.getElementById("how-to-play")

let span = document.getElementsByClassName("close")[0]

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

/* -- Finish Modal Script -- */
/* https://stackoverflow.com/questions/59048984/open-modal-on-function-call */

let restart = document.querySelector("#play-again");

function gameOver() {
    winnerAudio.play();
    if (count == 1);
    count = 0;
    backgroundAudio.pause()
    playPauseIcon.className = "fas fa-volume-mute";

    $("#finishModal").show();

    playAgain();
}

function playAgain() {
    restart.addEventListener('click', restartGame)
}
/* -- Event Listeners -- */

cards.forEach(card => card.addEventListener('click', flipCard));