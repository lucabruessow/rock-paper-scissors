function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    if (computerChoice == 1) {
        console.log("Rock")
    }
    if (computerChoice == 2) {
        console.log("Paper")
    }
    if (computerChoice == 3) {
        console.log("Scissor")
    }
}

getComputerChoice();