// Enable Strict Mode (Write more secure robust code)
'use strict';

// Query Selector
console.log(document.querySelector(".message"));
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "---";
console.log(document.querySelector(".message").textContent);

console.log(document.querySelector(".guess").value);
document.querySelector(".guess").value = 23;

// Guess Number Game

let secretNumber = 0;

let currentScore = 0;

let highScore = 0;
document.querySelector(".highscore").textContent = highScore;

const doInitializeGame = function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);
    //document.querySelector(".number").textContent = secretNumber;

    currentScore = 10;
    document.querySelector(".score").textContent = currentScore;

    const highScoreElement = document.querySelector(".highscore");
    highScoreElement.style.color = "black";
    highScoreElement.style.fontWeight = "normal";

    const messageElement = document.querySelector(".message");
    messageElement.textContent = "---";
}

doInitializeGame();

// Handling Clicks
document.querySelector(".check").addEventListener("click", function() {
    const messageElement = document.querySelector(".message");
    const guessElement = document.querySelector(".guess");
    const scoreElement = document.querySelector(".score");

    const guess = Number(guessElement.value);
    if (!guess) {
        console.log("Enter a number");
        return;
    }

    if (guess === secretNumber) {
        messageElement.textContent = "Correct!";
        document.querySelector(".number").textContent = secretNumber;
        if (currentScore > highScore) {
            const highScoreElement = document.querySelector(".highscore");
            highScore = currentScore;
            highScoreElement.textContent = highScore;
            highScoreElement.style.color = "blue";
            highScoreElement.style.fontWeight = "bold";
        }
    } else {
        // Give Hint
        if (guess > secretNumber) {
            messageElement.textContent = "Too High";
        } else {
            messageElement.textContent = "Too Low";
        }
        
        // Check and Update Score
        if (currentScore <= 0) {
            messageElement.textContent = "You lose";
        } else {
            currentScore--;
        }
        scoreElement.textContent = currentScore;
    }
});

document.querySelector(".restart").addEventListener("click", function() {
    doInitializeGame();
});