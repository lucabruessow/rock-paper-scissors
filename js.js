function convertNumberToChoice(choiceNumber) {
    if (choiceNumber == 1) { return "Rock"; }
    else if (choiceNumber == 2) { return "Paper"; }
    else if (choiceNumber == 3) { return "Scissors"; }
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    return convertNumberToChoice(computerChoice);
}

function getHumanChoice() {
    let humanChoice = prompt("Choose rock [1], paper [2] or scissors [3].");
    return convertNumberToChoice(humanChoice);
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "Rock") {
        if (computerChoice == "Rock") { return "draw" }
        if (computerChoice == "Paper") { return "lose" }
        if (computerChoice == "Scissors") { return "win" }
    }
    if (humanChoice == "Paper") {
        if (computerChoice == "Rock") { return "win" }
        if (computerChoice == "Paper") { return "draw" }
        if (computerChoice == "Scissors") { return "lose" }
    }
    if (humanChoice == "Scissors") {
        if (computerChoice == "Rock") { return "lose" }
        if (computerChoice == "Paper") { return "win" }
        if (computerChoice == "Scissors") { return "draw" }
    }
}