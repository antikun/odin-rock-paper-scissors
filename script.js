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

let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice(randomNum);
    playerSelection = prompt("Rock, paper, or scissors? Make your choice").toLowerCase();
    const capitalize = (str) => {
        let firstLetter = str.slice(0, 1).toUpperCase();
        let restOfStr = str.slice(1).toLowerCase()
        return firstLetter + restOfStr;
    }
    while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        playerSelection = prompt("Invalid entry. Please, choose rock, paper, or scissors.").toLowerCase();
    }
    if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock") {
        playerWins++;
        console.log(`You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}.`)
        return `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}.`;
    } else if (playerSelection === computerSelection) {
        console.log(`It's a draw!`)
        return `It's a draw!`;
    } else {
        computerWins++;
        console.log(`You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}.`)
        return `You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}.`;
    }
}


function game(num) {
    for (let i = 0; i < num; i++) {
        playRound(playerSelection, computerSelection);
    }
    while (playerWins === computerWins) {
        console.log("It's a draw! Play one more round!")
        playRound(playerSelection, computerSelection)
    }
    console.log("*****************************");
    if (playerWins > computerWins) {
        console.log("Congrats! You won the game!");
    } else {
        console.log("Ah, too bad! You lost the game!");
    }
    console.log("*****************************");
}

const gameStart = prompt("A game of Rock, Paper, Scissors? Type in \"start\"");
if (gameStart == null) {
    console.log("Oh, okay. Maybe next time!")
} else if (gameStart.toLowerCase() === "start") {
    game(5);
} else {
    console.log("Mistyped \"start\"? Try again?")
}