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

/**
 * Runs the game once user clicks on a Rock, Paper or Scissors button
 */
function runGame(playerChoice) {

    console.log(playerChoice);

    let compChoice = computerChoice();
    console.log(compChoice);
    
    let winner = calculateWinner(playerChoice, compChoice);
    
    if (winner === "player") {
        document.getElementById("winner-text").innerText = ("You WON this round!");
    } else if (winner === "computer") {
        document.getElementById("winner-text").innerText = ("You LOST this round");
    } else if (winner === "tie") {
        document.getElementById("winner-text").innerText = ("This round was a TIE");
    } else if (winner === "error") {
        alert("invalid option selected");
        throw (`error ${playerChoice} is invalid!`);
    }

}

/**
 * Creates a random rock, paper or scissors choice for the computer 
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

/**
 * Calculates the winner of Rock, Paper or scissors and retunes 
 * a winner value
 */
function calculateWinner(playerChoice, compChoice) {

    let winner;

    if (playerChoice === "rock" && compChoice === "scissors") {
        winner = "player";
    } else if (playerChoice === "paper" && compChoice === "rock") {
        winner = "player";
    } else if (playerChoice === "scissors" && compChoice === "paper") {
        winner = "player";
    } else if (compChoice === "rock" && playerChoice === "scissors") {
        winner = "computer";
    } else if (compChoice === "paper" && playerChoice === "rock") {
        winner = "computer";
    } else if (compChoice === "scissors" && playerChoice === "paper") {
        winner = "computer";
    } else if (playerChoice === compChoice) {
        winner = "tie";
    } else {
        winner = "error"
    }

    return winner;

}

function restScore() {

}