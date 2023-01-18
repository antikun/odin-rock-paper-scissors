let choice = Math.floor(Math.random() * 3) + 1;
console.log(choice)

function getComputerChoice(choice) {
    console.log(arguments)
    if (choice === 1) {
        console.log("rock");
        return "rock";
    } else if (choice === 2) {
        console.log("paper");
        return "paper";
    } else {
        console.log("scissors");
        return "scissors";
    }
}

const computerSelection = getComputerChoice(choice);

const playerSelection = "rock";

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock") {
        return `You win! ${playerSelection} beats ${computerSelection}.`
    } else if (playerSelection === computerSelection) {
        return `It's a draw!`
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`
    }
}