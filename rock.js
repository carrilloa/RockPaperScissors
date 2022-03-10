function computerPlay() {
    let choice = Math.floor((Math.random() * 3) + 1);
    return choice;
}

function playerSelection() {
    let playerChoice = String(prompt("Please choose 'Rock' 'Paper' or 'Scissors' "));
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice == "rock") {
        return 1;
    }
    else if (playerChoice == "paper") {
        return 2;
    }
    else if (playerChoice == "scissors") {
        return 3;
    }
    else {
        console.log("Please try again");
        return 4;
    }
}

function playRound() {
    x = computerPlay();
    y = playerSelection();
    if (y == 4) {
        playRound();
    }
    if (x == y) {
        if (x == 1) {
            console.log("The computer chose rock. It's a tie! Play again! ");
            playRound();
        }
        else if (x == 2) {
            console.log("The computer chose paper. It's a tie! Play again! ");
            playRound();
        }
        else if (x == 3) {
            console.log("The computer chose scissors. It's a tie! Play again! ");
            playRound();
        }
        else {
            console.log("Something went wrong. Try again! ")
            playRound();
        }

    }
    if (x == 1 && y == 2) {
        console.log("The computer chose rock. You won! Paper beats rock! ");
        playRound();
    }
    else if (x == 1 && y == 3) {
        console.log("The computer chose rock. You lost! Rock beats scissors. ");
        playRound();
    }
    else if (x == 2 && y == 1) {
        console.log("The computer chose paper. You lost! Paper beats rock. ");
        playRound();
    }
    else if (x == 2 && y == 3) {
        console.log("The computer chose paper. You won! Scissors beats paper! ");
        playRound();
    } 
    else if (x == 3 && y == 1) {
        console.log("The computer chose scissors. You won! Rock beats scissors. ");
        playRound();
    }
    else if (x == 3 && y == 2) {
        console.log("The computer chose scissors. You lost! Scissors beats paper. ");
        playRound();
    }
}


playRound();
