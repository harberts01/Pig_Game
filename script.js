'use strict';

// Selecting elements
const player1El = document.querySelector('.player--1');
const player0El = document.querySelector('.player--0');
const player1Name = document.querySelector('#name--0');
const player2Name = document.querySelector('#name--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


//Starting Conditions
const playerNames = [prompt("Enter Player 1 Name"), prompt("Enter Player 2 Name")]
console.log(playerNames[0], playerNames[1]);
playerNames[0] == null ? player1Name.textContent = 'Player 1' : player1Name.textContent = `${playerNames[0]}`;
playerNames[1] == null ? player2Name.textContent = 'Player 2' : player2Name.textContent = `${playerNames[1]}`;
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
btnNew.classList.add('hidden');
    
const scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;
let playing = true;



const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

//Roll Dice Function
btnRoll.addEventListener('click', function(){
    if(playing){
        const dice = Math.trunc(Math.random() * 6 + 1);
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        

        if(dice !== 1){
            //Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            //Switch to next player
            switchPlayer();
    
        }
    }
});

btnHold.addEventListener('click', function(){
    if(playing){
    //1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    //2. Check if player's score is >= 100
    // Finish the game
        if(scores[activePlayer] >= 100){
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');
            btnRoll.classList.add('hidden');
            btnHold.classList.add('hidden');
            btnNew.classList.remove('hidden');
        } else {
            //Switch to the next player
            switchPlayer();
        }
    } console.log(playing);
});

//this function was built by chatGPT
const init = function() {
    scores[0] = 0;
    scores[1] = 0;
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    diceEl.classList.add('hidden');
    btnRoll.classList.remove('hidden');
    btnHold.classList.remove('hidden');
    btnNew.classList.add('hidden');
};

btnNew.addEventListener('click', init);





