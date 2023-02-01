// --vh 

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
window.addEventListener("resize", () => {
    let vh = widnow.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `#{vh}px`);
})

// --vh 

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

// MODAL start

const gameOverResult = document.querySelector("#game-over-result");
const contentWrapper = document.querySelector(".content-wrapper");
const popupWrapper = document.querySelector(".popup-wrapper");
const playAgain = document.querySelector("#play-again");

function openModal() {
    contentWrapper.classList.toggle("modal-active");
    popupWrapper.classList.toggle("modal-active");
}

function closeModal() {
    contentWrapper.classList.remove("modal-active");
    popupWrapper.classList.remove("modal-active");
}

popupWrapper.addEventListener("click", (e) => {
    const isOutside = !e.target.closest(".popup-content");
    if (isOutside) {
        closeModal();
    }
});

// MODAL end

function randomNum() {
    const randomNum = Math.floor(Math.random() * 3);
    return randomNum;
}

let ties = 0;

function playRound(p1, index1, p2, index2) {
    p2.btn[index2].classList.add("select-c");
    if (index1 === 0 && index2 === 2 ||
        index1 === 2 && index2 === 1 ||
        index1 === 1 && index2 === 0) {
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
        p1.btn[index1].classList.add("loser");
        p2.btn[index2].classList.add("winner");
        roundResult.textContent = `You lose this round! \r\n ${p2.choice[index2]} beats ${p1.choice[index1]}!`;
    }
}

let isGameOver = false;

function game(p1, index1, p2, index2) {
    if (!isGameOver) {
        playRound(p1, index1, p2, index2);
    } if (p1.score == winningScore) {
        isGameOver = true;
        openModal();
        gameOverResult.textContent = `CONGRATS! \r\n YOU WON THE GAME!`;
        setDisabled();
    } if (p2.score == winningScore) {
        isGameOver = true;
        openModal();
        gameOverResult.textContent = `OH NO! \r\n YOU LOST THE GAME!`
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
    game(player, 0, computer, randomNum());
})

player.btn[1].addEventListener("click", () => {
    clearSelection(player, computer);
    player.btn[1].classList.add("select-p");
    game(player, 1, computer, randomNum());
})

player.btn[2].addEventListener("click", () => {
    clearSelection(player, computer);
    player.btn[2].classList.add("select-p");
    game(player, 2, computer, randomNum());
})

function resetGame() {
    isGameOver = false;
    closeModal();
    clearSelection(player, computer);
    removeDisabled();
    player.score = 0;
    computer.score = 0;
    ties = 0;
    player.display.textContent = 0;
    computer.display.textContent = 0;
    tieScore.textContent = 0;
    roundResult.textContent = "";
}

resetBtn.addEventListener("click", resetGame);

playTo.addEventListener("change", () => {
    winningScore = parseInt(playTo.value);
    resetGame();
})

playAgain.addEventListener("click", resetGame);

