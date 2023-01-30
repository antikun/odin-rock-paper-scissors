const computer = {
    score: 0,
    btn: [document.querySelector("#computer-rock"), document.querySelector("#computer-paper"), document.querySelector("#computer-scissors")],
    choice: ["Rock", "Paper", "Scissors"],
    display: document.querySelector(".computer-wins")
}

const player = {
    score: 0,
    btn: [document.querySelector("#rock"), document.querySelector("#paper"), document.querySelector("#scissors")],
    choice: ["Rock", "Paper", "Scissors"],
    display: document.querySelector(".player-wins")
}

const resetBtn = document.querySelector("#reset-btn");

const tieScore = document.querySelector(".ties");

const playTo = document.querySelector("#play-to")
let winningScore = 3;

const roundResult = document.querySelector("#win-lose-result");
const playAgain = document.querySelector("#play-again");

function getComputerChoice(p) {
    const randomNum = Math.floor(Math.random() * 3);
    p.btn[randomNum].classList.add("select-c");
    return randomNum;
}

let ties = 0;

function playRound(p1, index1, p2, index2) {
    if (index1 > index2) {
        p1.score++;
        p1.display.textContent = p1.score;
        p1.btn[index1].classList.add("winner");
        p2.btn[index2].classList.add("loser");
        roundResult.textContent = `You win this round! \r\n ${p1.choice[index1]} beats ${p2.choice[index2]}!`;
    } else if (index1 === index2) {
        ties++;
        tieScore.textContent = ties;
        roundResult.textContent = `It's a tie!`;
    } else {
        p2.score++;
        p2.display.textContent = p2.score;
        p1.btn[index1].classList.toggle("loser");
        p2.btn[index2].classList.toggle("winner");
        roundResult.textContent = `You lose this round! \r\n ${p2.choice[index2]} beats ${p1.choice[index1]}!`;
    }
}

let isGameOver = false;

function game(p1, index1, p2, index2) {
    if (!isGameOver) {
        playRound(p1, index1, p2, index2);
    } if (p1.score == winningScore) {
        isGameOver = true;
        roundResult.textContent = `CONGRATS! \r\n YOU WON THE GAME!`;
        playAgain.textContent = "Play again?";
        setDisabled();
    } if (p2.score == winningScore) {
        isGameOver = true;
        roundResult.textContent = `OH NO! \r\n YOU LOST THE GAME!`
        playAgain.textContent = "Play again?";
        setDisabled();
    }
}

function setDisabled() {
    for (let i = 0; i < 3; i++) {
        player.btn[i].setAttribute("disabled", true);
    }
}

function removeDisabled() {
    for (let i = 0; i < 3; i++) {
        player.btn[i].removeAttribute("disabled", true);
    }
}

function clearSelection(p1, p2) {
    for (let i = 0; i < 3; i++) {
        p1.btn[i].classList.remove("select-p");
        p2.btn[i].classList.remove("select-c");
        player.btn[i].classList.remove("winner", "loser");
        computer.btn[i].classList.remove("winner", "loser");
    }
}

player.btn[0].addEventListener("click", () => {
    clearSelection(player, computer);
    player.btn[0].classList.add("select-p");
    game(player, 0, computer, getComputerChoice(computer));
})

player.btn[1].addEventListener("click", () => {
    clearSelection(player, computer);
    player.btn[1].classList.add("select-p");
    game(player, 1, computer, getComputerChoice(computer));
})

player.btn[2].addEventListener("click", () => {
    clearSelection(player, computer);
    player.btn[2].classList.add("select-p");
    game(player, 2, computer, getComputerChoice(computer));
})

function resetGame() {
    isGameOver = false;
    clearSelection(player, computer);
    removeDisabled();
    player.score = 0;
    computer.score = 0;
    ties = 0;
    player.display.textContent = 0;
    computer.display.textContent = 0;
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
