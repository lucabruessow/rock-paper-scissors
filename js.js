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
    let humanChoice = prompt("Choose rock [1], paper [2] or scissor [3].");
    return convertNumberToChoice(humanChoice);
}