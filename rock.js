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
    else if (x == y) {
        if (x == 1) {
            console.log("The computer chose rock. It's a tie! Play again! ");
            return "tie";
        }
        else if (x == 2) {
            console.log("The computer chose paper. It's a tie! Play again! ");
            return "tie";
        }
        else if (x == 3) {
            console.log("The computer chose scissors. It's a tie! Play again! ");
            return "tie";
        }
    }
    else if (x == 1 && y == 2) {
        console.log("The computer chose rock. You won! Paper beats rock! ");
        return "won";
    }
    else if (x == 1 && y == 3) {
        console.log("The computer chose rock. You lost! Rock beats scissors. ");
        return "lost";
    }
    else if (x == 2 && y == 1) {
        console.log("The computer chose paper. You lost! Paper beats rock. ");
        return "lost";
    }
    else if (x == 2 && y == 3) {
        console.log("The computer chose paper. You won! Scissors beats paper! ");
        return "won";
    } 
    else if (x == 3 && y == 1) {
        console.log("The computer chose scissors. You won! Rock beats scissors! ");
        return "won";
    }
    else if (x == 3 && y == 2) {
        console.log("The computer chose scissors. You lost! Scissors beats paper. ");
        return "lost";
    }
    else {
        console.log(y)
        console.log("Something went wrong... ")
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 0; i < 5; i++) {
        if (i <= 0) {
            console.log("Round 1!!!!!")
        }
        else {
        console.log("round " + (i + 1) + "!!!!!")
        }
        let x = playRound()
            if (x == "tie") {
                i = i-1
            }
            else if (x == "won") {
                ++playerScore
            }
            else if (x == "lost") {
                ++computerScore
            }
    }
    if (playerScore > computerScore) {
        console.log("You won!!!! Here are the final scores: ")
    }
    else {
        console.log("You lost :( Here are the final scores: ")
    }
    console.log(`Computer score: ${computerScore}. Player score: ${playerScore}.`)

}



game()