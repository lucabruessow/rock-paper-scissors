function convertNumberToChoice(choiceNumber) {
    if (choiceNumber == 1) { return "Rock"; }
    else if (choiceNumber == 2) { return "Paper"; }
    else if (choiceNumber == 3) { return "Scissors"; }
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    console.log(computerChoice);
    return convertNumberToChoice(computerChoice);
}

console.log(getComputerChoice());