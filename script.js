"use strict";

const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");
const score1 = document.querySelector("#score-1");
const score2 = document.querySelector("#score-2");
const currentScore1 = document.querySelector("#current-score-1");
const currentScore2 = document.querySelector("#current-score-2");
const diceImage = document.querySelector(".dice-image");
const btnNewGame = document.querySelector(".new-game");
const btnRollDice = document.querySelector(".roll-dice");
const btnHold = document.querySelector(".hold");

let totalScorePlayer1 = 0;
let totalScorePlayer2 = 0;
let currentScore = 0;

function diceImageSet(imgNumber) {
  diceImage.src = `./images/dice-${imgNumber}.png`;
}

function switchPlayer() {
  player1.classList.toggle("active");
  player2.classList.toggle("active");
}

function displayCurrentScore(score) {
  if (player1.classList.contains("active")) {
    currentScore1.innerText = score;
  } else {
    currentScore2.innerText = score;
  }
}

function setCurrentScoreZero() {
  currentScore = 0;
  currentScore1.innerText = currentScore;
  currentScore2.innerText = currentScore;
}

function makeWinner(winner) {
  btnRollDice.disabled = "true";
  btnHold.disabled = "true";
  diceImage.style.display = "none";

  if (winner === "p1") {
    player1.style.backgroundImage =
      "linear-gradient(to bottom right, #93FFD8, #CFFFDC)";
  } else {
    player2.style.backgroundImage =
      "linear-gradient(to bottom right, #93FFD8, #CFFFDC)";
  }
}

function newGame() {
  // if (player2.classList.contains("active")) {
  //   player2.classList.remove("active");
  //   player1.classList.add("active");
  // }
  // btnRollDice.disabled = "false";
  // btnHold.disabled = "false";
  // diceImage.style.display = "block";
  // totalScorePlayer1 = 0;
  // totalScorePlayer2 = 0;
  // currentScore = 0;
  // score1.innerText = 0;
  // score2.innerText = 0;
  // currentScore1.innerText = 0;
  // currentScore2.innerText = 0;
  // diceImage.src = `./images/dice-5.png`;

  location.reload();
}

function rollDice() {
  let randomNumber = Math.floor(Math.random() * 6 + 1);
  diceImageSet(randomNumber);
  if (randomNumber === 1) {
    switchPlayer();
    setCurrentScoreZero();
  } else {
    currentScore += randomNumber;
    displayCurrentScore(currentScore);
  }
}

function hold() {
  if (player1.classList.contains("active")) {
    totalScorePlayer1 += currentScore;
    score1.innerHTML = totalScorePlayer1;
    if (totalScorePlayer1 >= 100) {
      makeWinner("p1");
    } else {
      switchPlayer();
      setCurrentScoreZero();
    }
  } else {
    totalScorePlayer2 += currentScore;
    score2.innerHTML = totalScorePlayer2;
    if (totalScorePlayer2 >= 100) {
      makeWinner("p2");
    } else {
      switchPlayer();
      setCurrentScoreZero();
    }
  }
}

btnRollDice.addEventListener("click", rollDice);
btnHold.addEventListener("click", hold);
btnNewGame.addEventListener("click", newGame);
