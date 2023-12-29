const choices = ["rock", "paper", "scissors"];

function getComputerChoice()
{
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function round(playerChoice, computerChoice)
{
    player = playerChoice.toLowerCase();

    switch(player)
    {
        //Rock
        case choices[0]:
            //If computer chooses Scissors
            if (computerChoice === choices[2])
            {
                return("win");
            }
            //If computer chooses Paper
            else if(computerChoice == choices[1])
            {
                return("loose");
            }
            
            return("draw");
            

        //Paper
        case choices[1]:
            //If computer chooses Rock
            if (computerChoice === choices[0])
            {
                return("win");
            }
            //If computer chooses Scissors
            else if(computerChoice == choices[2])
            {
                return("loose");
            }
            
            return("draw");

        //Scissors
        case choices[2]:
            //If computer chooses Rock
            if (computerChoice === choices[0])
            {
                return("loose");
            }
            //If computer chooses Paper
            else if(computerChoice == choices[1])
            {
                return("win");
            }
            
            return("draw");
    }

}

function capitalize(string)
{
    firstLetter = string.charAt(0);
    restOfString = string.slice(1);
    
    return firstLetter.toUpperCase() + restOfString.toLowerCase();
}

function game()
{
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++)
    {
        let playerChoice = prompt("Rock, Paper, or Scissors?");
        let computerChoice = getComputerChoice();

        console.log(`Player: ${playerChoice} 
Computer: ${computerChoice}`);

        const result = round(playerChoice, computerChoice);
        
        switch(result)
        {
            case "win":
                console.log(`You Win! ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}`);
                playerScore++;
                break;
            case "loose":
                console.log(`You Loose! ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}`);
                computerScore++;
                break;
            case "draw":
                console.log(`Draw! ${capitalize(playerChoice)} is the same as ${capitalize(computerChoice)}`);
                i -= 1;
                break;
        }

    }

    if (playerScore > computerScore)
    {
        console.log("You Win!");
    }
    else
    {
        console.log("You Lose!");
    }
    
}

game();





