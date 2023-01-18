let choice = Math.floor(Math.random() * 3) + 1;
console.log(choice)

function getComputerChoice(num) {
    console.log(arguments)
    if (num === 1) {
        console.log("Rock");
        return "Rock";
    } else if (num === 2) {
        console.log("Paper");
        return "Paper";
    } else {
        console.log("Scissors");
        return "Scissors";
    }
}

const computerSelection = getComputerChoice(choice);

const playerSelection = prompt("Rock, paper, or scissors? Make your choice").toLowerCase();

function playRound(playerSelection, computerSelection) {
    const capitalize = (str) => {
        let firstLetter = str.slice(0, 1).toUpperCase();
        let restOfStr = str.slice(1).toLowerCase()
        return firstLetter + restOfStr;
    }
    if (playerSelection === "rock" && computerSelection === "Scissors" ||
        playerSelection === "scissors" && computerSelection === "Paper" ||
        playerSelection === "paper" && computerSelection === "Rock") {
        return `You win! ${capitalize(playerSelection)} beats ${computerSelection}.`
    } else if (playerSelection === computerSelection) {
        return `It's a draw!`
    } else {
        return `You lose! ${computerSelection} beats ${capitalize(playerSelection)}.`
    }
}