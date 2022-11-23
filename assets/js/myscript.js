// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "reset-score") {
                restScore();
            } else {
                let playerChoice = this.getAttribute("data-type");
                runGame(playerChoice);
            }
        });
    }
})

function runGame(playerChoice) {
    console.log(playerChoice);

    console.log(computerChoice())
}

/**
 * Creates a random rock, paper or scissors choice for the cumpter 
 * and returns result
 */
function computerChoice() {
    let compChoice = Math.floor(Math.random() * 3);

    if (compChoice === 0) {
        compChoice = "rock";
    } else if (compChoice === 1){
        compChoice = "paper";
    } else if (compChoice === 2) {
        compChoice = "scissors";
    }

    return compChoice;
}