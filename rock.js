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
    if (x == 1 && y == 2) {
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
}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 0; i < 5; i++) {
        console.log("round " + (i + 1) + "!!!!!")
        x = playRound();
        if (x = "tie") {
            console.log("tie");
            console.log(i);
            i = i - 1;
            console.log(i);

        }
        else if (x = "won") {
            playerScore++;
            console.log("won");
            console.log("player score");
            console.log(playerScore);
            console.log(i);
        }
        else if (x = "lost") {
            computerScore++;
            console.log("lost");
            console.log("comp score");
            console.log(computerScore);
            console.log(i);
        }
    }
    if (computerScore > playerScore) {
        console.log(`You lost! The computer beat you ${computerScore} to ${playerScore}. :(`)
    }
    else if (playerScore > computerScore) {
        console.log(`You won!!! You beat the computer ${playerScore} to ${computerScore}!!!`)
    }
}

game()
