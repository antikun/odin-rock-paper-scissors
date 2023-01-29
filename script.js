const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const resetBtn = document.querySelector("#reset-btn");

const playerScore = document.querySelector(".player-wins");
const computerScore = document.querySelector(".computer-wins");
const tieScore = document.querySelector(".ties");

const playTo = document.querySelector("#play-to")
let winningScore = parseInt(playTo.value);

const roundResult = document.querySelector("#win-lose-result");
const playAgain = document.querySelector("#play-again");

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        return "Rock";
    } else if (randomNum === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

let playerWins = 0;
let computerWins = 0;
let ties = 0;

let playerSelection;
let computerSelection;

function playRound(player, computer) {
    if (player === "Rock" && computer === "Scissors" ||
        player === "Scissors" && computer === "Paper" ||
        player === "Paper" && computer === "Rock") {
        playerWins++;
        playerScore.textContent = playerWins;
        roundResult.textContent = `You win! ${player} beats ${computer}!`;
    } else if (player === computer) {
        ties++;
        tieScore.textContent = ties;
        roundResult.textContent = `It's a tie!`;
    } else {
        computerWins++;
        computerScore.textContent = computerWins;
        roundResult.textContent = `You lose! ${computer} beats ${player}!`;
    }
}

let isGameOver = false;

function game() {
    if (!isGameOver) {
        playRound(playerSelection, computerSelection);
    } if (playerScore.textContent == winningScore) {
        isGameOver = true;
        roundResult.textContent = `Congrats! You won the game!`;
        playAgain.textContent = "Play again?";
    } if (computerScore.textContent == winningScore) {
        isGameOver = true;
        roundResult.textContent = `Oh no! You lost the game!`
        playAgain.textContent = "Play again?";
    }
}

rock.addEventListener("click", () => {
    playerSelection = "Rock";
    computerSelection = getComputerChoice();
    game();
})

paper.addEventListener("click", () => {
    playerSelection = "Paper";
    computerSelection = getComputerChoice();
    game();
})

scissors.addEventListener("click", () => {
    playerSelection = "Scissors";
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
    roundResult.textContent = "";
    playAgain.textContent = "";
}

resetBtn.addEventListener("click", resetGame);

playTo.addEventListener("change", () => {
    winningScore = parseInt(playTo.value);
    resetGame();
})

playAgain.addEventListener("click", resetGame);