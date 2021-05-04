'use strict';
let score0El = document.querySelector('#score--0');
score0El.textContent = 0;
let score1El = document.querySelector('#score--1');
score1El.textContent = 0;
let currentScore0El = document.querySelector('#current--0');
currentScore0El.textContent = 0;
let currentScore1El = document.querySelector('#current--1');
currentScore1El.textContent = 0;

let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');

let diceEl = document.querySelector('.dice');

let totalScore = [0, 0];
let activePlayer = 0;
let currentScore = 0;

//roll button clicked
btnRoll.addEventListener('click', function () {
    if (totalScore[activePlayer] <= 20) {

        const diceNumber = Math.trunc(Math.random() * 6) + 1;
        diceEl.src = `dice-${diceNumber}.png`;

        if (diceNumber !== 1) {
            currentScore = currentScore + diceNumber;
            // console.log(score);
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            currentScore = 0;
            document.getElementById(`current--${activePlayer}`).textContent = 0;
            document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
            activePlayer = (activePlayer === 1) ? 0 : 1;
            document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
        }
    } else {

        document.getElementById(`score--${activePlayer}`).textContent = currentScore;
        currentScore = 0;

        document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
        document.querySelector(`.player--${activePlayer}`).classList.toggle('player--winner');

        btnHold.classList.add('hidden');
        btnRoll.classList.add('hidden');
    }
});


//hold button clicked
btnHold.addEventListener('click', function () {
    totalScore[activePlayer] += currentScore;
    if (totalScore[activePlayer] <= 20) {
        document.getElementById(`score--${activePlayer}`).textContent = totalScore[activePlayer];
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = 0;

        //changing active player
        document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
        activePlayer = (activePlayer === 1) ? 0 : 1;
        document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
    } else {
        document.getElementById(`score--${activePlayer}`).textContent = totalScore[activePlayer];
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;

        document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
        document.querySelector(`.player--${activePlayer}`).classList.toggle('player--winner');

        btnHold.classList.add('hidden');
        btnRoll.classList.add('hidden');
    }
});


//new game button clicked
btnNew.addEventListener('click', function () {
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0El.textContent = 0;
    currentScore1El.textContent = 0;
    totalScore = [0, 0];
    activePlayer = 0;
    currentScore = 0;

    btnHold.classList.remove('hidden');
    btnRoll.classList.remove('hidden');
    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--0`).classList.add('player--active');

    document.querySelector(`.player--1`).classList.remove('player--winner');
})