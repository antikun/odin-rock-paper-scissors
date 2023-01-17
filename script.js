let choice = Math.floor(Math.random() * 3) + 1;
console.log(choice)

function getComputerChoice(choice) {
    console.log(arguments)
    if (choice === 1) {
        console.log("Rock");
        return "Rock";
    } else if (choice === 2) {
        console.log("Paper");
        return "Paper";
    } else {
        console.log("Scissors");
        return "Scissors";
    }
}