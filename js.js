function convertNumberToChoice(choiceNumber) {
    if (choiceNumber == 1) { return "rock"; }
    else if (choiceNumber == 2) { return "paper"; }
    else if (choiceNumber == 3) { return "scissors"; }
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    return convertNumberToChoice(computerChoice);
}

function isWin(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        if (computerChoice == "rock") { return "Draw" }
        if (computerChoice == "paper") { return "Lose" }
        if (computerChoice == "scissors") { return "Win" }
    }
    if (humanChoice == "paper") {
        if (computerChoice == "rock") { return "Win" }
        if (computerChoice == "paper") { return "Draw" }
        if (computerChoice == "scissors") { return "Lose" }
    }
    if (humanChoice == "scissors") {
        if (computerChoice == "rock") { return "Lose" }
        if (computerChoice == "paper") { return "Win" }
        if (computerChoice == "scissors") { return "Draw" }
    }
}

function playRound(event) {
    const humanChoice = event.target.id;
    const computerChoice = getComputerChoice();
    result = isWin(humanChoice, computerChoice);
}

let computerScore = 0
let humanScore = 0

const buttons = document.querySelectorAll(".choice");
    buttons.forEach(button => {
        button.addEventListener("click", playRound);
    });