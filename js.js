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

function startAgain() {
    const userScore = document.querySelector(".user-score-num");
    const computerScore = document.querySelector(".computer-score-num");
    const resultDiv = document.querySelector(".result p");

    userScore.textContent = 0;
    computerScore.textContent = 0;
    resultDiv.textContent = "Have fun!";

    overlay.classList.add("hidden");
}

function showGameEndOverlay(user, computer) {
    const overlayResultText = document.querySelector(".overlay-content p");
    overlay.classList.remove("hidden");
    if (user === 5) {
        overlayResultText.textContent = "You won!";
    }
    if (computer === 5) {
        overlayResultText.textContent = "You lose!";
    }
}

function updateDOM(result, humanChoice, computerChoice) {
    const userScore = document.querySelector(".user-score-num");
    const computerScore = document.querySelector(".computer-score-num");
    const resultDiv = document.querySelector(".result p");

    switch (result) {
        case "Draw":
            resultDiv.textContent = `${humanChoice} draws ${computerChoice}`;
            break;
        
        case "Win":
            resultDiv.textContent = `${humanChoice} beats ${computerChoice}`;
            let newUserScore = parseInt(userScore.textContent) + 1;
            userScore.textContent = newUserScore;
            break;

        case "Lose":
            resultDiv.textContent = `${humanChoice} loses vs. ${computerChoice}`;
            let newComputerScore = parseInt(computerScore.textContent) + 1;
            computerScore.textContent = newComputerScore
    }

    const user = parseInt(userScore.textContent);
    const computer = parseInt(computerScore.textContent);

    if (computer >= 5 || user >= 5) {
        showGameEndOverlay(user, computer);
    }
}

function playRound(event) {
    const humanChoice = event.target.id;
    const computerChoice = getComputerChoice();
    const result = isWin(humanChoice, computerChoice);
    updateDOM(result, humanChoice, computerChoice);
}

const overlay = document.querySelector(".overlay");
const overlayClose = document.querySelector(".close-overlay")

const buttons = document.querySelectorAll(".choice");
    buttons.forEach(button => {
        button.addEventListener("click", playRound);
    });

overlayClose.addEventListener("click", startAgain);