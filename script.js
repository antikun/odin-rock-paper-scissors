const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const resetBtn = document.querySelector("#reset-btn");

const playerScore = document.querySelector(".player-wins");
const computerScore = document.querySelector(".computer-wins");
const tieScore = document.querySelector(".ties");

const playTo = document.querySelector("#play-to")
let winningScore = parseInt(playTo.value);

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        return "rock";
    } else if (randomNum === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

let playerWins = 0;
let computerWins = 0;
let ties = 0;

let playerSelection;
let computerSelection;

function playRound(player, computer) {
    if (player === "rock" && computer === "scissors" ||
        player === "scissors" && computer === "paper" ||
        player === "paper" && computer === "rock") {
        playerWins++;
        playerScore.textContent = playerWins;
    } else if (player === computer) {
        ties++;
        tieScore.textContent = ties;
    } else {
        computerWins++;
        computerScore.textContent = computerWins;
    }
}

let isGameOver = false;
const win = document.querySelector(".win");

function game() {
    if (!isGameOver) {
        playRound(playerSelection, computerSelection);
    } if (playerScore.textContent == winningScore || computerScore.textContent == winningScore) {
        isGameOver = true;
        win.style.color = "green";
    }
}

rock.addEventListener("click", () => {
    playerSelection = "rock";
    computerSelection = getComputerChoice();
    game();
})

paper.addEventListener("click", () => {
    playerSelection = "paper";
    computerSelection = getComputerChoice();
    game();
})

scissors.addEventListener("click", () => {
    playerSelection = "scissors";
    computerSelection = getComputerChoice();
    game();
})

function resetGame() {
    isGameOver = false;
    playerWins = 0;
    computerWins = 0;
    ties = 0;
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    tieScore.textContent = 0;
    win.style.color = "black"
}

resetBtn.addEventListener("click", resetGame);

playTo.addEventListener("change", () => {
    winningScore = parseInt(playTo.value);
    resetGame();
})
