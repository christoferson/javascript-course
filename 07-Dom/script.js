// Enable Strict Mode (Write more secure robust code)
'use strict';

// Query Selector
console.log(document.querySelector(".message"));
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Yey!";
console.log(document.querySelector(".message").textContent);

console.log(document.querySelector(".guess").value);
document.querySelector(".guess").value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
//document.querySelector(".number").textContent = secretNumber;

let currentScore = 10;
document.querySelector(".score").textContent = currentScore;

let highScore = 0;
document.querySelector(".highscore").textContent = highScore;

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
        if (currentScore > highScore) {
            highScore = currentScore;
            document.querySelector(".highscore").textContent = highScore;
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