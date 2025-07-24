function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 + 1);
    if (choice == 1) {
        console.log("Rock")
    }
    if (choice == 2) {
        console.log("Paper")
    }
    if (choice == 3) {
        console.log("Scissor")
    }
}

getComputerChoice();