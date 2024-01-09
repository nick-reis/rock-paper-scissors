



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
        colorCards(playerChoice, computerChoice, "tie-card");
        draw();
    }
    else if (choices.at(playerIndex - 1) === computerChoice) {
        colorCards(playerChoice, computerChoice, "player-card");
        win();
    }
    else {
        colorCards(playerChoice, computerChoice, "computer-card")
        lose();
    }

    checkGameOver();



}

function colorCards(playerChoice, computerChoice, colorClass) {
    choices.forEach(element => {
        element.classList.remove("player-card", "computer-card", "tie-card", "hover");
        if(element === playerChoice || element === computerChoice)
        {
            element.classList.add(colorClass);
        }
        else
        {
            element.classList.add("hover");
        }
        

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






