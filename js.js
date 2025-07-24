function convertNumberToChoice(choiceNumber) {
    if (choiceNumber == 1) { return "Rock"; }
    else if (choiceNumber == 2) { return "Paper"; }
    else if (choiceNumber == 3) { return "Scissors"; }
}

function getComputerChoice() {
    let computerChoice = toString(Math.floor(Math.random() * 3 + 1));
    return convertNumberToChoice(computerChoice)
}

getComputerChoice();