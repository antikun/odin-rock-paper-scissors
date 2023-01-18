let choice = Math.floor(Math.random() * 3) + 1;
console.log(choice)

function getComputerChoice(num) {
    console.log(arguments)
    if (num === 1) {
        return "rock";
    } else if (num === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

const computerSelection = getComputerChoice(choice);

let playerSelection;

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, paper, or scissors? Make your choice").toLowerCase();
    const capitalize = (str) => {
        let firstLetter = str.slice(0, 1).toUpperCase();
        let restOfStr = str.slice(1).toLowerCase()
        return firstLetter + restOfStr;
    }
    if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock") {
        return `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}.`;
    } else if (playerSelection === computerSelection) {
        return `It's a draw!`;
    } else {
        return `You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}.`;
    }
}

function game(num) {
    // let roundsNum = parseInt(prompt("Enter number of rounds"))
    for (let i = 0; i < num; i++) {
        let result = playRound(playerSelection, computerSelection);
        console.log(result)
    }
}