function convertNumberToChoice(choiceNumber) {
    if (choiceNumber == 1) { return "rock"; }
    else if (choiceNumber == 2) { return "paper"; }
    else if (choiceNumber == 3) { return "scissors"; }
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    return convertNumberToChoice(computerChoice);
}

function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper or scissors.").toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
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

let computerScore = 0
let humanScore = 0

for (let step = 0; step < 5; step++) {

    let isWin = playRound(getHumanChoice(), getComputerChoice());

    if (isWin == "Lose") {
        computerScore += 1;
    }

    if (isWin == "Win") {
        humanScore += 1;
    }

    console.log(`${isWin}.
Your Score: ${humanScore}
Computer Score: ${computerScore}`)

}