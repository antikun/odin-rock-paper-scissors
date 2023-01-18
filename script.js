let randomNum;

function getComputerChoice(randomNum) {
    randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        return "rock";
    } else if (randomNum === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

let computerSelection;

let playerSelection;

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice(randomNum);
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


let roundsNum;

function game(num) {
    for (let i = 0; i < num; i++) {
        let result = playRound(playerSelection, computerSelection);
        console.log(result)
    }
}

const gameStart = prompt("A game of Rock, Paper, Scissors? Type in \"start\"");
if (gameStart == null) {
    console.log("Oh, okay. Maybe next time!")
} else if (gameStart.toLowerCase() === "start") {
    roundsNum = parseInt(prompt("Enter number of rounds"));
    game(roundsNum);
} else {
    console.log("Mistyped \"start\"? Try again?")
}