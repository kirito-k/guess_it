startupFunction()

function startupFunction() {
    // Hide results tab
    document.querySelector(".results").style.display = "none";

    // Start guessing game, Show the guess box 
    document.querySelector(".set-range").addEventListener("click", startGame);

    // Check the number for validation
    document.querySelector("#submit-num").addEventListener("click", checkGuess)
}

let minNum, maxNum, ans;
let results = document.querySelector(".answer");
let guessElem = document.querySelector("#guess"); 
let guesses = 0;
let maxGuess = 3;
function startGame(e) {
    e.preventDefault();
    document.querySelector(".results").style.display = "block";
    minNum = Number(document.querySelector(".set-min").value);
    maxNum = Number(document.querySelector(".set-max").value);
    ans = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
}

function checkGuess() {
    if (guesses == 3) {
        location.reload();
        return;
    }

    guesses += 1;
    let msg, newElem;
    let val = guessElem.value;
    
    if (val == ans) {
        msg = `Congrats! You guessed the number correct.`;
        results.innerText = msg;
        guessElem.style.borderColor = 'green';
        results.style.color = 'green';
        guessElem.disabled = true;
        gameOver();
    } else {
        if (guesses == maxGuess) {
            msg = `Game Over. The number was ${ans}`
            guessElem.disabled = true;
            gameOver();
        } else {
            if (val > maxNum || val < minNum) {
                msg = `Please enter a number between ${minNum} and ${maxNum}.`;
            } else {
                msg = "Wrong guess.";
            }
            msg = msg + ` Number of guesses left : ${maxGuess - guesses}`;
        } 

        results.textContent = msg;
        guessElem.style.borderColor = 'red';
        results.style.color = 'red';
    }
}

function gameOver() {
    document.querySelector("#submit-num").textContent = "Play Again";
}