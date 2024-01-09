



const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");

const playerScoreText = document.getElementById("player-score");
const computerScoreText = document.getElementById("computer-score");

const gameMessage = document.querySelector('.message')


const choices = [rockButton, paperButton, scissorsButton];


choices.forEach(element => {
    element.addEventListener("click", () => {
        round(element, getComputerChoice());
    });
});


function getComputerChoice() {
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function round(playerChoice, computerChoice) {
    const playerIndex = choices.indexOf(playerChoice);



    if (playerChoice === computerChoice) {
        draw();
    }
    else if (choices.at(playerIndex - 1) === computerChoice) {
        win();
    }
    else {
        lose();
    }

    colorCards(playerChoice, computerChoice);
    checkGameOver();



}

function colorCards(playerChoice, computerChoice) {
    const classes = ["player-card", "computer-card", "tie-card", "hover"];
    console.log("color");
    choices.forEach(element => {
        element.classList.remove(...classes);
        if (element === playerChoice) {
            if (element === computerChoice) {
                element.classList.add(classes[2]);
                return;
            }

            element.classList.add(classes[0]);
            return;
        }
        else if (element === computerChoice) {
            element.classList.add(classes[1]);
        }

        element.classList.add("hover");

    });
}

function capitalize(string) {
    firstLetter = string.charAt(0);
    restOfString = string.slice(1);

    return firstLetter.toUpperCase() + restOfString.toLowerCase();
}

function setScore(amount)
{

}

function win() {
    let score = Number(playerScoreText.textContent) + 1;
    playerScoreText.textContent = score;
    gameMessage.textContent = `You win this round!`;
}

function lose() {
    let score = Number(computerScoreText.textContent) + 1;
    computerScoreText.textContent = score;
    gameMessage.textContent = "The computer wins this round!";
}

function draw() {
    console.log(`Draw`);
    gameMessage.textContent = "Draw!";
}

function checkGameOver()
{
    if (playerScoreText.textContent === "5")
    {
        gameMessage.textContent = "Congrats! You win the game!";
        playerScoreText.textContent = 0;
        computerScoreText.textContent = 0;
    }
    else if (computerScoreText.textContent === "5")
    {
        gameMessage.textContent = "The computer wins the game! Try Again!";
        playerScoreText.textContent = 0;
        computerScoreText.textContent = 0;
    }
}






